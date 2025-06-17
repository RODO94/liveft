import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as s3 from "@pulumi/aws/s3";
import * as ec2 from "@pulumi/aws/ec2";
import * as fs from "fs";
import * as path from "path";

// Define stacks
const stack = pulumi.getStack();

// MySQL Database
const db = new aws.rds.Instance(`${stack}-db`, {
  engine: "mysql",
  instanceClass: "db.t2.micro",
  allocatedStorage: 20,
  dbName: `${stack}_db`,
  username: "admin",
  password: "password",
  skipFinalSnapshot: true,
});

// Backend API (EC2 instance)
const backend = new ec2.Instance(`${stack}-backend`, {
  ami: "ami-0c55b159cbfafe1f0", // Amazon Linux 2 AMI
  instanceType: "t2.micro",
  tags: {
    Name: `${stack}-backend`,
  },
  userData: fs.readFileSync(
    path.join(__dirname, "../server/dist/user-data.sh"),
    "utf-8"
  ), // Assuming a user-data script for backend setup
});

// Frontend (S3 bucket for static website)
const frontendBucket = new s3.Bucket(`${stack}-frontend`, {
  website: {
    indexDocument: "index.html",
  },
});

const frontendBucketPolicy = new s3.BucketPolicy(`${stack}-frontend-policy`, {
  bucket: frontendBucket.bucket,
  policy: frontendBucket.bucket.apply(publicReadPolicyForBucket),
});

// Upload frontend files to S3
const clientDistPath = path.join(__dirname, "../client/dist");
fs.readdirSync(clientDistPath).forEach((file) => {
  new s3.BucketObject(file, {
    bucket: frontendBucket,
    source: new pulumi.asset.FileAsset(path.join(clientDistPath, file)),
    contentType: getContentType(file),
  });
});

function publicReadPolicyForBucket(bucketName: string): string {
  return JSON.stringify({
    Version: "2012-10-17",
    Statement: [
      {
        Effect: "Allow",
        Principal: "*",
        Action: ["s3:GetObject"],
        Resource: [`arn:aws:s3:::${bucketName}/*`],
      },
    ],
  });
}

function getContentType(fileName: string): string {
  const ext = path.extname(fileName).toLowerCase();
  switch (ext) {
    case ".html":
      return "text/html";
    case ".js":
      return "application/javascript";
    case ".css":
      return "text/css";
    case ".json":
      return "application/json";
    case ".png":
      return "image/png";
    case ".jpg":
      return "image/jpeg";
    case ".gif":
      return "image/gif";
    default:
      return "application/octet-stream";
  }
}

// Export the URLs and other relevant information
export const dbName = db.name;
export const backendPublicIp = backend.publicIp;
export const backendPublicDns = backend.publicDns;
export const frontendBucketUrl = pulumi.interpolate`http://${frontendBucket.websiteEndpoint}`;

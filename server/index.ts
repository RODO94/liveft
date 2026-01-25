import { configDotenv } from "dotenv";
import app from "./app.js";

const { parsed } = configDotenv();
const PORT = parsed?.PORT || 8080;

app.listen(PORT, () => {
  console.log(`running at ${process.env.BASE_URL}${PORT}`);
});

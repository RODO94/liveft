import Container from "@mui/material/Container";
import { LiftRecord } from "./LiftRecord";
import Typography from "@mui/material/Typography";
import { UserLift } from "../../../types/lifts";
import { roryLifts } from "../../../data/staticLiftData";
import Button from "@mui/material/Button";

export const LiftsSection = () => (
  <Container>
    <Typography>Lifts</Typography>
    {roryLifts.map((lift: UserLift) => {
      return <LiftRecord liftName={lift.name} weight={lift.weight} />;
    })}
    <Container>
      <Button>...see more</Button>
      <Button>+ Add lift</Button>
    </Container>
  </Container>
);

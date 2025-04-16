import { LiftRecord } from "./LiftRecord";
import Typography from "@mui/material/Typography";
import { LiftNames } from "../../../types/lifts";
import { roryLifts } from "../../../data/staticLiftData";
import Box from "@mui/material/Box";
import { useState } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.action.dormant,
  color: theme.palette.text.primary,
  textTransform: "none",
  "&:hover": {
    backgroundColor: theme.palette.action.active,
  },
}));

export const LiftsSection = () => {
  const [numberOfLiftsShown, setNumberOfLiftsShown] = useState(3);
  return (
    <Box display={"flex"} flexDirection="column" gap={3} width="100%">
      <Typography variant="h1">Lifts</Typography>
      <Box display={"flex"} flexDirection="column" gap={1}>
        {Object.keys(roryLifts).map((liftName, index) => {
          if (numberOfLiftsShown <= index) return null;
          if (roryLifts[liftName as LiftNames].length === 0) return null;
          return (
            <LiftRecord
              key={liftName}
              lifts={roryLifts[liftName as LiftNames]}
            />
          );
        })}
        <Box display={"flex"} gap={1} flexDirection="row" width="100%">
          <ColorButton
            fullWidth
            onClick={() => setNumberOfLiftsShown(numberOfLiftsShown + 3)}
          >
            ...see more
          </ColorButton>
          <ColorButton fullWidth>+ Add lift</ColorButton>
        </Box>
      </Box>
    </Box>
  );
};

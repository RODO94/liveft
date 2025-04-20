import Autocomplete from "@mui/material/Autocomplete";
import { getLiftName, lifts } from "../../../../../data/staticLiftData";
import { SetStateFunction } from "../../../../../types/utils";
import { filterOptionsWithAdd } from "./utils";
import { StyledTextField } from "../../../../../ui/components/StyledTextField";
import { LiftInformationState } from "../AddLiftModal";

export default function LiftAutocomplete({
  value,
  setValue,
}: {
  value: LiftInformationState;
  setValue: SetStateFunction<LiftInformationState>;
}) {
  return (
    <Autocomplete
      fullWidth
      sx={{
        "& .MuiAutocomplete-inputRoot": {
          padding: "0px",
        },
      }}
      value={value.liftId}
      onChange={(_event, newValue) =>
        setValue({ ...value, liftId: newValue || "" })
      }
      filterOptions={filterOptionsWithAdd}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="lift-name"
      options={lifts.map((lift) => lift.id)}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps} style={{ color: "black" }}>
            {getLiftName(option).name}
          </li>
        );
      }}
      freeSolo
      renderInput={(params) => (
        <StyledTextField {...params} required color="secondary" />
      )}
    />
  );
}

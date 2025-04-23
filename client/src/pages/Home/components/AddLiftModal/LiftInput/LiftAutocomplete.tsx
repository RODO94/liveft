import Autocomplete from "@mui/material/Autocomplete";
import { lifts } from "../../../../../data/staticLiftData";
import { SetStateFunction } from "../../../../../types/utils";
import { filterOptionsWithAdd } from "./utils";
import { StyledTextField } from "../../../../../ui/components/StyledTextField";
import { LiftInformationState } from "../AddLiftModal";
import { Lift } from "../../../../../types/lifts";

export default function LiftAutocomplete({
  value,
  setValue,
}: {
  value: LiftInformationState;
  setValue: SetStateFunction<LiftInformationState>;
}) {
  return (
    <Autocomplete<Lift, false, false, true, "div">
      fullWidth
      sx={{
        "& .MuiAutocomplete-inputRoot": {
          padding: "0px",
        },
      }}
      value={value.name}
      onChange={(_event, newValue) => {
        if (typeof newValue === "string")
          return setValue({ ...value, id: newValue });
        if (newValue) return setValue({ ...value, ...newValue });
      }}
      filterOptions={filterOptionsWithAdd}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="lift-name"
      options={lifts}
      getOptionLabel={(option) => {
        if (typeof option === "object") return option.name;
        return option;
      }}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps} style={{ color: "black" }}>
            {option.name}
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

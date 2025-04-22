import { FilterOptionsState } from "@mui/material/useAutocomplete";
import { createFilterOptions } from "@mui/material/Autocomplete";

const filter = createFilterOptions<string>();

export const filterOptionsWithAdd = (
  options: string[],
  params: FilterOptionsState<string>
) => {
  const filtered = filter(options, params);

  const { inputValue } = params;
  // Suggest the creation of a new value
  const isExisting = options.some((option) => inputValue === option);
  if (inputValue !== "" && !isExisting) {
    filtered.push(inputValue);
  }

  return filtered;
};

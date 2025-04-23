import { FilterOptionsState } from "@mui/material/useAutocomplete";
import { createFilterOptions } from "@mui/material/Autocomplete";
import { Lift } from "../../../../../types/lifts";
import { slugify } from "../../../../../utils";

const filter = createFilterOptions<Lift>();

export const filterOptionsWithAdd = (
  options: Lift[],
  params: FilterOptionsState<Lift>
) => {
  const filtered = filter(options, params);
  const { inputValue } = params;

  // Suggest the creation of a new value
  const isExisting = options.some(
    (option) => slugify(inputValue) === option.slug
  );
  if (inputValue !== "" && !isExisting) {
    filtered.push({
      id: `${Math.random()}`,
      name: inputValue,
      slug: slugify(inputValue),
    });
  }

  return filtered;
};

import { TextFieldProps } from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { StyledTextField } from "./StyledTextField";
import { ChangeEvent } from "react";

export default function DateInput({
  value,
  onChange,
  inputProps,
  label,
  name,
  minDate,
  maxDate,
}: {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  inputProps?: TextFieldProps;
  label?: string;
  name: string;
  minDate?: string;
  maxDate?: string;
}) {
  return (
    <InputLabel
      htmlFor={name}
      id={`${name}-label`}
      color='secondary'
      sx={{ display: "flex", flexDirection: "column" }}
    >
      {label}
      <StyledTextField
        aria-describedby={`${name}-label`}
        autoComplete='off'
        value={value || ""}
        onChange={(e) => onChange(e)}
        required
        id={name}
        name={name}
        type='date'
        fullWidth
        color='secondary'
        inputProps={{
          min: minDate,
          max: maxDate,
        }}
        {...inputProps}
      />
    </InputLabel>
  );
}

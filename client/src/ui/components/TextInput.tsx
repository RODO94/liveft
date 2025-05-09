import { TextFieldProps } from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { StyledTextField } from "./StyledTextField";
import { ChangeEvent } from "react";

export default function TextInput({
  value,
  onChange,
  inputProps,
  label,
  name,
}: {
  value: string | number | boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  inputProps?: TextFieldProps;
  label?: string;
  name: string;
}) {
  return (
    <InputLabel
      htmlFor={name}
      id={`${name}-label`}
      color="secondary"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      {label}
      <StyledTextField
        aria-describedby={`${name}-label`}
        autoFocus
        autoComplete="off"
        value={value ? value : ""}
        onChange={(e) => onChange(e)}
        required
        id={name}
        name={name}
        type="text"
        fullWidth
        color="secondary"
        {...inputProps}
      />
    </InputLabel>
  );
}

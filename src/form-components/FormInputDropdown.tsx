import React from "react";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

const options = [
  {
    label: "None",
    value: "",
  },
  {
    label: "Watching TV",
    value: "Watching TV",
  },
  {
    label: "Play game",
    value: "Play game",
  },
  {
    label: "Play fooball",
    value: "Play fooball",
  },
];

export const FormInputDropdown: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateSingleOptions = () => {
    return options.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };
  return (
    <FormControl sx={{ mt: 3, mr: 4, minWidth: 250 }} variant="standard" >
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Select
            onChange={onChange}
            value={value}
            error={!!error}
          >
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
        />
      {/* <FormHelperText>{error ? error.message : null}</FormHelperText> */}
    </FormControl>
  );
};

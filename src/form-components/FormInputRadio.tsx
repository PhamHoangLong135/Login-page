import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
const options = [
  {
    label: "Male",
    value1: "Male",
  },
  {
    label: "Female",
    value1: "Female",
  },
  {
    label: "Other",
    value1: "Other",
  },
];

export const FormInputRadio: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const {formState: { errors }} = useForm();
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value1}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };
  
  return (
    <FormControl margin="normal" component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup row {...field}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
      <FormHelperText >
      {errors ? errors.message : null}
      </FormHelperText>
    </FormControl>
  );
};

import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import { FormTypes } from "../../types/types";

const theme = createTheme({ palette: { primary: { main: "#F97316" } } });

function CustomizedTextField({
  id,
  type,
  name,
  value,
  placeholder,
  error,
  errorText,
  hidden = false,
  handleChange,
  multiline,
  rows,
}: FormTypes) {
  return (
    <ThemeProvider theme={theme}>
      <FormControl
        error={error}
        hidden={hidden}
        size='small'
        sx={{ width: "100%", mb: "1rem" }}>
        <InputLabel htmlFor={id}>{placeholder}</InputLabel>
        <OutlinedInput
          sx={{
            color: "orange",
            borderRadius: "5px",
            "&.Mui-focused": {
              border: "none",
            },
          }}
          id={id}
          type={type}
          name={name}
          value={value}
          label={placeholder}
          onChange={handleChange}
          multiline={multiline}
          rows={rows}
        />

        <FormHelperText sx={{ color: "orange" }}>{errorText}</FormHelperText>
      </FormControl>
    </ThemeProvider>
  );
}

export default CustomizedTextField;

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import { FormTypes } from "../../types/types";

const theme = createTheme({ palette: { primary: { main: "#F97316" } } });

function CustomizedSelectField({
  id,
  type,
  name,
  value,
  placeholder,
  error,
  errorText,
  hidden = false,
  handleSelectChange,
  multiline,
  rows,
}: FormTypes) {
  return (
    <ThemeProvider theme={theme}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='demo-select-small-label'>Age</InputLabel>
        <Select
          labelId='demo-select-small-label'
          id='demo-select-small'
          value=''
          label='Age'
          onChange={handleSelectChange}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}

export default CustomizedSelectField;

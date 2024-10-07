import { SelectTypes } from "@/types/types";
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
import { validateHeaderValue } from "http";
import React from "react";

const theme = createTheme({ palette: { primary: { main: "#F97316" } } });

function CustomizedSelectField({
  id,
  value,
  placeholder,
  menuItems,
  handleSelectChange,
}: SelectTypes) {
  return (
    <ThemeProvider theme={theme}>
      <FormControl size='small'>
        <InputLabel id={id}>{placeholder}</InputLabel>
        <Select
          labelId={id}
          id={id}
          value={value}
          label={placeholder}
          onChange={handleSelectChange}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {menuItems.map((item, index) => {
            return (
              <MenuItem key={index} value={item.id}>
                {item.niche}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}

export default CustomizedSelectField;

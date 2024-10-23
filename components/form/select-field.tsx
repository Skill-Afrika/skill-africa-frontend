import { SelectTypes } from "@/types/types";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
  createTheme,
} from "@mui/material";
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
      <FormControl size='small' sx={{ width: "100%", mb: "1rem" }}>
        <InputLabel id={id}>{placeholder}</InputLabel>
        <Select
          sx={{
            color: "orange",
            borderRadius: "5px",
            "&.Mui-focused": {
              border: "none",
            },
          }}
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

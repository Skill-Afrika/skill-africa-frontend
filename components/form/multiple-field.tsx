import React, { ChangeEvent, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Chip, FormControl, ThemeProvider, createTheme } from "@mui/material";
import { SelectTypes } from "@/types/types";

const theme = createTheme({ palette: { primary: { main: "#F97316" } } });

export default function MultipleTextField({
  id,
  handleSelectChange,
  label,
  value,
  placeholder,
  menuItems,
}: SelectTypes) {
  
  console.log(value);

  return (
    <ThemeProvider theme={theme}>
      <FormControl size='small' sx={{ width: "100%", mb: "1rem" }}>
        <Autocomplete
          multiple
          filterSelectedOptions
          limitTags={3}
          id={id}
          options={menuItems}
          getOptionLabel={(option) => option.value}
          value={menuItems.filter((values) => value?.includes(values.id))}
          onChange={handleSelectChange}
          renderTags={(
            value: Array<{ id: number; value: string }>,
            getTagProps
          ) =>
            value.map((option, index) => {
              const { key, ...tagProps } = getTagProps({ index });
              return (
                <Chip
                  variant='outlined'
                  color='primary'
                  label={option.value}
                  key={key}
                  {...tagProps}
                />
              );
            })
          }
          renderInput={(params) => (
            <TextField {...params} label={label} placeholder={placeholder} />
          )}
          sx={{
            color: "orange",
            borderRadius: "5px",
            "&.Mui-focused": {
              border: "none",
            },
          }}
        />
      </FormControl>
    </ThemeProvider>
  );
}

import React, { ChangeEvent, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Chip, FormControl, ThemeProvider, createTheme } from "@mui/material";
import { SelectTypes } from "@/types/types";

const theme = createTheme({ palette: { primary: { main: "#F97316" } } });

export default function MultipleTextField({
  id,
  handleSelectChange,
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
          getOptionLabel={(option) => option.niche}
          value={menuItems.filter((niche) => value?.includes(niche.id))}
          onChange={handleSelectChange}
          renderTags={(
            value: Array<{ id: number; niche: string }>,
            getTagProps
          ) =>
            value.map((option, index) => {
              const { key, ...tagProps } = getTagProps({ index });
              return (
                <Chip
                  variant='outlined'
                  color='primary'
                  label={option.niche}
                  key={key}
                  {...tagProps}
                />
              );
            })
          }
          renderInput={(params) => (
            <TextField {...params} label='Niche' placeholder={placeholder} />
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

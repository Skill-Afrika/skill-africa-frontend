import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";

export interface FormTypes {
  id: string;
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  error?: boolean;
  hidden?: boolean;
  errorText: string | boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  multiline?: boolean;
  rows?: number;
}

interface MenuItems {
  id: number;
  niche: string;
}

export interface SelectTypes {
  id: string;
  value: string;
  placeholder: string;
  menuItems: MenuItems[];
  handleSelectChange?: (e: SelectChangeEvent) => void;
}

export interface ProfileDetails {
  first_name: string;
  last_name: string;
  bio: string;
  profile_pic?: string;
  niche: string;
}

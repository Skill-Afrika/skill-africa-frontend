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
  handleSelectChange?: (e: SelectChangeEvent) => void;
  multiline?: boolean;
  rows?: number;
}

export interface ProfileDetails {
  first_name: string;
  last_name: string;
  bio: string;
  profile_pic?: string;
  niche: number;
}

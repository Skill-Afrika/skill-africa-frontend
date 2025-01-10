import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";

export interface FormTypes {
  id?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  error: boolean;
  hidden?: boolean;
  errorText?: string | boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  multiline?: boolean;
  rows?: number;
}

export interface MenuItems {
  id: number;
  value: string;
}

export interface SelectTypes {
  id: string;
  value: number[];
  label: string;
  placeholder: string;
  menuItems: MenuItems[];
  handleSelectChange?: (
    event: ChangeEvent<{}>,
    newValue: Array<{ id: number }>
  ) => void;
}

export interface ProfileDetails {
  first_name: string;
  last_name: string;
  bio: string;
  profile_pic?: string;
  niches: number[];
  skills: number[];
  languages: number[];
}

export interface NicheSkillLang {
  id: number;
  niche?: string;
  skill?: string;
  language?: string;
}

export interface ProjectDetails {
  id?: number;
  name: string;
  url: string;
  skills: string;
  tools: string;
  description: string;
}

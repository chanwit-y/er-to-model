import { FormControl, FormLabel } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  lable: string;
};
export const FormGroup = ({ children, lable }: Props) => {
  return (
    <FormControl>
      <FormLabel sx={{ fontSize: 14, fontWeight: 500 }}>{lable}</FormLabel>
      {children}
    </FormControl>
  );
};

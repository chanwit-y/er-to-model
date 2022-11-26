import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
import React from "react";
import { FormGroup } from "../FormGroup";

export const HandleDetail = () => {
  return (
    <Box p={2} display="flex" flexDirection="column" gap={1}>
      <Typography fontSize={16} fontWeight={500}>
        Handle Detail
      </Typography>
      <Divider />
      <FormGroup lable="Source/Target">
        <RadioGroup row sx={{ mx: 2 }}>
          <FormControlLabel
            value="source"
            control={<Radio size="small" />}
            label="Source"
          />
          <FormControlLabel
            value="target"
            control={<Radio size="small" />}
            label="Target"
          />
        </RadioGroup>
      </FormGroup>

      <FormGroup lable="Value">
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </FormGroup>
    </Box>
  );
};

import {
  Box,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent, useCallback, useState } from "react";
import { FormGroup } from "../FormGroup";
import { useEntity } from "./Context";

export const HandleDetail = () => {
  const { setIsOpacity } = useEntity();
  const [handlePosition, setHandlePosition] = useState(0);

  const handleChangePosition = useCallback(
    (_: Event, value: number | number[], _2: number) => {
      setIsOpacity(true);
      setHandlePosition(value as number);
    },
    [handlePosition]
  );

  const handleCommitedPosition = useCallback(
    (_: SyntheticEvent | Event, _2: number | number[]) => setIsOpacity(false),
    [handlePosition]
  );

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

      <FormGroup lable="Position">
        <Slider
          size="small"
          defaultValue={0}
          value={handlePosition}
          aria-label="Small"
          valueLabelDisplay="auto"
          onChange={handleChangePosition}
          onChangeCommitted={handleCommitedPosition}
        />
      </FormGroup>
    </Box>
  );
};

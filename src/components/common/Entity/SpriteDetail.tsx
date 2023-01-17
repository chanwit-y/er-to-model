import {
  Box,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction, SyntheticEvent, useCallback, useState } from "react";
import { FormGroup } from "../FormGroup";
import { SpriteType } from "./@types";
import { useEntity } from "./Context";

type Props = {
  id: string;
  // setSprite: Dispatch<SetStateAction<SpriteType>>
}

export const SpriteDetail = ({ id }: Props) => {
  const { setIsOpacity, currentSprite, setCurrentSprite } = useEntity();
  // const [handlePosition, setHandlePosition] = useState(0);

  const current = currentSprite(id);

  const handleChangePosition = useCallback(
    (_: Event, value: number | number[], _2: number) => {
      setIsOpacity(true);
      // setSprite((prev) => ({...prev, edgePositionValue: Number(value) }));
      setCurrentSprite({...current, edgePositionValue: Number(value)})
    },
    [id, current.edgePositionValue]
  );

  const handleCommitedPosition = useCallback(
    (_: SyntheticEvent | Event, _2: number | number[]) => setIsOpacity(false),
    [id, current.edgePositionValue]
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
          value={current.edgePositionValue}
          aria-label="Small"
          valueLabelDisplay="auto"
          onChange={handleChangePosition}
          onChangeCommitted={handleCommitedPosition}
        />
      </FormGroup>
    </Box>
  );
};

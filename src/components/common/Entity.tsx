import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Popover,
  RadioGroup,
  Typography,
  Radio,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useState, MouseEvent } from "react";
import { Handle, Position } from "reactflow";

import AddLinkIcon from "@mui/icons-material/AddLink";

export const Entity = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleAddLink = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box
      py={0.5}
      bgcolor="white"
      border={1}
      borderColor={blue[500]}
      borderRadius={1}
      minWidth={100}
    >
      {/* <Handle
        id="source-left"
        type="source"
        position={Position.Left}
        style={{ top: "40%", width: 5, height: 5 }}
      />
      <Handle
        id="target-left"
        type="target"
        position={Position.Left}
        style={{ top: "70%", width: 5, height: 5 }}
      />
      <Handle
        id="source-right"
        type="source"
        position={Position.Right}
        style={{ top: "40%", width: 5, height: 5 }}
      />
      <Handle
        id="target-right"
        type="target"
        position={Position.Right}
        style={{ top: "70%", width: 5, height: 5 }}
      /> */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box p={1}>
          <FormControl>
            <FormLabel >
              Source/Target
            </FormLabel>
            <RadioGroup
              row
            >
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
          </FormControl>
        </Box>
      </Popover>
      <Box
        pt={0}
        p={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize={8} fontWeight={500} letterSpacing={0.5}>
          Entity Name
        </Typography>

        <IconButton size="small" onClick={handleAddLink}>
          <AddLinkIcon sx={{ fontSize: 7 }} />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: blue[500] }} />
      <Box px={0.5} py={0.3} display="flex">
        <Typography fontSize={8} letterSpacing={0.5}>
          ID
        </Typography>
      </Box>
      <Divider />
      <Box px={0.5} py={0.3} display="flex">
        <Typography fontSize={8} letterSpacing={0.5}>
          Code
        </Typography>
      </Box>
    </Box>
  );
};

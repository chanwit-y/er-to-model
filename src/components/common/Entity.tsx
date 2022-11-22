import { Box, Divider, IconButton, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import { Handle, Position } from "reactflow";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const Entity = () => {
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
      <Box>
        <Typography
          px={1}
          py={0.4}
          fontSize={8}
          fontWeight={500}
          letterSpacing={0.5}
        >
          Entity Name
        </Typography>
        <Divider sx={{ borderColor: blue[500] }} />
      </Box>
      <Box px={0.5} py={0.3} display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontSize={8} letterSpacing={0.5}>
          ID
        </Typography>
        <IconButton color="primary" component="label" size="small">
          <ArrowOutwardIcon sx={{fontSize: 7}} />
        </IconButton>
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

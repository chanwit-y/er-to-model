import { Box, Divider, Popover, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useState, MouseEvent, useEffect } from "react";

import { SpriteDetail } from "./SpriteDetail";
import { useEntity } from "./Context";

import { Handle, Position } from "reactflow";

import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import { Toolbox } from "./Toolbox";

export const Detail = () => {
  const {  sprites: handles, edgePositionValue, onPopoverClick } = useEntity();

  return (
    <Box
      bgcolor="white"
      border={1}
      borderColor={blue[500]}
      borderRadius={1}
      minWidth={100}
    >
      {handles.map((h) => h)}

      <Handle
        id="source-right"
        type="source"
        position={Position.Right}
        style={{ 
          top: `${edgePositionValue}%`, 
          width: ".1rem", 
          height: ".1rem", 
          border: 1, 
          borderColor: 'red', 
          borderStyle: "solid", 
          backgroundColor: "#2096f3",
         }}
        onDoubleClick={(e) => onPopoverClick(e, <SpriteDetail />)}
      >
        <Box position="relative" fontSize={6} sx={{transform: "translate(8px, -50%)"}}>{'M'}</Box>
      </Handle>
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
      {/* <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ opacity: isOpacity ? 0.7 : 1, left: '1%' }}
      >
        <Option />
      </Popover> */}

      <Box
        // pt={0}
        // p={1}
        px={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize={8} fontWeight={500} letterSpacing={0.5}>
          Entity Name
        </Typography>

        <Box component="span" onClick={(e) => {onPopoverClick(e, <Toolbox />)}}>
          <MoreVertIcon sx={{ fontSize: 7 }} />
        </Box>
      </Box>
      <Divider sx={{ borderColor: blue[500] }} />
      <Box px={0.5} py={0.3} display="flex" justifyContent="space-between">
        <Typography fontSize={6} letterSpacing={0.5}>
          ID
        </Typography>

        <Box component="span" display="flex" onClick={(e) => onPopoverClick(e, <></>)}>
          <EditIcon sx={{ fontSize: 7 }} />
        </Box>
      </Box>
      <Divider />
      <Box px={0.5} py={0.3} display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontSize={6} letterSpacing={0.5}>
          Code
        </Typography>
        <Box component="span" display="flex" onClick={(e) => onPopoverClick(e, <></>)}>
          <EditIcon sx={{ fontSize: 7 }} />
        </Box>
      </Box>
      <Divider />
      <Box px={0.5} py={0.3} display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontSize={6} letterSpacing={0.5}>
          Name
        </Typography>
        <EditIcon sx={{ fontSize: 7 }} />
        {/* <Button size="small" sx={{ height: 5, minWidth: 5, fontSize: 6, p: 1 }} onClick={handleAddLink}>FK</Button> */}
      </Box>
      <Divider />
      <Box px={0.5} py={0.3} display="flex" justifyContent="center" alignItems="center">
        <AddIcon sx={{ fontSize: 7 }} />
      </Box>
    </Box>
  );
};

import { Box, Divider, IconButton, Popover, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useState, MouseEvent } from "react";

import { HandleDetail } from "./HandleDetail";
import { useEntity } from "./Context";

import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import { Handle, Position } from "reactflow";

export const Detail = () => {
  const { isOpacity, handles } = useEntity();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleAddLink = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  const id = open ? "popover-handle-detail" : undefined;

  // const handles = [
  //   <Handle
  //     id="source-left"
  //     type="source"
  //     position={Position.Left}
  //     style={{ top: "40%", width: 5, height: 5 }}
  //   />,
  //   <Handle
  //     id="target-left"
  //     type="target"
  //     position={Position.Left}
  //     style={{ top: "70%", width: 5, height: 5 }}
  //   />,
  // ];

  return (
    <Box
      py={0.5}
      bgcolor="white"
      border={1}
      borderColor={blue[500]}
      borderRadius={1}
      minWidth={100}
    >
      {handles.map((h) => h)}
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
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ opacity: isOpacity ? 0.8 : 1 }}
      >
        <HandleDetail />
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
          <CenterFocusStrongIcon sx={{ fontSize: 7 }} />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: blue[500] }} />
      <Box px={0.5} py={0.3} display="flex">
        <Typography fontSize={6} letterSpacing={0.5}>
          ID
        </Typography>
      </Box>
      <Divider />
      <Box px={0.5} py={0.3} display="flex">
        <Typography fontSize={6} letterSpacing={0.5}>
          Code
        </Typography>
      </Box>
    </Box>
  );
};

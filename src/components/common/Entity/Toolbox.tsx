import React from 'react'

import { Box, Button, Divider, Typography } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import { ToolboxItem } from './ToolboxItem';

export const Toolbox = () => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			gap={1}
			px={2}
			py={2}
			minWidth={150}>
			<Typography fontWeight={700} letterSpacing={.5}>Tool box</Typography>
			<Divider />
			<ToolboxItem text="Add Sprite" icon={<AdjustIcon />} />
		</Box>
	)
}

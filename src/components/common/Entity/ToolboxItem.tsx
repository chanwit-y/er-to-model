import { Button } from '@mui/material'
import React, { MouseEventHandler, ReactNode } from 'react'

type Props = {
	text: string;
	icon: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ToolboxItem = ({ text, icon, onClick }: Props) => {
	return (
		<Button
			startIcon={icon}
			sx={{ justifyContent: "left" }}
			onClick={onClick}>
			{text}
		</Button>
	)
}

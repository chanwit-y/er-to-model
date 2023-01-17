import { Box } from "@mui/material";
import { Handle } from "reactflow";
import { SpriteType } from "./@types";
import { useEntity } from "./Context";
import { SpriteDetail } from "./SpriteDetail";

type Props = {

} & SpriteType;

export const Sprite = ({ id, position, type, label, edgePositionValue }: Props) => {
	const { onPopoverClick } = useEntity();

	return (
		<Handle
			id={id}
			type={type}
			position={position}
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
			<Box
				position="relative"
				fontSize={6}
				sx={{ transform: "translate(8px, -50%)" }}>{label}</Box>
		</Handle>
	)
}

import { HandleType, Position } from "reactflow";

export type SpriteType = {
  id: string;
  position: Position;
  type: HandleType;
  edgePositionValue: number;
  label?: string;
};

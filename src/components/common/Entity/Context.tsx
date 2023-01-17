
import { Popover } from "@mui/material";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useState,
  MouseEvent,
  useMemo,
  useEffect,
} from "react";
import {  Position } from "reactflow";
import { SpriteType } from "./@types";

type OnPopoverClickType = (event: MouseEvent<HTMLButtonElement | HTMLDivElement | HTMLSpanElement>, children: JSX.Element) => void;

type EntityContextType = {
  edgePositionValue: number;
  setEdgePositionValue: Dispatch<SetStateAction<number>>;

  onPopoverClick: OnPopoverClickType;

  setIsOpacity: Dispatch<SetStateAction<boolean>>;
  sprites: SpriteType[];
  setSprites: Dispatch<SetStateAction<SpriteType[]>>;
};
const EntityContext = createContext<EntityContextType>({} as EntityContextType);

type HandleStatusType = {
  index: number;
  status: "active" | "inactive";
};

type Props = {
  children: ReactNode;
};
const EntityProvider = ({ children }: Props) => {
  const [edgePositionValue, setEdgePositionValue] = useState(0);
  const [isOpacity, setIsOpacity] = useState(false);
  const [sprites, setSprites] = useState<SpriteType[]>([]);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | HTMLDivElement | null>(null);
  const [popoverChildren, setPopoverChildren] = useState<ReactNode>()

  const onPopoverClick = useCallback((event: MouseEvent<HTMLButtonElement>, children: JSX.Element) => {
    setPopoverChildren(children)
    setAnchorEl(event.currentTarget)
  }, [setPopoverChildren, setAnchorEl])

  const handlePopoverClose = useCallback(() => setAnchorEl(null), [setAnchorEl]);
  const popOverOpen = useMemo(() => Boolean(anchorEl), [anchorEl]);
  const popOverId = useMemo(() => popOverOpen ? "popover-handle" : undefined, [popOverOpen]);

  // useEffect(() => {
  //   console.log(anchorEl)
  // }, [anchorEl])

  useEffect(() => {
    setSprites([
      {
        id: 'target-right',
        type: 'target',
        position: Position.Top,
        edgePositionValue: 0,
        label: 'M'
      },
      {
        id: 'source-top',
        type: 'source',
        position: Position.Right,
        edgePositionValue: 0,
        label: 'M'
      }
    ])
  }, [])

  return (
    <EntityContext.Provider
      value={{
        edgePositionValue,
        setEdgePositionValue,
        setIsOpacity,
        sprites,
        setSprites,
        onPopoverClick,
      }}
    >
      <Popover
        id={popOverId}
        open={popOverOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ opacity: isOpacity ? 0.7 : 1, left: '1%' }}
      >
        {popoverChildren}
      </Popover>
      {children}
    </EntityContext.Provider>
  );
};

export const useEntity = () => useContext(EntityContext);
export default EntityProvider;

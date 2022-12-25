
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
} from "react";

type OnPopoverClickType = (event: MouseEvent<HTMLButtonElement | HTMLDivElement | HTMLSpanElement>, children: JSX.Element) => void;

type EntityContextType = {
  edgePositionValue: number;
  setEdgePositionValue: Dispatch<SetStateAction<number>>;

  onPopoverClick: OnPopoverClickType;

  // isOpacity: boolean;
  setIsOpacity: Dispatch<SetStateAction<boolean>>;
  sprites: JSX.Element[];
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
  const [sprites, setSprites] = useState<JSX.Element[]>([]);

  const [handleStatus, setHandleStatus] = useState<HandleStatusType[]>();
  const preaddHandles = useCallback(() => {

  }, []);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | HTMLDivElement | null>(null);
  const [popoverChildren, setPopoverChildren] = useState<ReactNode>()

  const onPopoverClick = useCallback((event: MouseEvent<HTMLButtonElement>, children: JSX.Element) => {
    setPopoverChildren(children)
    setAnchorEl(event.currentTarget)
  }, [setPopoverChildren, setAnchorEl])

  const handlePopoverClose = useCallback(() => setAnchorEl(null), [setAnchorEl]);
  const popOverOpen = useMemo(() => Boolean(anchorEl), [anchorEl]);
  const popOverId = useMemo(() => popOverOpen ? "popover-handle" : undefined, [popOverOpen]);

  return (
    <EntityContext.Provider
      value={{
        edgePositionValue,
        setEdgePositionValue,
        // isOpacity,
        setIsOpacity,
        sprites,
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

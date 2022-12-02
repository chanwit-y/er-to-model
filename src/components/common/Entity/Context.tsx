import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type EntityContextType = {
  edgePositionValue: number;
  setEdgePositionValue: Dispatch<SetStateAction<number>>;

  isOpacity: boolean;
  setIsOpacity: Dispatch<SetStateAction<boolean>>;
  handles: JSX.Element[];
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
  const [handles, setHandles] = useState<JSX.Element[]>([]);

  const [handleStatus, setHandleStatus] = useState<HandleStatusType[]>();
  const preaddHandles = () => {};

  return (
    <EntityContext.Provider
      value={{
        edgePositionValue,
        setEdgePositionValue,
        isOpacity,
        setIsOpacity,
        handles,
      }}
    >
      {children}
    </EntityContext.Provider>
  );
};

export const useEntity = () => useContext(EntityContext);
export default EntityProvider;

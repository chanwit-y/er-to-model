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
  setHandles: Dispatch<SetStateAction<JSX.Element[]>>;
};
const EntityContext = createContext<EntityContextType>({} as EntityContextType);

type Props = {
  children: ReactNode;
};
const EntityProvider = ({ children }: Props) => {
  const [edgePositionValue, setEdgePositionValue] = useState(0);
  const [isOpacity, setIsOpacity] = useState(false);
  const [handles, setHandles] = useState<JSX.Element[]>([]);

  return (
    <EntityContext.Provider
      value={{
        edgePositionValue,
        setEdgePositionValue,
        isOpacity,
        setIsOpacity,
        handles,
        setHandles,
      }}
    >
      {children}
    </EntityContext.Provider>
  );
};

export const useEntity = () => useContext(EntityContext);
export default EntityProvider;

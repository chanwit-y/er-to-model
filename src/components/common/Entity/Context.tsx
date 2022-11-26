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
};
const EntityContext = createContext<EntityContextType>({} as EntityContextType);

type Props = {
  children: ReactNode;
};
const EntityProvider = ({ children }: Props) => {
  const [edgePositionValue, setEdgePositionValue] = useState(0);

  return (
    <EntityContext.Provider value={{ edgePositionValue, setEdgePositionValue }}>
      {children}
    </EntityContext.Provider>
  );
};

export const useEntity = () => useContext(EntityContext);
export default EntityProvider;

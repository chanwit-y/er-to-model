import EntityProvider from "./Context";
import { Detail } from "./Detail";

export const Entity = () => {
  return (
    <EntityProvider>
      <Detail />
    </EntityProvider>
  );
};

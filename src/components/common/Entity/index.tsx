import dynamic from "next/dynamic";
import { NodeProps } from "reactflow";
import EntityProvider from "./Context";
// import { Detail } from "./Detail";

const Detail = dynamic(() => import('./Detail').then((e) => e.Detail), {
  ssr: false
  // loading: () => 'Loading...',
})

export const Entity = (props: NodeProps) => {
  return (
    <EntityProvider>
      <Detail />
    </EntityProvider>
  );
};

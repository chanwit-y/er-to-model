import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";

const initNodes: any = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: {label: "Hello"},
    type: "input"
  },
  {
    id: "2",
    position: { x: 100, y: 100 },
    data: {label: "Wrold"},
  },
];

const initEdges = [{ id: '1-2', source: '1', target: '2', label: "1...*" }];

export const Test = () => {
  return (
    <ReactFlow nodes={initNodes} edges={initEdges}>
      <Background />
      <Controls />
    </ReactFlow>
  );
};

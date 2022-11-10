import React, { useState, useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge
} from "reactflow";

const initNodes: any = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Hello" },
    // type: "input", 
  },
  {
    id: "2",
    position: { x: 100, y: 100 },
    data: { label: "Wrold" },
  },
  {
    id: "3",
    position: { x: 200, y: 200 },
    data: { label: "Beer" },
  },
  {
    id: "4",
    position: { x: 250, y: 250 },
    data: { label: "Model" },
  },
];

// const initEdges = [{ id: '1-2', source: '1', target: '2', label: "1...*" }];
const initEdges = [];

export const Test = () => {
  const [nodes, setNodes] = useState(initNodes);
  const [edges, setEdges] = useState(initEdges);

  const onNodesChange = useCallback(
    (change) => setNodes((node) => applyNodeChanges(change, node)),
    []
  );

  const onEdgesChange = useCallback(
    (change) => setEdges((edge) => applyEdgeChanges(change, edge)),
    []
  );

  const onConnect = useCallback((params) => setEdges((edge) => addEdge(params, edge)), [])

  return (
    <ReactFlow
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
};

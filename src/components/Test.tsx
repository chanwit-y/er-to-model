import React, { useState, useCallback, useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
} from "reactflow";
import { TextUpdaterNode } from "./TextUpdaterNode";

const initNodes: any = [
  {
    id: "node-1",
    type: "textUpdater",
    position: { x: 300, y: 300 },
    data: { value: 123 },
  },
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

const rfStyle = {
  backgroundColor: '#B8CEFF',
};

export const Test = () => {
  const [nodes, setNodes] = useState(initNodes);
  const [edges, setEdges] = useState(initEdges);

  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

  const onNodesChange = useCallback(
    (change) => setNodes((node) => applyNodeChanges(change, node)),
    []
  );

  const onEdgesChange = useCallback(
    (change) => setEdges((edge) => applyEdgeChanges(change, edge)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((edge) => addEdge(params, edge)),
    []
  );

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      style={rfStyle}
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
};

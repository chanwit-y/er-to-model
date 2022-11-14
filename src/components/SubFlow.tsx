import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
} from "reactflow";

const initialNodes: any = [
  {
    id: "A",
    type: "group",
//     data: { label: null },
    position: { x: 0, y: 0 },
    style: {
      width: 170,
      height: 140,
    },
  },
  {
    id: "A-1",
    type: "input",
    data: { label: "child node 1" },
    position: { x: 10, y: 10 },
    parentNode: "A",
    extent: "parent",
  },
  {
    id: "A-2",
    data: { label: "child node 2" },
    position: { x: 10, y: 90 },
    parentNode: "A",
    extent: "parent",
  },
  {
    id: "B",
    type: "output",
    position: { x: -100, y: 200 },
    data: { label: "Node B" },
  },
  {
    id: "C",
    type: "output",
    position: { x: 100, y: 200 },
    data: { label: "Node C" },
  },
];

const initialEdges = [
	{ id: "b-c", source: "B", target: "C" },
	{ id: 'a2-b', source: 'A-2', target: 'B' },
	{ id: 'a2-c', source: 'A-2', target: 'C' },
];

export const SubFlow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (c) => setNodes((n) => applyNodeChanges(c, n)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (c) => setEdges((e) => applyEdgeChanges(c, e)),
    []
  );

  const onConnect = useCallback(
    (c) => setEdges((e) => addEdge(c, e)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Background />
    </ReactFlow>
  );
};

import React, { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  Edge,
  Node,
} from "reactflow";
import { Entity } from "../../common/Entity";

const initNodes: Node[] = [
  {
    id: "node-1",
    type: "entity",
    position: { x: 100, y: 100 },
    data: { value: 10 },
  },
  {
    id: "node-2",
    type: "entity",
    position: { x: 200, y: 200 },
    data: { value: 10 },
  },
];

const initEdges: Edge[] = [];

export const ERModel = () => {
  const [nodes, setNodes] = useState(initNodes);
  const [edges, setEdges] = useState(initEdges);

  const nodeType = useMemo(() => ({ entity: Entity }), []);

  const onNodesChange = useCallback(
    (change) => setNodes((node) => applyNodeChanges(change, node)),
    []
  );

  const onEdgesChange = useCallback(
    (change) => setEdges((edge) => applyEdgeChanges(change, edge)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((edge) => addEdge({...params, animated: true}, edge)),
    []
  );

  return (
    <ReactFlow
      nodeTypes={nodeType}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
};

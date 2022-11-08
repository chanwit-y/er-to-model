import React from 'react'
import ReactFlow, { Background, Controls } from "reactflow";


const nodes: any = [
  {
    id: "1",
    position: { x: 0, y: 0 },
  },
];

export const Test = () => {
  return (
   <ReactFlow nodes={nodes}>
        <Background />
        <Controls />
      </ReactFlow>
  )
}

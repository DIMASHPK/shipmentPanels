import React from "react";
import Panel from "./Panel";
import ReactFlow from "react-flow-renderer";
import { useFlowItems } from "../../hooks/useFlowItems";
import MarkerDefinition from "./MarkerDefinition";
import CustomEdge from "./CustomEdge";
import styles from "./styles.module.css";

/* const initialElements = [
  {
    id: "horizontal-1",
    sourcePosition: "right",
    targetPosition: "right",
    type: "special",
    className: "dark-node",
    data: { airport: "Bom" },
    position: { x: 0, y: 0 },
  },
  {
    id: "horizontal-2",
    type: "special",
    sourcePosition: "bottom",
    targetPosition: "left",
    data: { airport: "A Node" },
    position: { x: 250, y: 0 },
  },
  {
    id: "horizontal-3",
    type: "special",
    sourcePosition: "right",
    targetPosition: "top",
    data: { airport: "Node 3" },
    position: { x: 250, y: 170 },
  },
  {
    id: "horizontal-4",
    type: "special",
    sourcePosition: "right",
    data: { airport: "Node 4" },
    position: { x: 250, y: 280 },
  },
  {
    id: "horizontal-5",
    type: "special",
    sourcePosition: "right",
    targetPosition: "left",
    data: { airport: "Node 5" },
    position: { x: 500, y: 0 },
  },
  {
    id: "horizontal-6",
    type: "special",
    sourcePosition: "right",
    targetPosition: "left",
    data: { airport: "Node 6" },
    position: { x: 500, y: 160 },
  },
  {
    id: "horizontal-7",
    type: "special",
    targetPosition: "left",
    sourcePosition: "left",
    data: { airport: "Node 7" },
    position: { x: 750, y: 0 },
  },
  {
    id: "horizontal-e1-2",
    source: "horizontal-1",
    type: "smoothstep",
    target: "horizontal-2",
  },
  {
    id: "horizontal-e2-3",
    source: "horizontal-2",
    type: "smoothstep",
    target: "horizontal-3",
    label: "edge label",
  },
  {
    id: "horizontal-e3-5",
    source: "horizontal-3",
    type: "smoothstep",
    target: "horizontal-5",
  },
  {
    id: "horizontal-e4-6",
    source: "horizontal-4",
    type: "smoothstep",
    target: "horizontal-6",
  },
  {
    id: "horizontal-e5-7",
    source: "horizontal-5",
    type: "smoothstep",
    target: "horizontal-7",
  },
  {
    id: "horizontal-e6-7",
    source: "horizontal-6",
    type: "smoothstep",
    target: "horizontal-7",
  },
]; */

const HorizontalFlow = () => {
  const { items, wrapperRef, height } = useFlowItems();

  return (
    <div className="">
      <div style={{ height }} ref={wrapperRef}>
        <ReactFlow
          elements={items}
          nodesDraggable={false}
          selectNodesOnDrag={false}
          nodesConnectable={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          panOnScroll={false}
          paneMoveable={false}
          nodeTypes={{ special: Panel }}
          edgeTypes={{ custom: CustomEdge }}
        >
          <MarkerDefinition id="react-flow__arrowclosed-green" color="green" />
        </ReactFlow>
      </div>
    </div>
  );
};

export default HorizontalFlow;

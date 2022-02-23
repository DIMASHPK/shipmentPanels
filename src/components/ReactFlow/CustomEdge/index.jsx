import { getSmoothStepPath, getMarkerEnd } from "react-flow-renderer";

const CustomEdge = props => {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    style,
    sourcePosition,
    targetPosition,
    arrowHeadType,
    data,
    markerEndId,
  } = props;

  const edgePath = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const markerEnd = getMarkerEnd(
    arrowHeadType,
    markerEndId || data?.markerEndId
  );

  return (
    <path
      id={id}
      style={style}
      className="react-flow__edge-path"
      d={edgePath}
      markerEnd={markerEnd}
    />
  );
};

export default CustomEdge;

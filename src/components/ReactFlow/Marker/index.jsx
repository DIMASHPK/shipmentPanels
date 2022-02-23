const Marker = ({ id, className, children }) => (
  <marker
    className={className || "react-flow__arrowclose-green"}
    id={id}
    markerWidth="12.5"
    markerHeight="12.5"
    viewBox="-10 -10 20 20"
    orient="auto"
    refX="0"
    refY="0"
  >
    {children}
  </marker>
);

export default Marker;

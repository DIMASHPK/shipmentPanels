import React from "react";
import styles from "./styles.module.css";
import { Stage, Layer, Line } from "react-konva";
import Column from "../Column/";
import { formatData } from "../../utils";
import useLines from "../../hooks/useLines";
import { data } from "../../mocks";

const Root = props => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const { panelLines, wrapperRef } = useLines();

  const foramtedData = formatData(data);

  console.log({ foramtedData, data });

  React.useLayoutEffect(() => {
    const width = wrapperRef.current.offsetWidth;
    const height = wrapperRef.current.offsetHeight;

    console.log({ width, height });

    setWidth(width);
    setHeight(height);
  }, [wrapperRef]);

  const handleMap = (panels, id) => <Column key={id} panels={panels} />;

  const handleLineMap = ({ x, y, points }, i) => (
    <Line x={x} y={y} key={i} points={points} strokeWidth={2} stroke="blue" />
  );

  return (
    <div className={styles.mainContainer}>
      <div ref={wrapperRef} className={styles.panelsContainer}>
        {foramtedData.map(handleMap)}
      </div>
      <Stage width={width} height={height} className={styles.stage}>
        <Layer>{panelLines.map(handleLineMap)}</Layer>
      </Stage>
    </div>
  );
};

export default Root;

import React, { useRef } from "react";
import styles from "./styles.module.css";
import { Stage, Layer, Line } from "react-konva";
import Column from "../../../Column";
import { formatData } from "../../../../utils";
import useLines from "../../../../hooks/useLines";
import { DATA } from "../../../../mocks";
import { useWindowResize } from "../../../../hooks/useWindowResize";

const SplitContent = props => {
  const {
    split: { splitDetails },
  } = props;

  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const { width: windowWidth } = useWindowResize();

  const { panelLines, wrapperRef } = useLines({ windowWidth });

  const reformatedData = formatData(splitDetails);

  React.useLayoutEffect(() => {
    if (wrapperRef?.current) {
      const width = wrapperRef.current.offsetWidth;
      const height = wrapperRef.current.offsetHeight;

      setWidth(width);
      setHeight(height);
    }
  }, [wrapperRef, windowWidth]);

  const handleMap = (panels, id) => <Column key={id} panels={panels} />;

  const handleLineMap = (
    { lineMeasurements, triangleMeasurements, stroke = "green" },
    i
  ) => (
    <React.Fragment key={i}>
      <Line
        {...lineMeasurements}
        lineJoin="round"
        strokeWidth={3}
        stroke={stroke}
      />
      {triangleMeasurements && (
        <Line {...triangleMeasurements} strokeWidth={2} stroke={stroke} />
      )}
    </React.Fragment>
  );

  return (
    <div className={styles.mainContainer}>
      <div ref={wrapperRef} className={styles.panelsContainer}>
        {reformatedData.map(handleMap)}
      </div>
      <Stage width={width} height={height} className={styles.stage}>
        <Layer>{panelLines.map(handleLineMap)}</Layer>
      </Stage>
    </div>
  );
};

export default SplitContent;

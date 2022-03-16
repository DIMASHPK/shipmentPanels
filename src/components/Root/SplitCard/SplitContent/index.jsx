import React from "react";
import styles from "./styles.module.css";
import { Stage, Layer, Line } from "react-konva";
import SplitColumn from "./SplitColumn";
import { formatData } from "../../../../helpers";
import useLines from "../../../../hooks/useLines";
import cn from "classnames";
import { useWindowResize } from "../../../../hooks/useWindowResize";
import { useContainerResize } from "../../../../hooks/useContainerResize";

const SplitContent = props => {
  const {
    split: { splitDetails },
  } = props;

  const { width: windowWidth } = useWindowResize();

  const { panelLines, wrapperRef } = useLines({ windowWidth });

  const { height, width } = useContainerResize({ ref: wrapperRef });

  const reformatedData = formatData(splitDetails);

  const handleMap = (panels, id) => (
    <SplitColumn
      key={id}
      panels={panels}
      currentKey={id}
      currentSplitPanels={splitDetails}
    />
  );
  
  const handleLineMap = (
    { lineMeasurements, triangleMeasurements, stroke },
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
    <div className={cn(styles["split-content__main-container"], "pt-3")}>
      <div
        ref={wrapperRef}
        className={styles["split-content__panels-container"]}
      >
        {reformatedData.map(handleMap)}
      </div>
      <Stage
        width={width}
        height={height}
        className={styles["split-content__stage"]}
      >
        <Layer>{panelLines.map(handleLineMap)}</Layer>
      </Stage>
    </div>
  );
};

export default SplitContent;

import React from "react";
import styles from "./styles.module.css";
import { Handle } from "react-flow-renderer";
import clsx from "clsx";

const Panel = props => {
  const { data, targetPosition, sourcePosition } = props;

  const { airport, mlsStatus, id } = data;

  const renderBody = ({ zIndex = 1 }) => (
    <div style={{ zIndex }} className={styles.panelContentContainer}>
      <p className={styles.panelContentPieces}>100 pcs</p>
      <div>
        <div>
          <span className={styles.panelContentCode}>AA 1262</span>
        </div>
        <span className={styles.panelContentDate}>17 Dec, 20:35 (S)</span>
      </div>
    </div>
  );

  return (
    <div className={clsx(styles.panelWrapper, "airinfo_panel")}>
      <Handle type="target" position={targetPosition} />
      <div className={styles.panelContainer}>
        {airport && mlsStatus && (
          <div className={styles.panelHeaderContainer}>
            <div className={styles.panelHeaderAirport}>
              <span>{airport}</span>
            </div>
            <div className={styles.panelHeaderStatus}>
              <span>{mlsStatus}</span>
            </div>
          </div>
        )}
        {renderBody({})}
      </div>
      <Handle type="source" position={sourcePosition} />
    </div>
  );
};

export default Panel;

import React from "react";
import styles from "./styles.module.css";

const Panel = ({ airport, mlsStatus, nextStopId, id, split }) => {
  const renderBody = (data = { style: { zIndex: 1 } }) => (
    <div {...data} className={styles.panelContentContainer}>
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
    <div className={styles.panelWrapper}>
      <div
        className={styles.panelContainer}
        id={id}
        data-nextstopid={nextStopId}
        data-withsplits={!!split?.length}
      >
        <div className={styles.panelHeaderContainer}>
          <div className={styles.panelHeaderAirport}>
            <span>{airport}</span>
          </div>
          <div className={styles.panelHeaderStatus}>
            <span>{mlsStatus}</span>
          </div>
        </div>
        {renderBody()}
      </div>
      {Boolean(split?.length) && (
        <div className={styles.splitsWrapper}>
          {split?.map?.(({ nextStopId }, i) =>
            renderBody({
              style: { zIndex: split.length - i },
              "data-nextstopid": nextStopId,
            })
          )}
        </div>
      )}
    </div>
  );
};

export default Panel;

import React from "react";
import { getStrokeColor } from "../../../hooks/helpers";
import styles from "./styles.module.css";

const Panel = React.memo(props => {
  const {
    carrierCode,
    flightNumber,
    itemId,
    milestoneStatus,
    milestoneTime,
    milestoneTimePostfix,
    nextItemId,
    originAirportCode,
    pieces,
    subSplits,
  } = props;

  const renderBody = (
    {
      wrapperProps = { style: { zIndex: 1 } },
      pieces,
      milestoneTime,
      milestoneTimePostfix,
      carrierCode,
      flightNumber,
    } = {
      wrapperProps: { style: { zIndex: 1 } },
    }
  ) => (
    <div {...wrapperProps} className={styles.panelContentContainer}>
      <p className={styles.panelContentPieces}>{pieces} pcs</p>
      <div>
        <div>
          <span className={styles.panelContentCode}>
            {carrierCode} {flightNumber}
          </span>
        </div>
        <span className={styles.panelContentDate}>
          {milestoneTime} ({milestoneTimePostfix})
        </span>
      </div>
    </div>
  );

  return (
    <div className={styles.panelWrapper}>
      <div
        className={styles.panelContainer}
        id={itemId}
        data-nextitemid={nextItemId}
        data-withsplits={!!subSplits?.length}
        data-strokecolor={getStrokeColor(props)}
      >
        <div className={styles.panelHeaderContainer}>
          <div className={styles.panelHeaderAirport}>
            <span>{originAirportCode}</span>
          </div>
          <div className={styles.panelHeaderStatus}>
            <span>{milestoneStatus}</span>
          </div>
        </div>
        {renderBody({
          carrierCode,
          flightNumber,
          milestoneTime,
          milestoneTimePostfix,
          pieces,
        })}
      </div>
      {Boolean(subSplits?.length) && (
        <div className={styles.splitsWrapper}>
          {subSplits?.map?.(({ nextItemId, ...rest }, i) =>
            renderBody({
              wrapperProps: {
                style: { zIndex: subSplits.length - i },
                "data-nextitemid": nextItemId,
                "data-strokecolor": getStrokeColor({ nextItemId, ...rest }),
                key: i,
              },
              ...rest,
            })
          )}
        </div>
      )}
    </div>
  );
});

Panel.displayName = "Panel";

export default Panel;

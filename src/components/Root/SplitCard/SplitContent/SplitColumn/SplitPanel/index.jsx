import React from "react";
import { getStrokeColor } from "../../../../../../helpers";
import styles from "./styles.module.css";
import { STATUSES } from "../../../../../../mocks";
import cn from "classnames";

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
    classes: { splitPanelContainer },
    currentKey,
  } = props;

  const statusesStylesMapping = {
    [STATUSES.ARRIVED]: styles["panel__header-status--orange"],
    [STATUSES.PARTIAL_ARRIVED]: styles["panel__header-status--orange"],
    [STATUSES.DEPARTED]: styles["panel__header-status--green"],
  };

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
    <div {...wrapperProps} className={styles["panel__content-container"]}>
      <p className={styles["panel__content-pieces"]}>{pieces} pcs</p>
      <div>
        <div className={styles["panel__content-code-wrapper"]}>
          <span className={styles["panel__content-code"]}>
            {carrierCode} {flightNumber}
          </span>
        </div>
        <span className={styles["panel__content-date"]}>
          {/*  {milestoneTime} */}16 Dec, 22:35 ({milestoneTimePostfix})
        </span>
      </div>
    </div>
  );

  return (
    <div className={cn(styles.panel__wrapper, splitPanelContainer)}>
      <div
        className={styles.panel__container}
        id={itemId}
        data-nextitemid={nextItemId}
        data-withsplits={!!subSplits?.length}
        data-strokecolor={getStrokeColor(props)}
      >
        <div className={styles["panel__header-container"]}>
          <div className={styles["panel__header-airport"]}>
            <span className={styles["panel__header-airport-label"]}>
              {originAirportCode}
            </span>
          </div>
          <div
            className={cn(
              styles["panel__header-status"],
              statusesStylesMapping[milestoneStatus]
            )}
          >
            <span className={styles["panel__header-status-label"]}>
              {milestoneStatus}
            </span>
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
        <div className={styles["panel__splits-wrapper"]}>
          {subSplits?.map?.(({ nextItemId, ...rest }, i) =>
            renderBody({
              wrapperProps: {
                style: { zIndex: subSplits.length - i },
                "data-nextitemid": nextItemId,
                "data-strokecolor": getStrokeColor({ nextItemId, ...rest }),
                key: `${currentKey}-${i}`,
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

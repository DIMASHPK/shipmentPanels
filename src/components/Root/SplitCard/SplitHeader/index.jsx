import styles from "./styles.module.css";

const SplitHeader = props => {
  const { split } = props;

  const {
    milestoneStatus,
    pieces,
    splitNumber,
    transitStations: { numberOfFlights, stops },
  } = split;

  return (
    <div className={styles.splitHeader__container}>
      <div className={styles.splitHeader__splitsContainer}>
        <div className={styles.splitHeader__splitsWrapper}>
          <span className={styles.slitHeader__splitsLabel}>
            Split {splitNumber}
          </span>
        </div>
      </div>
      <div className={styles.splitHeader__flightContentContainer}>
        <span className={styles.splitHeader__piecesLabel}>{pieces} pcs</span>
        <div className={styles.border}>
          <span className={styles.splitHeader__stopsLabel}>
            {stops.toString()},
          </span>
          <span className={styles.splitHeader__flightLabel}>
            {numberOfFlights} Flight
          </span>
        </div>
      </div>
      <div className={styles.splitHeader__dashedDivider}></div>
      <div className={styles.splitHeader__statusContainer}>
        <span className={styles.splitHeader__statusLabel}>
          {milestoneStatus}
        </span>
        <span className={styles.splitHeader__statusCircle}></span>
      </div>
    </div>
  );
};

export default SplitHeader;

import SplitPanel from "./SplitPanel";
import styles from "./styles.module.css";
import cn from "classnames";

const Column = ({ panels }) => {
  const handleMap = item => (
    <SplitPanel
      classes={{ splitPanelContainer: styles["column__split-panel-container"] }}
      key={item.id}
      {...item}
    />
  );

  return (
    <div className={cn(styles["column__container"], "mb-5")}>
      {panels.map(handleMap)}
    </div>
  );
};

export default Column;

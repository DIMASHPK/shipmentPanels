import Panel from "./Panel";
import styles from "./styles.module.css";

const Column = ({ panels }) => {
  const handleMap = item => <Panel key={item.id} {...item} />;

  return <div className={styles.columnContainer}>{panels.map(handleMap)}</div>;
};

export default Column;

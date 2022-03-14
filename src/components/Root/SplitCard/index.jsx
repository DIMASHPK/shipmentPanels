import { useState } from "react";
import cn from "classnames";
import SplitHeader from "./SplitHeader";
import SplitContent from "./SplitContent";
import styles from "./styles.module.css";

const SplitCard = props => {
  const { split } = props;

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(prevValue => !prevValue);
  };

  return (
    <div className={cn("mb-4", "shadow", "bg-white", "rounded")}>
      <div onClick={toggleOpen} className={cn("p-3", "cursor-pointer")}>
        <SplitHeader split={split} />
      </div>
      {open && (
        <div className={cn(styles.splitContentContainer)}>
          <SplitContent split={split} />
        </div>
      )}
    </div>
  );
};

export default SplitCard;

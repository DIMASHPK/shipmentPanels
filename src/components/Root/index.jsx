import { FULL_RESPONSE } from "../../mocks";
import SplitCard from "./SplitCard";
import cn from "classnames";

const Root = () => {
  const handleMap = split => (
    <SplitCard key={split?.splitNumber} split={split} />
  );

  return (
    <div className={cn("container", "m-5")}>
      <div className="row">
        <div className="col-8">{FULL_RESPONSE.map(handleMap)}</div>
      </div>
    </div>
  );
};

export default Root;

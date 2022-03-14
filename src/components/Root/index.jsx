import { FULL_RESPONSE } from "../../mocks";
import SplitCard from "./SplitCard";
import cn from "classnames";

const Root = () => {
  const handleMap = split => (
    <SplitCard key={split?.splitNumber} split={split} />
  );

  return (
    <div className={cn("container")}>
      <div className="row">
        <div className={cn("col-12", "col-md-10")}>
          <div className={cn("m-1", "m-md-5")}>
            {FULL_RESPONSE.map(handleMap)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;

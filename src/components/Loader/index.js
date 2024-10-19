import { Icon } from "@iconify/react";
import classes from "./index.module.css";

const Loader = () => {
  return (
    <div className={classes.loading}>
      <Icon icon="line-md:loading-twotone-loop" />
    </div>
  );
};
export default Loader;

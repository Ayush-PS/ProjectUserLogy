import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import classes from "./Progress.module.css";
function Progress(props) {
  const pro = (props.number / props.Totalno) * 100;
  return (
    <div className={classes["progress"]}>
      <div className={classes["progresshead"]}>
        <div className={classes["progressname"]}> {props.name}</div>
        <div className={classes["progressdata"]}>
          <div
            className={classes["progressnumber"]}
          >{`${props.number} resp`}</div>
          <div className={classes["progressper"]}>{`${pro}%`}</div>
        </div>
      </div>
      <ProgressBar
        completed={pro}
        bgColor="teal"
        labelSize="10px"
        height="12px"
      />
    </div>
  );
}

export default Progress;

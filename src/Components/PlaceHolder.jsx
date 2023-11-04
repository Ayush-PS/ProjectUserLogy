import React from "react";
import classes from "./PlaceHolder.module.css";
import Divider from "@mui/material/Divider";
function PlaceHolder(props) {
  return (
    <div className={classes["placeholdermain"]}>
      <div className={classes["nameplaceholder"]}>{props.name}</div>
      <div
        className={classes["timeplaceholder"]}
      >{`${props.time} hours ago`}</div>
      <Divider sx={{ bgcolor: "grey", height: "1px" }} />
    </div>
  );
}

export default PlaceHolder;

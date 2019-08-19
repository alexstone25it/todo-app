import React from "react";

function StrikeThrough(props) {
  let strike = "";
  if (props.stricken) {
    strike += " line";
  }

  return <span className={strike}>{props.children}</span>;
}

export default StrikeThrough;

import React from "react";

function StrikeThrough(props) {
  const stricken = props.stricken;
  const children = props.children;
  let strike = "";
  if (stricken) {
    strike += " line";
  }

  return <span className={strike}>{children}</span>;
}

export default StrikeThrough;

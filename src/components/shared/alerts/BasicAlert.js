import React from "react";

function BasicAlert(props) {
  return (
    <div className="alert alert-warning" role="alert">
      {props.children}
    </div>
  );
}

export default BasicAlert;

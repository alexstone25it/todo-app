import React from "react";

function SubHeader(props) {
  return (
    <header className="row">
      <h2 className="col-12">{props.children}</h2>
    </header>
  );
}

export default SubHeader;

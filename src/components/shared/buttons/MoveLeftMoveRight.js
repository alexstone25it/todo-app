import React, { Fragment } from "react";

import { Button } from "reactstrap";

function MoveLeftMoveRight(props) {
  const day = <h5>Today</h5>;
  return (
    <Fragment>
      <span>{day}</span>
      <span className="mr-2">
        <Button className="Button--small" style={{ padding: ".2rem .8rem" }}>
          >
        </Button>
      </span>
      <span className="mr-2">
        <Button className="Button--small" style={{ padding: ".2rem .6rem" }}>
          >>>
        </Button>
      </span>
      <span className="mr-2">
        <Button className="Button--small">>>></Button>
      </span>
      <span>
        <Button className="Button--small">>>>></Button>
      </span>
    </Fragment>
  );
}

export default MoveLeftMoveRight;

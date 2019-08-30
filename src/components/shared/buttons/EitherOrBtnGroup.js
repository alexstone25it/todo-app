import React from "react";

import { Row, Button, ButtonGroup } from "reactstrap";

function EitherOrBtnGroup(props) {
  return (
    <Row className="justify-content-around">
      <ButtonGroup>
        <Button
          style={{ backgroundColor: "teal", border: "1px solid black" }}
          onClick={props.eitherClicked}
        >
          Add to user
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          style={{
            backgroundColor: "teal",
            border: "1px solid black"
          }}
          onClick={props.orClicked}
        >
          Add to family
        </Button>
      </ButtonGroup>
    </Row>
  );
}

export default EitherOrBtnGroup;

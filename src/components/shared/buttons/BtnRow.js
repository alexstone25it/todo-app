import React from "react";

import { Row, Button, ButtonGroup } from "reactstrap";

function BtnRow(props) {
  const btnArray = props.btnArray;
  const btnStyle = props.btnStyle;
  const btns = btnArray.map((btn, index) => (
    <ButtonGroup key={index}>
      <Button style={btnStyle} onClick={() => props.onClick({ index })}>
        {btn}
      </Button>
    </ButtonGroup>
  ));
  return <Row className="justify-content-around">{btns}</Row>;
}

export default BtnRow;

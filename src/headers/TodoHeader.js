import React from "react";

function TodoHeader(props) {
  let todoTitle = "col-12";
  if (props.stricken) {
    todoTitle += " line";
  }

  return (
    <header className="row">
      <h3 className={todoTitle}>{props.children}</h3>
    </header>
  );
}

export default TodoHeader;

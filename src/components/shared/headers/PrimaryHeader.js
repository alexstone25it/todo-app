import React from "react";

import { capitalFirstLetter } from "../functions";

function PrimaryHeader({ user }) {
  let title;
  if (user === undefined) {
    title = "The";
  } else {
    title = capitalFirstLetter(user) + "'s";
  }

  return (
    <header className="row">
      <h1 className="col-12 text-center">{title} Todoodle</h1>
    </header>
  );
}

export default PrimaryHeader;

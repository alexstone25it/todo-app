import React from "react";

import ShoppingAddon from "../../../pages/todoodle/addons/shopping/ShoppingAddon";
import RotaAddon from "../../../pages/todoodle/addons/rota/RotaAddon";
import TaskAddon from "../../../pages/todoodle/addons/tasks/TaskAddon";

export const matchAddon = addon => {
  switch (addon) {
    case "shopping":
      return <ShoppingAddon />;
    case "rota":
      return <RotaAddon />;
    case "tasks":
      return <TaskAddon />;
    case undefined:
      return null;
    default:
      return null;
  }
};

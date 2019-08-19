import React from "react";
import { Badge } from "reactstrap";

export function LargeBadge(props) {
  return (
    <Badge color="danger" className="mt-1 ml-1 align-text-top">
      {props.children}
    </Badge>
  );
}
export function SmallBadge(props) {
  return (
    <Badge pill color="danger" className="ml-1">
      {props.children}
    </Badge>
  );
}

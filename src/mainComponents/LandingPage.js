import React from "react";

import "./LandingPage.css";

import { Container } from "reactstrap";

import PrimaryHeader from "../shared/headers/PrimaryHeader";
import LoginForm from "../shared/forms/LoginForm";

function LandingPage() {
  return (
    <Container className="LandingPage">
      <PrimaryHeader />
      <LoginForm />
    </Container>
  );
}

export default LandingPage;

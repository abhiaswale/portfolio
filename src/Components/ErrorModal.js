import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import Button from "./Layout/Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  ${mobile({
    fontSize: "0.8rem",
  })}
`;
const MyLink = styled(Link)`
  font-size: 1.2em;
  color: white;
  text-decoration: none;
`;

const ErrorModal = () => {
  return (
    <Container>
      <h1>
        404 |<span style={{ fontWeight: "normal" }}>&nbsp; Page Not Found</span>{" "}
      </h1>
      <Button>
        <MyLink to="/">Go Home</MyLink>
      </Button>
    </Container>
  );
};

export default ErrorModal;

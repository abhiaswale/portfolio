import React from "react";
import styled from "styled-components";
import Button from "../Layout/Button";

const Container = styled.div`
  background-color: #ecf7f9;
  padding: 20px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  -webkit-box-shadow: 0 8px 6px -6px grey;
  -moz-box-shadow: 0 8px 6px -6px grey;
  box-shadow: 0 8px 2px -6px grey;
`;
// const Wrapper = styled.div``;
const Temp = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const BtnName = styled.a`
  color: white;
  text-decoration: none;
  color: ${(props) => props.name === "source" && "black"};
`;

const ProjectItem = (props) => {
  return (
    <Container>
      <h1>{props.name}</h1>
      <span>{props.date}</span>
      <p>{props.detailedDescription}</p>
      <Temp>
        <Button name="live">
          <BtnName href={props.live}>View Live</BtnName>
        </Button>
        <Button name="source">
          <BtnName href={props.source} name="source">
            View Source
          </BtnName>
        </Button>
      </Temp>
    </Container>
  );
};

export default ProjectItem;

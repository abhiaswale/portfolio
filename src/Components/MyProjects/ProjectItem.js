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
const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;
const Date = styled.span`
  margin: 0.5em 0em;
  font-size: 0.8em;
`;
const Temp = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Desc = styled.p`
  font-weight: 500;
  margin-top: 10px;
`;
const BtnName = styled.a`
  color: white;
  text-decoration: none;
  color: ${(props) => props.name === "source" && "black"};
  &:hover {
    color: white;
  }
  transition: 1.3s;
`;

const ProjectItem = (props) => {
  return (
    <Container>
      <Title>{props.name}</Title>
      <Date>{props.date}</Date>
      <Desc>{props.detailedDescription}</Desc>
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

import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import Button from "../Layout/Button";

const Container = styled.div`
  background-color: #ecf7f9;
  padding: 20px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
`;
const Title = styled.span`
  font-size: 1.2em;
  font-weight: 600;
  ${mobile({ fontSize: "1em" })}
`;
const Date = styled.span`
  margin: 0.5em 0em;
  font-size: 0.8em;
`;
const Desc = styled.p`
  margin: 0.6em 0em;
  font-weight: 500;
`;
const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const BtnName = styled.a`
  color: white;
  text-decoration: none;
  color: ${(props) => props.name === "source" && "black"};
  &:hover {
    color: white;
  }
`;
const WorkItem = (props) => {
  return (
    <Container>
      <Title>{props.name}</Title>
      <Date>{props.date}</Date>
      <Desc>{props.desc}</Desc>
      <BtnWrapper>
        <Button name="live">
          <BtnName href={props.live} target="_blank">
            View Live
          </BtnName>
        </Button>
        <Button name="source">
          <BtnName href={props.source} name="source" target="_blank">
            View Source
          </BtnName>
        </Button>
      </BtnWrapper>
    </Container>
  );
};

export default WorkItem;

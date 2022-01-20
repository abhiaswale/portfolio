import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  background-color: #ecf7f9;
  padding: 20px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
`;
const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 900;
`;
const Date = styled.span``;
const Desc = styled.p``;
const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Button = styled.button`
  padding: 5px 13px;
  margin-left: ${(props) => props.name && "10px"};
  background-color: #40b1bf;
  background-color: ${(props) => props.name && "#ecf7f9"};
  border-radius: 25px;
  border: 2px solid #40b1bf;
  border: ${(props) => props.name && "2px solid #40b1bf"};
`;
const BtnName = styled.a`
  color: white;
  text-decoration: none;
  color: ${(props) => props.name && "black"};
`;
const WorkItem = (props) => {
  return (
    <Container>
      <Title>{props.name}</Title>
      <Date>{props.date}</Date>
      <Desc>{props.desc}</Desc>
      <BtnWrapper>
        <Button>
          <BtnName href={props.live}>View Live</BtnName>
        </Button>
        <Button name="source">
          <BtnName href={props.source} name="sourceText">
            View Source
          </BtnName>
        </Button>
      </BtnWrapper>
    </Container>
  );
};

export default WorkItem;

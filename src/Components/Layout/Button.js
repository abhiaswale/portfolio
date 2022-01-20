import React from "react";
import styled from "styled-components";
const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const MainButton = styled.button`
  padding: 5px 13px;
  margin-left: ${(props) => props.name === "source" && "10px"};
  background-color: #40b1bf;
  background-color: ${(props) => props.name === "source" && "#ecf7f9"};
  border-radius: 25px;
  border: 2px solid #40b1bf;
  border: ${(props) => props.name === "source" && "2px solid #40b1bf"};
  transition: 1s;
  &:hover {
    background-color: #4e9dad;
  }
`;
const Button = (props) => {
  return (
    <BtnWrapper>
      <MainButton name={props.name}>
        <a href={props.link}>{props.children}</a>
      </MainButton>
    </BtnWrapper>
  );
};

export default Button;

import React from "react";
import styled from "styled-components";
const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const MainButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  padding: 5px 13px;
  margin-left: ${(props) => props.name === "source" && "10px"};
  background-color: #40b1bf;
  background-color: ${(props) => props.name === "source" && "#ecf7f9"};
  border-radius: 25px;
  border: 2px solid #40b1bf;
  border: ${(props) => props.name === "source" && "2px solid #40b1bf"};
  transition: 1s;
  cursor: pointer;
  &:hover {
    background-color: #4e9dad;
    /* color: ${(props) => props.name === "source" && "white"}; */
  }
`;
const Button = (props) => {
  return (
    <BtnWrapper>
      <MainButton name={props.name}>{props.children}</MainButton>
    </BtnWrapper>
  );
};

export default Button;

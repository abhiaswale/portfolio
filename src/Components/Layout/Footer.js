import React from "react";
import styled from "styled-components";

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";

const Container = styled.div`
  width: 100%;
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 58%;
  padding: 10px 10px;
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #03989e;
`;

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
  font-size: 2rem;
`;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <p>
          <span>©2022</span>, Built with{" "}
          <a href="https://reactjs.org/">React Js</a>
        </p>
        <IconWrapper>
          <a href="https://github.com/abhiaswale">
            <AiFillGithub />
          </a>
          <a href="https://twitter.com/_abhi42">
            <AiFillTwitterCircle />
          </a>
          <a href="https://www.facebook.com/abhishek.aswale.3/">
            <AiFillFacebook />
          </a>
        </IconWrapper>
      </Wrapper>
    </Container>
  );
};

export default Footer;

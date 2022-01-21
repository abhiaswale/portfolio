import React from "react";
import styled from "styled-components";

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import ScrollTopBtn from "./ScrollTopBtn";

const MainWrp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 40px 0px;
`;
const Wrapper = styled.div`
  width: 58%;
  padding: 10px 10px;
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

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px 0px 42px 0px; ;
`;

const Footer = () => {
  return (
    <MainWrp>
      <BtnWrap>
        <ScrollTopBtn />
        <div style={{ fontWeight: "500" }}>Top</div>
      </BtnWrap>
      <Container>
        <Wrapper>
          <p style={{ fontWeight: "500" }}>
            <span>©2022</span>, Built with
            <a href="https://reactjs.org/"> React Js</a>
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
    </MainWrp>
  );
};

export default Footer;

import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import styled from "styled-components";
import { mobile } from "../responsive";
import MyWork from "./MyWork/MyWork";
import Tech from "./Tech";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 58%;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 75px 0px;
  ${mobile({ width: "100%", margin: "60px 0px 0px 0px" })}
`;
const Main = styled.div`
  font-size: 2rem;
  font-weight: 600;
  ${mobile({ fontSize: "1.7rem", margin: "35px 10px" })}
`;
const HeadingInfo = styled.span`
  display: block;
  color: green;
  margin-bottom: 8px;
  ${mobile({
    display: "inline",
    textAlign: "center",
    paddingRight: "0.75rem",
    // paddingBottom: "2rem",
  })}
`;
const NameWrapper = styled.span``;
const TechDescription = styled.span`
  margin: 10px;
  color: #03989e;
  ${mobile({ display: "block", margin: "12px 0px" })}
`;

const MyDesc = styled.p`
  letter-spacing: 1px;
  font-weight: 500;
  line-height: 1.5;
  ${mobile({ fontSize: "1rem", letterSpacing: "2px" })}
`;

const MainContent = () => {
  return (
    <Fragment>
      <Container>
        <Wrapper>
          <div>
            <Main>
              <HeadingInfo>Hi there!</HeadingInfo>
              <NameWrapper>I'm Abhishek</NameWrapper>
              <TechDescription>A Front End Developer</TechDescription>
            </Main>
            <MyDesc>
              I'm a Software Engineer in Nashik, Maharashtra. I mostly focus on
              front-end of the web. I like to craft solid and scalable frontend
              products with great user expriences. This is my site where I share
              whatever side projects I've been working on.
            </MyDesc>
          </div>
        </Wrapper>
      </Container>
      <MyWork />
      <Tech />
    </Fragment>
  );
};

export default MainContent;

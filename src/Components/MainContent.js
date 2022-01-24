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
  ${mobile({ width: "100%", marginTop: "93px" })}
`;
const Main = styled.div`
  font-size: 2rem;
  font-weight: 600;
  ${mobile({ fontSize: "1.8rem", margin: "35px 10px" })}
`;
const HeadingInfo = styled.span`
  color: green;
  margin-bottom: 20px;
  ${mobile({
    textAlign: "center",
    paddingRight: "0.75rem",
    paddingBottom: "1rem",
  })}
`;
const NameWrapper = styled.span``;
const TechDescription = styled.span`
  margin: 10px;
  color: #03989e;
  ${mobile({ display: "block", margin: "0px" })}
`;

const MyDesc = styled.p`
  letter-spacing: 1px;
  font-weight: 500;
  ${mobile({ fontSize: "0.8rem", letterSpacing: "2px" })}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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

import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import styled from "styled-components";
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
`;
const Main = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;
const HeadingInfo = styled.span`
  color: green;
  margin-bottom: 20px;
`;
const TechDescription = styled.span`
  margin: 10px;
  color: #03989e;
`;

const MyDesc = styled.p`
  letter-spacing: 1px;
  font-weight: 500;
`;

const MainContent = () => {
  return (
    <Fragment>
      <Container>
        <Wrapper>
          <div>
            <Main>
              <HeadingInfo>Hi there!</HeadingInfo> <br />
              I'm Abhishek
              <TechDescription> A Front End Developer</TechDescription>
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

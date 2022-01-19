import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;
const Wrapper = styled.div`
  width: 58%;
  padding: 10px 10px;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const MainContent = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <h1>
            Hi there! <br />
            I'm Abhishek <span>A Front End Developer</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </Wrapper>
    </Container>
  );
};

export default MainContent;

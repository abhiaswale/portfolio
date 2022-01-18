import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: pink;
`;
const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;

const LinkWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;
const Link = styled.li`
  padding: 5px;
  transition: ease-in-ease-in-out 0.5ms;
  &:hover {
    color: red;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>Abhishek</Left>
        <Right>
          <LinkWrapper>
            <Link>HOME</Link>
            <Link>PROJECTS</Link>
            <Link>RESUME</Link>
            <Link>CONTACT</Link>
          </LinkWrapper>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../images/Logo3.png";

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
  border-bottom: 1px solid #03989e;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
`;
const LogoImg = styled.img`
  object-fit: cover;
  width: 190px;
  height: auto;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const LinkWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Links = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #03989e;
`;

const LinkItem = styled.li`
  cursor: pointer;
  padding: 12px;
  transition: 1s;
`;

const MyNavLink = styled(NavLink)`
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LogoImg src={Logo} />
        </Left>
        <Right>
          <LinkWrapper>
            <Links>
              <LinkItem>
                <MyNavLink
                  to="/"
                  // activeStyle={{
                  //   fontWeight: "bold",
                  //   color: "red",
                  // }}
                >
                  HOME
                </MyNavLink>
              </LinkItem>
              <LinkItem>
                <MyNavLink to="/projects">PROJECTS</MyNavLink>
              </LinkItem>
              <LinkItem>CONTACT</LinkItem>
            </Links>
          </LinkWrapper>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

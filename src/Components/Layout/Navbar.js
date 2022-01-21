import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../images/Logo3.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 58%;
  height: 8vh;
  padding: 16px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #03989e;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const LogoImg = styled.img`
  object-fit: cover;
  width: 190px;
  height: 25vh;
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
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
  /* color: #03989e; */
`;

const LinkItem = styled.li`
  cursor: pointer;
  padding: 12px;
  transition: 1s;
  font-weight: bold;
  color: #03989e;
`;

const MyNavLink = styled(NavLink)`
  text-decoration: none;
`;

const Navbar = () => {
  let navigate = useNavigate();
  const GoHome = () => {
    navigate("/");
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    console.log(document.documentElement.scrollHeight);
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <LogoImg src={Logo} onClick={GoHome} />
        </Left>

        <Right>
          <LinkWrapper>
            <Links>
              <LinkItem>
                <MyNavLink to="/">HOME</MyNavLink>
              </LinkItem>
              <LinkItem>
                <MyNavLink to="/projects">PROJECTS</MyNavLink>
              </LinkItem>
              <LinkItem>
                <span onClick={scrollToBottom}>CONTACT</span>
              </LinkItem>
            </Links>
          </LinkWrapper>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

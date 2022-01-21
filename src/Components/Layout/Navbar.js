import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../images/Logo3.png";
import { mobile } from "../../responsive.js";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ width: "100%" })}
`;
const Wrapper = styled.div`
  ${mobile({ backgroundColor: "red", width: "100%", height: "2vh" })}
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
  ${mobile({ width: "15vh", height: "10vh" })}
`;
const LogoImg = styled.img`
  width: 190px;
  height: 8vh;
  cursor: pointer;
  ${mobile({ width: "25vh", height: "5vh", padding: "20px 10px" })}
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  ${mobile({ display: "none" })}
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
`;

const LinkItem = styled.li`
  padding: 12px;
  transition: 1s;
  font-weight: bold;
`;

const MyNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: #03989e;
`;

const ContactBtn = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #03989e;
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
                <MyNavLink to="/" style={() => console.log("I'm Called")}>
                  HOME
                </MyNavLink>
              </LinkItem>
              <LinkItem>
                <MyNavLink to="/projects">PROJECTS</MyNavLink>
              </LinkItem>
              <LinkItem>
                <ContactBtn onClick={scrollToBottom}>CONTACT</ContactBtn>
              </LinkItem>
            </Links>
          </LinkWrapper>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

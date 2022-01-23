import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mobile } from "../../../responsive";

const LinkWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({
    backgroundColor: "white",
    width: "100%",
    position: "absolute",
    top: "100%",
    left: "0%",
  })}
`;
const Links = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({
    flexDirection: "column",
    fontSize: "1rem",
  })}
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
  font-size: 0.8rem;
`;

const ContactBtn = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #03989e;
`;

const Navlinks = (props) => {
  const mobileClick = () => {
    props.isMobile && props.close();
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <LinkWrapper>
        <Links>
          <LinkItem>
            <MyNavLink to="/" onClick={mobileClick}>
              HOME
            </MyNavLink>
          </LinkItem>
          <LinkItem>
            <MyNavLink to="/projects" onClick={mobileClick}>
              PROJECTS
            </MyNavLink>
          </LinkItem>
          <LinkItem onClick={mobileClick}>
            <ContactBtn onClick={scrollToBottom}>CONTACT</ContactBtn>
          </LinkItem>
        </Links>
      </LinkWrapper>
    </div>
  );
};

export default Navlinks;

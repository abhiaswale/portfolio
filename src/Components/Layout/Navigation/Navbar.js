import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../images/logoo.png";
import { mobile } from "../../../responsive.js";
import Navlinks from "./Navlinks";
import { RiMenu2Line, RiCloseFill } from "react-icons/ri";

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
  ${mobile({
    position: "fixed",
    width: "100%",
    height: "7vh",
    top: "0%",
    backgroundColor: "white",
    padding: "10px 10px",
  })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  width: 30vh;
  ${mobile({ padding: "10px" })}
`;
const LogoImg = styled.img`
  object-fit: cover;
  width: 30vh;

  cursor: pointer;
  ${mobile({ width: "24vh", height: "22vh", padding: "0px 10px" })}
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
const MainNav = styled.div`
  ${mobile({ display: "none" })}
`;
const MobileNav = styled.div`
  display: none;
  ${mobile({
    display: "block",
    color: "black",
    fontSize: "1.3em",
    fontWeight: "600",
    cursor: "pointer",
    transition: "1s",
    padding: "20px",
  })}
`;

const Navbar = () => {
  let navigate = useNavigate();
  const GoHome = () => {
    navigate("/");
  };
  const [sideBar, setisSideBar] = useState(false);
  const toggleHandler = () => {
    setisSideBar(!sideBar);
  };

  const openIcon = (
    <RiMenu2Line onClick={toggleHandler} style={{ fontSize: "2rem" }} />
  );
  const closeIcon = (
    <RiCloseFill onClick={toggleHandler} style={{ fontSize: "2rem" }} />
  );

  const closeMobileMenu = () => {
    setisSideBar(false);
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      // if (!menuRef.current.contains(e.target)) {
      //   setisSideBar(false);
      //   console.log("hi");
      // }
      console.log(e.target);
      console.log(menuRef.current);
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <Container>
      <Wrapper>
        <Left>
          <LogoImg src={Logo} onClick={GoHome} />
        </Left>
        <Right>
          <MainNav>
            <Navlinks />
          </MainNav>
          <MobileNav ref={menuRef}>
            {sideBar ? closeIcon : openIcon}
            {sideBar && <Navlinks isMobile={true} close={closeMobileMenu} />}
          </MobileNav>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

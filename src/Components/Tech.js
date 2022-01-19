import React from "react";
import styled from "styled-components";
import Js from "../images/Tech/js.svg";
import ReactLogo from "../images/Tech/react.svg";
import Redux from "../images/Tech/redux.svg";
import Nodejs from "../images/Tech/nodejs.svg";
import Html from "../images/Tech/html.svg";
import Css from "../images/Tech/css.svg";
import Github from "../images/Tech/github.svg";
import Git from "../images/Tech/git.svg";
import Jira from "../images/Tech/jira.svg";
import Mysql from "../images/Tech/mysql.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 58%;
  padding: 10px 10px;
  background-color: pink;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

const LogosImg = styled.img`
  width: 50px;
`;
const LogoName = styled.span``;

const Tech = () => {
  return (
    <Container>
      <Wrapper>
        <Item>
          <LogosImg src={Js} />
          <LogoName>Javascript</LogoName>
        </Item>
        <Item>
          <LogosImg src={ReactLogo} />
          <LogoName>React</LogoName>
        </Item>
        <Item>
          <LogosImg src={Redux} />
          <LogoName>Redux</LogoName>
        </Item>
        <Item>
          <LogosImg src={Nodejs} />
          <LogoName>Nodejs</LogoName>
        </Item>
        <Item>
          <LogosImg src={Html} />
          <LogoName>Html</LogoName>
        </Item>
        <Item>
          <LogosImg src={Css} />
          <LogoName>Css</LogoName>
        </Item>
        <Item>
          <LogosImg src={Github} />
          <LogoName>GitHub</LogoName>
        </Item>
        <Item>
          <LogosImg src={Git} />
          <LogoName>Git</LogoName>
        </Item>
        <Item>
          <LogosImg src={Jira} />
          <LogoName>Jira</LogoName>
        </Item>
        <Item>
          <LogosImg src={Mysql} />
          <LogoName>Mysql</LogoName>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Tech;
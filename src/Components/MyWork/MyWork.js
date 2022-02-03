import React from "react";
import styled from "styled-components";
import WorkItem from "./WorkItem";
import { projectItems } from "../../data";
import { Link } from "react-router-dom";
import Button from "../Layout/Button";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "100%" })}
`;
const Wrapper = styled.div`
  width: 58%;
  padding: 10px 10px;
  display: grid;
  grid-template-columns: 1fr;
  ${mobile({ width: "100%" })}
`;
const Title = styled.h1`
  ${mobile({ fontSize: "1.5rem", textAlign: "center" })}
`;

const Work = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  ${mobile({
    gridTemplateColumns: "1fr",
    width: "100%",
    alignContent: "center",
  })}
  grid-gap: 40px;
`;

const ViewBtnWrapper = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 35px 0px 60px 0px;
`;
const MyLink = styled(Link)`
  font-size: 1.2em;
  color: white;
  text-decoration: none;
`;

const MyWork = () => {
  const filterWorkList = projectItems.filter((wor) => wor.id <= 3);
  const workList = filterWorkList.map((work) => (
    <WorkItem
      id={work.id}
      key={work.id}
      name={work.name}
      date={work.date}
      desc={work.description}
      live={work.live}
      source={work.source}
    />
  ));
  return (
    <Container>
      <Wrapper>
        <Title>MY WORK</Title>
        <Work>{workList}</Work>
        <ViewBtnWrapper>
          <Button>
            <MyLink to="/projects">View All</MyLink>
          </Button>
        </ViewBtnWrapper>
      </Wrapper>
    </Container>
  );
};

export default MyWork;

import React from "react";
import styled from "styled-components";
import WorkItem from "./WorkItem";
import { projectItems } from "../../data";

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
  grid-template-columns: 1fr;
`;
const Title = styled.h1``;

const Work = styled.div`
  width: 94%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 62px;
`;

const MyWork = () => {
  const workList = projectItems.map((work) => (
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
      </Wrapper>
    </Container>
  );
};

export default MyWork;

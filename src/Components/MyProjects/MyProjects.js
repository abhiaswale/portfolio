import React from "react";
import styled from "styled-components";
import { projectItems } from "../../data";
import { mobile } from "../../responsive";
import ProjectItem from "./ProjectItem";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 58%;
  padding: 10px 10px;
  ${mobile({ width: "100%" })}
`;
const Title = styled.h1`
  ${mobile({ fontSize: "1.8rem", textAlign: "center" })}
`;
const Desc = styled.p`
  font-weight: 500;
  margin: 0;
`;
const Project = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  margin-top: 20px;
`;

const MyProjects = () => {
  const projectsList = projectItems.map((proj) => (
    <ProjectItem
      id={proj.id}
      key={proj.id}
      name={proj.name}
      date={proj.date}
      detailedDescription={proj.detailedDescription}
      live={proj.live}
      source={proj.source}
    />
  ));
  return (
    <Container>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>These are some of the web applications I've developed</Desc>
        <Project>{projectsList}</Project>
      </Wrapper>
    </Container>
  );
};

export default MyProjects;

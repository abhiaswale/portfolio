import React from "react";
import styled from "styled-components";
import { projectItems } from "../../data";
import ProjectItem from "./ProjectItem";

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

const MyProjects = () => {
  const projectsList = projectItems.map((proj) => (
    <ProjectItem
      id={proj.id}
      name={proj.name}
      date={proj.date}
      detailedDescription={proj.detailedDescription}
      live={proj.live}
      source={proj.source}
    />
  ));
  return (
    <Container>
      <Wrapper>{projectsList}</Wrapper>
    </Container>
  );
};

export default MyProjects;

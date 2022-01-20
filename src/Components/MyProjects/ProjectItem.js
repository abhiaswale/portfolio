import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #ecf7f9;
  padding: 20px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
`;
const Wrapper = styled.div``;

const ProjectItem = (props) => {
  return (
    <Container>
      <h1>{props.name}</h1>
      <span>{props.date}</span>
      <p>{props.detailedDescription}</p>
      <div>
        <button>
          <a href={props.live}>Live</a>
        </button>
        <button>
          <a href={props.source}>source</a>
        </button>
      </div>
    </Container>
  );
};

export default ProjectItem;

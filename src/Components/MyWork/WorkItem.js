import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  background-color: yellow;
`;

const WorkItem = (props) => {
  return (
    <Container>
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
      <button>
        <a href={props.live}>Live</a>
      </button>
      <button>
        <a href={props.source}>Source</a>
      </button>
    </Container>
  );
};

export default WorkItem;

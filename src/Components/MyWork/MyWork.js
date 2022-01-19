import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WorkItem from "./WorkItem";

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
  const [work, setWork] = useState([]);

  useEffect(() => {
    const fetchWork = async () => {
      const response = await fetch(
        "https://portfolio-305e7-default-rtdb.firebaseio.com/MyWork.json"
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong!");
      }
      const data = await response.json();
      console.log(data);
      const loadedWork = [];
      for (const key in data) {
        loadedWork.push({
          id: key,
          name: data[key].name,
          desc: data[key].description,
          live: data[key].live,
          source: data[key].source,
        });
      }
      console.log(loadedWork);
      setWork(loadedWork);
    };

    fetchWork().catch((err) => alert(err.message));
  }, []);

  const workList = work.map((work) => (
    <WorkItem
      id={work.id}
      key={work.id}
      name={work.name}
      desc={work.desc}
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

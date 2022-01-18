import React, { useEffect, useState } from "react";
import WorkItem from "./WorkItem";

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
  return <div>{workList}</div>;
};

export default MyWork;

// import React, { useEffect, useState } from "react";

const MyProjects = () => {
  //   const [projects, setProjects] = useState([]);

  //   useEffect(() => {
  //     const fetchProjects = async () => {
  //       const response = await fetch(
  //         "https://portfolio-305e7-default-rtdb.firebaseio.com/MyWork.json"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Error");
  //       }
  //       const data = await response.json();
  //       console.log(data);
  //       const loadedProj = [];
  //       for (const key in data) {
  //         loadedProj.push({
  //           id: key,
  //           name: data[key].name,
  //         });
  //       }
  //       console.log(loadedProj);
  //       setProjects([]);
  //       //   setProjects(loadedProj);
  //       console.log(projects);
  //     };

  //     fetchProjects().catch((err) => alert(err.message));
  //   }, []);

  return (
    <div>
      <h1>My Projects</h1>
    </div>
  );
};

export default MyProjects;

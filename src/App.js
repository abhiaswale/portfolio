import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}
export default App;

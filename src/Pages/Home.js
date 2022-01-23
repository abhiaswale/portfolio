import React from "react";
import Footer from "../Components/Layout/Footer";
import Navbar from "../Components/Layout/Navigation/Navbar";
import MainContent from "../Components/MainContent";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;

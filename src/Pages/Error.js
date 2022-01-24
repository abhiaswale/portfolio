import React from "react";
import ErrorModal from "../Components/ErrorModal";
import Footer from "../Components/Layout/Footer";
import Navbar from "../Components/Layout/Navigation/Navbar";

const Error = () => {
  return (
    <div>
      <Navbar />
      <ErrorModal />
      <Footer />
    </div>
  );
};

export default Error;

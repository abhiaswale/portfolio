import React, { Fragment, useEffect, useState } from "react";
import { CgChevronUp } from "react-icons/cg";
import styled from "styled-components";
const UpButton = styled.button`
  font-size: 2rem;
  font-weight: bold;
  background: transparent;
  border: none;
  cursor: pointer;
`;
const ScrollTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
    return () => {
      setIsVisible(); // This worked for me
    };
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      {isVisible && (
        <UpButton>
          <CgChevronUp onClick={ScrollToTop} />
        </UpButton>
      )}
    </Fragment>
  );
};

export default ScrollTopBtn;

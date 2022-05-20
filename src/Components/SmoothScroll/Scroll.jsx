import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { VisibilityContainer, ScrollIcon } from "./style";

const Scroll = () => {
  const [visibility, setVisibility] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };

  // Set the top cordinate to 0 and
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <React.Fragment>
      {visibility && (
        <VisibilityContainer onClick={scrollToTop}>
          <ScrollIcon>
            <AiOutlineArrowUp />
          </ScrollIcon>
        </VisibilityContainer>
      )}
    </React.Fragment>
  );
};

export default Scroll;

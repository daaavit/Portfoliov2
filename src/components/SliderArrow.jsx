import React, { useState } from "react";
import {
  SliderArrowWrapper,
  OpenMenu,
  OpenContact,
} from "../styles/SliderArrow.Styles";
import InfoCardMobile from "./InfoCardMobile";
import AboutCardMobile from "./AboutCardMobile";

const SliderArrow = () => {
  //state variables to keep track of whether the info card and about card are open or closed
  const [infoCardOpenIndex, setInfoCardOpenIndex] = useState(0);
  const [aboutCardOpenIndex, setAboutCardOpenIndex] = useState(0);

  //updates the state variables when the open menu and open contact buttons are clicked
  const handleInfoCardClick = () => {
    setInfoCardOpenIndex((prevIndex) => prevIndex + 1);
    setAboutCardOpenIndex(0);
  };

  const handleAboutCardClick = () => {
    setAboutCardOpenIndex((prevIndex) => prevIndex + 1);
    setInfoCardOpenIndex(0);
  };

  //  returns either "•••" or "X" depending on whether the given index is even or odd
  const getDots = (index) => (index % 2 === 0 ? "•••" : "X");

  return (
    <>
      {/* Conditionally render the info card and about card based on whether their respective state variables are odd or even */}
      {infoCardOpenIndex % 2 === 1 && <InfoCardMobile />}
      {aboutCardOpenIndex % 2 === 1 && <AboutCardMobile />}
      {/* Renders the open menu and open contact buttons, and call the appropriate function when each button is clicked */}
      <SliderArrowWrapper>
        <OpenMenu onClick={handleInfoCardClick}>
          {/* Use the getDots function to determine whether to display "•••" or "X" in the open menu button */}
          {getDots(infoCardOpenIndex)}
        </OpenMenu>
        <OpenContact onClick={handleAboutCardClick}>
          {/* Use the getDots function to determine whether to display "•••" or "X" in the open contact button */}
          {getDots(aboutCardOpenIndex)}
        </OpenContact>
      </SliderArrowWrapper>
    </>
  );
};

export default SliderArrow;

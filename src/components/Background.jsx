import { React, useState } from "react";
import {
  MainWrapper,
  Stars,
  Stars2,
  Stars3,
  Toggle,
} from "../styles/Background.Styles";
import { AboutCard } from "../components/AboutCard";

// Background component for creating a dynamic starry sky background with toggle functionality
const Background = () => {
  // State for controlling the animation status of the stars
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the animation of the stars
  const animStarter = () => {
    setIsActive((current) => !current);
  };

  // State for controlling the scaleX of the Toggle component
  const [flipToggle, setFlipToggle] = useState(true);

  // Function to toggle the scaleX value of the Toggle component
  const fliper = () => {
    setFlipToggle((current) => !current);
  };

  // Render the Background component with animated stars and a Toggle button
  return (
    <>
      <MainWrapper>
        <Toggle
          onClick={() => {
            animStarter(); // Toggle the star animation
            fliper(); // Toggle the scaleX of the Toggle component
          }}
          scale={flipToggle ? "scaleX(-1);" : "none"} // Apply scaleX based on the flipToggle state
        />
        <Stars
          animation={
            isActive ? "animStar 50s linear infinite;" : "animStar 1s linear;" // Apply animation based on the isActive state
          }
        />
        <Stars2
          animation={
            isActive ? "animStar 100s linear infinite;" : "animStar 1s linear;" // Apply animation based on the isActive state
          }
        />
        <Stars3
          animation={
            isActive ? "animStar 150s linear infinite;" : "animStar 1s linear;" // Apply animation based on the isActive state
          }
        />
      </MainWrapper>
    </>
  );
};

export default Background;

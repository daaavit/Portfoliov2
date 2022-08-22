import { React, useState } from "react";
import {
  MainWrapper,
  Stars,
  Stars2,
  Stars3,
  Toggle,
} from "../styles/Background.Styles";
import { AboutCard } from "../components/AboutCard";

const Background = () => {
  const [isActive, setIsActive] = useState(false);

  const animStarter = () => {
    setIsActive((current) => !current);
  };

  const [flipToggle, setFlipToggle] = useState(true);

  const fliper = () => {
    setFlipToggle((current) => !current);
  };


  return (
    <>
      <MainWrapper>
        <Toggle
          onClick={() => {
            animStarter();
            fliper();
          }}
          scale={flipToggle ? "scaleX(-1);" : "none"}
        />
        <Stars
          animation={
            isActive ? "animStar 50s linear infinite;" : "animStar 1s linear;"
          }
        />
        <Stars2
          animation={
            isActive ? "animStar 100s linear infinite;" : "animStar 1s linear;"
          }
        />
        <Stars3
          animation={
            isActive ? "animStar 150s linear infinite;" : "animStar 1s linear;"
          }
        />
      </MainWrapper>
    </>
  );
};

export default Background;

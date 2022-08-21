import { React, useState, } from "react";
import {
  SliderArrowWrapper,
  OpenMenu,
  OpenContact,
} from "../styles/SliderArrow.Styles";
import InfoCardMobile from "./InfoCardMobile";
import AboutCardMobile from './AboutCardMobile'

const SliderArrow = () => {

  const [openIndex, setOpenIndex] = useState(0);
    const [secondOpenIndex, setSecondOpenIndex] = useState(0);

  const AddIndex = () => {
    setOpenIndex((prevIndex) => prevIndex + 1);
  };

  const AddSecondIndex = () => {
    setSecondOpenIndex((prevIndex) => prevIndex + 1);
  };

  const dots = () => (openIndex % 2 === 0 ? "•••" : 'X');
  
  const SecondDots = () => (secondOpenIndex % 2 === 0 ? "•••" : 'X');

  const InfoCard = () => {
    return(
      <InfoCardMobile />
    )
  }

  const AboutCard = () => {
    return(
      <AboutCardMobile />
    )
  }


  return (
    <>
    {openIndex % 2 === 1  ? <InfoCard /> : null }
    {secondOpenIndex % 2 === 1  ? <AboutCard /> : null }
    <SliderArrowWrapper>
      <OpenMenu onClick={() => { AddIndex();}}> {dots()} </OpenMenu>
      <OpenContact onClick={AddSecondIndex}>{SecondDots()}</OpenContact>
    </SliderArrowWrapper>
    </>
  );
};

export default SliderArrow;

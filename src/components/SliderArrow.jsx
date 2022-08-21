import { React, useState, } from "react";
import {
  SliderArrowWrapper,
  OpenMenu,
  OpenContact,
} from "../styles/SliderArrow.Styles";
import InfoCardMobile from "./InfoCardMobile";

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

  const ToBeShown = () => {
    return(
      <InfoCardMobile />
    )
  }


  return (
    <>
    {openIndex % 2 === 1  ? <ToBeShown /> : null }
    <SliderArrowWrapper>
      <OpenMenu onClick={() => { AddIndex();}}> {dots()} </OpenMenu>
      <OpenContact onClick={AddSecondIndex}> {SecondDots()} </OpenContact>
    </SliderArrowWrapper>
    </>
  );
};

export default SliderArrow;

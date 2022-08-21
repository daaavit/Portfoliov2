import React from "react";
import {
  InfoWrapper,
  ProfileImgArea,
  ProfileImage,
  OnlineDot,
  NameTitleArea,
  Name,
  Title,
  LocationAndJobArea,
  LocationBox,
  Location,
  ActualLocation,
  LangaugeArea,
  BoxForlanguage,
  OvalEngilsh,
  OvalGeorgian,
  OvalRussian,
  TextForSvg,
  Language
} from "../styles/InfoCardMobile.Styles";
import ProfilePic from "../assets/mypic.png";
import SkillsBox from "./SkillsBox";
const InfoCardMobile = () => {
  return (
    <InfoWrapper>
      <ProfileImgArea>
        <ProfileImage src={ProfilePic} />
        <OnlineDot />
      </ProfileImgArea>
      <NameTitleArea>
        <Name>Davit Khutsishvili</Name>
        <Title>Full-Stack Developer</Title>
      </NameTitleArea>
      <LocationAndJobArea>
        <LocationBox>
          <Location>Location:</Location>
          <ActualLocation>New York</ActualLocation>
        </LocationBox>
        <LocationBox>
          <Location>Job-type:</Location>
          <ActualLocation>on-site, remote</ActualLocation>
        </LocationBox>
      </LocationAndJobArea>
      <SkillsBox />
      <LangaugeArea>
        <BoxForlanguage>
          <OvalEngilsh />
          <Language>English</Language>
        </BoxForlanguage>
        <BoxForlanguage>
          <OvalGeorgian />
          <Language>Georgian</Language>
        </BoxForlanguage>
        <BoxForlanguage>
          <OvalRussian />
          <Language>Russian</Language>
        </BoxForlanguage>
      </LangaugeArea>
    </InfoWrapper>
  );
};

export default InfoCardMobile;

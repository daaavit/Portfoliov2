import { React, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  AboutWrapper,
  ResumeBox,
  ResumeArea,
  TextForResume,
  ActualTextResume,
  FileName,
  LastUpdated,
  EmailHeadingArea,
  FormWrapper,
  Input,
  StyledTextArea,
  SendButton,
  Heading,
  SocialArea,
  GitBox,
  LinkedinBox,
  GitHubIcon,
  GitHubText,
  LinkedInIcon,
  LinkedinText,
} from "../styles/AboutCard.Styles";
import Background from "../components/Background";

const AboutCard = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t2l3znj",
        "template_ba9y6tb",
        e.target,
        "yUa38DGZ7vuChx03r"
      )
      .then(
        (result) => {
          window.alert(`Success Status: ${result.text}`);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <AboutWrapper>
      <ResumeBox
        onClick={(evnet) =>
          window.open(
            "https://docs.google.com/document/d/1A0hGOyUo39QmO9JB3YYysTYEofvrcv7e/edit?usp=sharing&ouid=109933782849656790928&rtpof=true&sd=true"
          )
        }
      >
        <ResumeArea>
          <ActualTextResume>RESUME</ActualTextResume>
        </ResumeArea>
        <TextForResume>
          <FileName>Davit_Resume.DOCX</FileName>
          <LastUpdated>Last updated on 8/18/2022</LastUpdated>
        </TextForResume>
      </ResumeBox>
      <EmailHeadingArea>
        <Heading>Get In Touch </Heading>
      </EmailHeadingArea>
      <FormWrapper onSubmit={sendEmail}>
        <Input type="text" id="fname" name="fname" placeholder="Full Name" />
        <Input
          type="text"
          id="companyname"
          name="companyname"
          placeholder="Company Name *"
        />
        <Input
          type="tel"
          id="workphone"
          name="workphone"
          //   pattern="[0-9]{3}-[0-9]{3}-[0-9]"
          placeholder="Work Phone"
        />
        <Input type="email" id="email" name="email" placeholder="Email *" />
        <StyledTextArea
          id="message"
          name="message"
          rows="8"
          cols="50"
          placeholder="Your Message..."
        />
        <SendButton>Send</SendButton>
      </FormWrapper>
      <SocialArea>
        <GitBox onClick={(evnet) => window.open("https://github.com/daaavit")}>
          <GitHubIcon />
          <GitHubText>GitHub</GitHubText>
        </GitBox>
        <LinkedinBox
          onClick={(evnet) =>
            window.open("https://www.linkedin.com/in/daavit/")
          }
        >
          <LinkedInIcon />
          <LinkedinText>LinkedIn</LinkedinText>
        </LinkedinBox>
      </SocialArea>
    </AboutWrapper>
  );
};

export default AboutCard;

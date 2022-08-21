import React from "react";
import {
  PostBox,
  PostWrapper,
  PicWithDotArea,
  ProfileAndNameBox,
  ThreeDotBox,
  ProfileImgArea,
  ProfileImage,
  NameAndTitleBox,
  Name,
  Title,
  PostPastTimeWithEarthBox,
  Planet,
  Hours,
  Dots,
  TextArea,
  LikeAndCommentArea,
  AmountOfLikesBox,
  AmountOfCommentBox,
  LikeIcons,
  LikeAmount,
  Celebrate,
  ILike,
  Love,
  Action,
  LikeIcon,
  LikeText,
  ShareText,
  CommentText,
  SendText,
  CommentIcon,
  ShareIcon,
  SendIcon,
  ProjectImg,
  TextAndProjectBox,
  LikeBox,
  CommentBox,
  ShareBox,
  SendBox,
} from "../styles/ProjectPostThree.Styles";
import ProfilePic from "../assets/mypic.png";
import Clap from "../assets/Clap.svg";
import Like from "../assets/Thumbs.svg";
import Heart from "../assets/Heart.svg";
import calculator from "../assets/Calculator.png";

const ProjectPostTwo = () => {
  return (
    <PostWrapper>
      <PicWithDotArea>
        <ProfileAndNameBox>
          <ProfileImgArea>
            <ProfileImage src={ProfilePic} />
          </ProfileImgArea>
          <NameAndTitleBox>
            <Name>Davit Khutsishvili</Name>
            <Title>Full Stack Developer</Title>
            <PostPastTimeWithEarthBox>
              <Hours>8h• </Hours>
              <Planet />
            </PostPastTimeWithEarthBox>
          </NameAndTitleBox>
        </ProfileAndNameBox>
        <ThreeDotBox>
          <Dots>• • •</Dots>
        </ThreeDotBox>
      </PicWithDotArea>
      <TextAndProjectBox>
        <TextArea>
          Created an easy-to-use React app car loan calculator that helps users
          create a plan before purchasing a vehicle. Utilized Javascript logic
          and styled-components with an eye towards user friendly UI/UX Employed
          React hooks to maintain state.
        </TextArea>
        <ProjectImg
          src={calculator}
          onClick={(e) => window.open("https://calculator-ochre-five.vercel.app/")}
        />
      </TextAndProjectBox>
      <LikeAndCommentArea>
        <AmountOfLikesBox>
          <LikeIcons>
            <ILike src={Like} />
            <Celebrate src={Clap} />
            <Love src={Heart} />
          </LikeIcons>
          <LikeAmount>14,340</LikeAmount>
        </AmountOfLikesBox>
        <AmountOfCommentBox>525 comments • 341 share</AmountOfCommentBox>
      </LikeAndCommentArea>
      <Action>
        <LikeBox>
          <LikeIcon /> <LikeText>Like</LikeText>
        </LikeBox>
        <CommentBox>
          <CommentIcon /> <CommentText>Comment</CommentText>
        </CommentBox>
        <ShareBox>
          <ShareIcon /> <ShareText>Share</ShareText>
        </ShareBox>
        <SendBox>
          <SendIcon /> <SendText>Send</SendText>
        </SendBox>
      </Action>
    </PostWrapper>
  );
};

export default ProjectPostTwo;

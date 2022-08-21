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
} from "../styles/ProjectPostTwo.Styles";
import ProfilePic from "../assets/mypic.png";
import Clap from "../assets/Clap.svg";
import Like from "../assets/Thumbs.svg";
import Heart from "../assets/Heart.svg";
import LiftProject from "../assets/Liftbruh.png";

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
              <Hours>5h• </Hours>
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
          Created a gym website using React where new users can easily find
          nearby gyms pick a plan and sign up for it.
        </TextArea>
        <ProjectImg
          src={LiftProject}
          onClick={(e) => window.open("https://lift-bruh.vercel.app/")}
        />
      </TextAndProjectBox>
      <LikeAndCommentArea>
        <AmountOfLikesBox>
          <LikeIcons>
            <ILike src={Like} />
            <Celebrate src={Clap} />
            <Love src={Heart} />
          </LikeIcons>
          <LikeAmount>7,872</LikeAmount>
        </AmountOfLikesBox>
        <AmountOfCommentBox>120 comments • 52 share</AmountOfCommentBox>
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

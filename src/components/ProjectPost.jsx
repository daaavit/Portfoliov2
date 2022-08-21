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
  SendBox

} from "../styles/ProjectPost.Styles";
import ProfilePic from "../assets/mypic.png";
import Clap from "../assets/Clap.svg";
import Like from "../assets/Thumbs.svg";
import Heart from "../assets/Heart.svg";
import Project from "../assets/MacCertify.png";

const ProjectPost = () => {
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
              <Hours>3h• </Hours>
              <Planet />
            </PostPastTimeWithEarthBox>
          </NameAndTitleBox>
        </ProfileAndNameBox>
        <ThreeDotBox>
          <Dots>• • •</Dots>
        </ThreeDotBox>
      </PicWithDotArea>
      <TextAndProjectBox >
        <TextArea>
          Here is my one of lastest project you can take look here:
          CertifyMyAuto.com Created React website for PPI vehicle
          inspection where licensed mechanics and buyers can connect.
        </TextArea>
        <ProjectImg src={Project} onClick={(e) => window.open('https://certifymyauto.com')} />
      </TextAndProjectBox>
      <LikeAndCommentArea>
        <AmountOfLikesBox>
          <LikeIcons>
            <ILike src={Like} />
            <Celebrate src={Clap} />
            <Love src={Heart} />
          </LikeIcons>
          <LikeAmount>18,073</LikeAmount>
        </AmountOfLikesBox>
        <AmountOfCommentBox>1429 comments • 320 share</AmountOfCommentBox>
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

export default ProjectPost;

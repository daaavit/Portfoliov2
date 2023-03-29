import { React, useState } from "react";
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
} from "../styles/ProjectVinDigits.Styles";
import ProfilePic from "../assets/mypic.png";
import Clap from "../assets/Clap.svg";
import Like from "../assets/Thumbs.svg";
import Heart from "../assets/Heart.svg";
import VinDigits from "../assets/vindigitsShow.png";

const ProjectVinDigits = () => {
  const [likeAmount, setLikeAmount] = useState(4872);

  const likeAmountHandler = () => {
    setLikeAmount(likeAmount + 1);
  };

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
          The ultimate vehicle history report for only $4.99 at Vindigits.com!
          Vindigits is lightning-fast platform that delivers reliable and
          detailed reports, providing you with all the information you need to
          make an informed purchase.
        </TextArea>
        <ProjectImg
          src={VinDigits}
          onClick={(e) => window.open("https://www.vindigits.com/")}
        />
      </TextAndProjectBox>
      <LikeAndCommentArea>
        <AmountOfLikesBox>
          <LikeIcons>
            <ILike src={Like} />
            <Celebrate src={Clap} />
            <Love src={Heart} />
          </LikeIcons>
          <LikeAmount>{likeAmount.toLocaleString("en-US")}</LikeAmount>
        </AmountOfLikesBox>
        <AmountOfCommentBox>120 comments • 52 share</AmountOfCommentBox>
      </LikeAndCommentArea>
      <Action>
        <LikeBox onClick={likeAmountHandler}>
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

export default ProjectVinDigits;

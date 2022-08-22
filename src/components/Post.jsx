import { React, useState, useEffect } from "react";
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
  MainDots,
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
  CommentIcon,
  ShareIcon,
  SendIcon,
  LikeBox,
  CommentBox,
  ShareBox,
  SendBox,
  CommentText,
  ShareText,
  SendText,
} from "../styles/Post.Styles";
import ProfilePic from "../assets/mypic.png";
import Clap from "../assets/Clap.svg";
import Like from "../assets/Thumbs.svg";
import Heart from "../assets/Heart.svg";
import ProjectPost from "../components/ProjectPost";
import ProjectPostTwo from "../components/ProjectPostTwo";
import ProjectPostThree from "../components/ProjectPostThree";
import Typewriter from "typewriter-effect";
import SliderArrow from "../components/SliderArrow";

const Post = () => {
  
  const useWindowSize = () => {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
      const resizeHandler = () => {
        setSize([window.innerHeight, window.innerWidth]);
      };
      window.addEventListener("resize", resizeHandler);
      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }, []);
    return size;
  };

  const [height, width] = useWindowSize();

  const [likeAmount, setLikeAmount] = useState(11033)

  const likeAmountHandler = () => {
    setLikeAmount(likeAmount + 1)
  }

  console.log("Hey Mr.Inspector :) If you have a questions please reach me at daavit@yahoo.com")

  return (
    <PostBox>
     {width < 750 ? <SliderArrow/> : null}
      <PostWrapper>
        <PicWithDotArea>
          <ProfileAndNameBox>
            <ProfileImgArea>
              <ProfileImage src={ProfilePic}  />
            </ProfileImgArea>
            <NameAndTitleBox>
              <Name>Davit Khutsishvili</Name>
              <Title>Full Stack Developer</Title>
              <PostPastTimeWithEarthBox>
                <Hours>1h• </Hours>
                <Planet />
              </PostPastTimeWithEarthBox>
            </NameAndTitleBox>
          </ProfileAndNameBox>
          <ThreeDotBox>
            <MainDots>• • •</MainDots>
          </ThreeDotBox>
        </PicWithDotArea>
        <TextArea>
          <Typewriter
            onInit={(typewriter, speed) => {
              typewriter
                .typeString(
                  " Hi, I’m a full-stack web developer specializing in building and designing web platforms from scratch. Currently I’m open for any opportunity which includes full time job or side projects for small or big business. Please do not hesitate and contact me for any questions its FREE:)"
                )
                .pauseFor(0)
                .start();
            }}
            options={{
              delay: 20,
            }}
          />
        </TextArea>
        <LikeAndCommentArea>
          <AmountOfLikesBox>
            <LikeIcons>
              <ILike src={Like} />
              <Celebrate src={Clap} />
              <Love src={Heart} />
            </LikeIcons>
            <LikeAmount>{likeAmount.toLocaleString('en-US')}</LikeAmount>
          </AmountOfLikesBox>
          <AmountOfCommentBox>790 comments • 120 share</AmountOfCommentBox>
        </LikeAndCommentArea>
        <Action>
          <LikeBox  onClick={likeAmountHandler}>
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
      <ProjectPost />
      <ProjectPostTwo />
      <ProjectPostThree />
    </PostBox>
  );
};

export default Post;

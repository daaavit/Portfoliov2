import { React, useState, useEffect, useContext } from "react";
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
  CommentingBox,
  CommentingArea,
} from "../styles/Post.Styles";
import ProfilePic from "../assets/mypic.png";
import Clap from "../assets/Clap.svg";
import Like from "../assets/Thumbs.svg";
import Heart from "../assets/Heart.svg";
import ProjectPost from "../components/ProjectPost";
import ProjectPostTwo from "../components/ProjectPostTwo";
import ProjectPostThree from "../components/ProjectPostThree";
import ProjectVinDigits from "../components/ProjectVinDigits";
import Typewriter from "typewriter-effect";
import SliderArrow from "../components/SliderArrow";
import { OpenCommentContext, ActualUserComments } from "../context/context";
import CheckOutUserComments from "../components/CheckOutUserComments";

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
  const { openComment, setOpenComment } = useContext(OpenCommentContext);
  const [likeAmount, setLikeAmount] = useState(11033);
  const [commentsQuantity, setCommentsQuantity] = useState(790);
  const {userComment, setUserComment} = useContext(ActualUserComments);
  const [seeComments, setSeeComments] = useState(false);

  const likeAmountHandler = () => {
    setLikeAmount(likeAmount + 1);
  };

  const userCommentHandler = (e) => {
    setUserComment(e.target.value);
  };

  const CommentingHandler = () => {
    setOpenComment(true);
    setSeeComments(false);
  };

  const handleCommentKeyDown = (e) => {
    if (e.key === "Enter") {
      if (userComment.trim() !== "") {
        setOpenComment(false);
        setCommentsQuantity(commentsQuantity + 1);
        userComment("");
      }
    }
  };

  const seeCommentsHandler = () => {
    setSeeComments(!seeComments);
    setOpenComment(false);
  };


  console.log(
    "Hey Mr.Inspector :) If you have a questions please reach me at daavit@yahoo.com"
  );

  return (
    <PostBox>
      {width < 750 ? <SliderArrow /> : null}
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
                  " Hi, thank you for your interest in my services. I specialize in full-stack web development and have experience building and designing custom web applications from the ground up. If you are interested in discussing potential opportunities, please feel free to reach out to me with any questions or inquiries. I am available for both full-time jobs and side projects for businesses of all sizes. Thank you!"
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
            <LikeAmount>{likeAmount.toLocaleString("en-US")}</LikeAmount>
          </AmountOfLikesBox>
          <AmountOfCommentBox onClick={seeCommentsHandler}>
            {commentsQuantity} comments • 120 share
          </AmountOfCommentBox>
        </LikeAndCommentArea>
        {openComment ? (
          <CommentingBox>
            <CommentingArea
              onKeyDown={handleCommentKeyDown}
              onChange={userCommentHandler}
              placeholder="  Write a comment..."
            ></CommentingArea>
          </CommentingBox>
        ) : seeComments ? (
          <CheckOutUserComments />
        ) : (
          <Action>
            <LikeBox onClick={likeAmountHandler}>
              <LikeIcon /> <LikeText>Like</LikeText>
            </LikeBox>
            <CommentBox>
              <CommentIcon />{" "}
              <CommentText onClick={CommentingHandler}>Comment</CommentText>
            </CommentBox>
            <ShareBox>
              <ShareIcon /> <ShareText>Share</ShareText>
            </ShareBox>
            <SendBox>
              <SendIcon /> <SendText>Send</SendText>
            </SendBox>
          </Action>
        )}
      </PostWrapper>
      <ProjectVinDigits />
      <ProjectPost />
      <ProjectPostTwo />
      <ProjectPostThree />
    </PostBox>
  );
};

export default Post;

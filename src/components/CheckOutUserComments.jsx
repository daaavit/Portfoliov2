import React, { useContext } from "react";
import {
  MainWrapper,
  CommentData,
  UserCommentTImeBox,
  UserIcon,
  UserIconAndUserNameBox,
  UserName,
  UserTimeStamp,
  UserTimeAndCommentBox,
} from "../styles/checkOutUserComments.Styles";
import { ActualUserComments } from "../context/context";

const CheckOutUserComments = () => {

  const randomUser = Math.floor(Math.random() * 1000000);
  const { userComment } = useContext(ActualUserComments);
  const timestamp = Date.now();
  const formattedTime = new Date(timestamp).toLocaleString();
  return (
    <MainWrapper>
      <UserCommentTImeBox>
        <UserIconAndUserNameBox>
          <UserIcon />
          <UserName>User{randomUser}</UserName>
        </UserIconAndUserNameBox>
        <UserTimeAndCommentBox>
        <CommentData>{userComment}</CommentData>
      <UserTimeStamp>{formattedTime}</UserTimeStamp>
      </UserTimeAndCommentBox>
      </UserCommentTImeBox>
    </MainWrapper>
  );
};

export default CheckOutUserComments;

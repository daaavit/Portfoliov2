import React, { useContext } from "react";
import {
  MainWrapper,
  CommentData,
  UserCommentTImeBox,
  UserIcon,
  UserIconAndUserNameBox,
  UserName
} from "../styles/checkOutUserComments.Styles";
import { ActualUserComments } from "../context/context";

const CheckOutUserComments = () => {
  const randomUser = Math.floor(Math.random() * 1000000);
  const { userComment } = useContext(ActualUserComments);
  return (
    <MainWrapper>
      <UserCommentTImeBox>
        <UserIconAndUserNameBox>
          <UserIcon />
          <UserName>User{randomUser}</UserName>
        </UserIconAndUserNameBox>
        <CommentData>{userComment}</CommentData>
      </UserCommentTImeBox>
    </MainWrapper>
  );
};

export default CheckOutUserComments;

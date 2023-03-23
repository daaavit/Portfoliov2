import React, { useContext } from "react";
import {
  MainWrapper,
  CommentData,
} from "../styles/checkOutUserComments.Styles";
import { ActualUserComments } from "../context/context";

const CheckOutUserComments = () => {
  const { userComment } = useContext(ActualUserComments);
  return (
    <MainWrapper>
      <CommentData>{userComment}</CommentData>
    </MainWrapper>
  );
};

export default CheckOutUserComments;

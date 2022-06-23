import React from "react";
import { Avatar, Comment } from "antd";

import "./styles.scss";
import ActionComment from "./ActionComment";

const CustomComment = ({ children }) => {
  return (
    <>
      <Comment
        className="custom-comment"
        actions={[
          <span key="comment-nested-reply-to" className="custom-comment__date">
            21-06-2022
          </span>,
          <ActionComment />,
        ]}
        author={<h4 className="custom-comment__author">Han Solo</h4>}
        avatar={
          <Avatar
            className="custom-comment__avatar"
            src="https://dl26yht2ovo33.cloudfront.net/public/system/users/images/000/522/316/original/ape1.png"
            alt="Han Solo"
          />
        }
        content={
          <p className="custom-comment__content">
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure).
          </p>
        }
      >
        {children}
      </Comment>
    </>
  );
};

export default CustomComment;

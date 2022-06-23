import React from "react";
import { Avatar, Comment, Tag, Divider } from "antd";

import "./styles.scss";
import ActionComment from "./ActionComment";
import audioMp3 from "../../asset/audio/audio.mp3";

const AudioComment = ({ children }) => {
  return (
    <>
      <Comment
        className="audio-comment"
        actions={[
          <span key="comment-nested-reply-to" className="audio-comment__date">
            <Tag color="processing" className="audio-comment__tag">
              RA EN V2e
            </Tag>
            <Tag color="processing" className="audio-comment__tag">
              Score Info <span>47/50</span>
            </Tag>
          </span>,
          <ActionComment />,
        ]}
        author={
          <h4 className="audio-comment__author">
            James Grayson -{" "}
            <span className="audio-comment__date">21-06-2022</span>
          </h4>
        }
        avatar={
          <Avatar
            className="audio-comment__avatar"
            src="https://dl26yht2ovo33.cloudfront.net/public/system/users/images/001/026/173/original/ape3.png"
            alt="James Grayson"
          />
        }
        content={<audio controls src={audioMp3} type="audio/mpeg" />}
      ></Comment>
      <Divider />
    </>
  );
};

export default AudioComment;

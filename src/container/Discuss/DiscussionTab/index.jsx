import React from "react";
import { Divider } from "antd";

import CustomComment from "../../../component/Comment";

const DiscussionTab = () => {
  return (
    <>
      <CustomComment>
        <CustomComment />
      </CustomComment>
      <Divider />
      <CustomComment>
        <CustomComment />
        <CustomComment />
      </CustomComment>
    </>
  );
};

export default DiscussionTab;

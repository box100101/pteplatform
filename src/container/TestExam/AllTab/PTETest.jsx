import React from "react";
import { Tag } from "antd";
import { TagFilled } from "@ant-design/icons";

const PTETest = () => {
  return (
    <div className="pte-test">
      <div className="pte-test__left">
        <p>#780 Education</p>
        <Tag className="pte-test__tag">#780</Tag>
      </div>
      <div className="pte-test__right">
        <Tag className="pte-test__tag">Undone</Tag>
        <TagFilled className="pte-test__tag-icon" />
      </div>
    </div>
  );
};

export default PTETest;

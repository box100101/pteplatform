import React from "react";
import { Divider, Tabs } from "antd";

import CustomTab from "../../component/Tab";
import DiscussionTab from "./DiscussionTab";
import BoardTab from "./BoardTab";
import MeTab from "./MeTab";
import {
  MessageOutlined,
  UnorderedListOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

const Discuss = () => {
  return (
    <div>
      <Divider orientation="left">Discussion</Divider>
      <CustomTab>
        <TabPane
          tab={
            <span>
              <MessageOutlined />
              Disscussion
            </span>
          }
          key="1"
        >
          <DiscussionTab />
        </TabPane>
        <TabPane
          tab={
            <span>
              <UnorderedListOutlined />
              Board
            </span>
          }
          key="2"
        >
          <BoardTab />
        </TabPane>
        <TabPane
          tab={
            <span>
              <FileDoneOutlined />
              Me
            </span>
          }
          key="3"
        >
          <MeTab />
        </TabPane>
        {/* <DiscussionTab />
        <BoardTab />
        <MeTab /> */}
      </CustomTab>
    </div>
  );
};

export default Discuss;

import React from "react";
import { Tabs } from "antd";

import PageHeader from "../../component/PageHeader";
import AllTab from "./AllTab";

const { TabPane } = Tabs;

const TestExam = () => {
  return (
    <div>
      <PageHeader
        isDrawer={true}
        logo="https://dl26yht2ovo33.cloudfront.net/public/admin/practice_assets/q_images/rs_s_ai.png"
        title="Repeat Sentence"
        chip="Study Guide"
        content="You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once."
      />
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="All" key="1" size="large">
            <AllTab />
          </TabPane>
          <TabPane tab="Week P" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Jun P" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default TestExam;

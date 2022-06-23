import React, { useState } from "react";
import "./App.scss";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Content from "./component/Content";
import PageHeader from "./component/PageHeader";
import Number from "./component/Number";
import Discuss from "./container/Discuss";
import CustomDrawer from "./component/Drawer";
import TestExam from "./container/TestExam";

import { Container } from "@mui/material";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";


function App() {
  const [visible, setVisible] = useState(false);

  const showDefaultDrawer = () => {
    setVisible(true);
  };
  return (
    <div className="app">
      <Header />
      {/* <Banner /> */}
      <Container maxWidth="lg">
        <PageHeader
          logo="https://dl26yht2ovo33.cloudfront.net/public/admin/practice_assets/q_images/rs_s_ai.png"
          title="Repeat Sentence"
          chip="Study Guide"
          content="You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once."
        />
        <Number number={321} content="loremsss" />
      <Content />
        <Discuss />
      </Container>
      <Button
        shape="circle"
        icon={<LeftOutlined />}
        onClick={showDefaultDrawer}
        className="app_open-drawer"
      />
      <CustomDrawer visible={visible} setVisible={setVisible}>
        <TestExam />
      </CustomDrawer>
      <Footer />
    </div>
  );
}

export default App;

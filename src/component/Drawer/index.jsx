import React from "react";
import { Drawer, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

import "./styles.scss";

const CustomDrawer = ({ visible, setVisible, children }) => {
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Drawer
        placement="right"
        width="70%"
        onClose={onClose}
        visible={visible}
        closable={false}
        className="custom-drawer"
      >
        <div className="custom-drawer__container">{children}</div>
        <Button
          shape="circle"
          icon={<RightOutlined />}
          className="custom-drawer__close"
        />
      </Drawer>
    </>
  );
};

export default CustomDrawer;

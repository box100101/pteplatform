import React from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Container } from "@mui/material";

import "./styles.scss";

const MegaMenu = () => {
  return (
    <div className="mega-menu">
      <Container maxWidth="lg" className="mega-menu__container">
        <Menu.ItemGroup title="Item Group">
          <Menu.Item key="four" icon={<AppstoreOutlined />}>
            Navigation Four
          </Menu.Item>
          <Menu.Item key="five" icon={<AppstoreOutlined />}>
            Navigation Five
          </Menu.Item>
          <Menu.Item key="six" icon={<AppstoreOutlined />}>
            Navigation Six
          </Menu.Item>
          <Menu.Item key="seven" icon={<AppstoreOutlined />}>
            Navigation Seven
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item Group">
          <Menu.Item key="four" icon={<AppstoreOutlined />}>
            Navigation Four
          </Menu.Item>
          <Menu.Item key="five" icon={<AppstoreOutlined />}>
            Navigation Five
          </Menu.Item>
          <Menu.Item key="six" icon={<AppstoreOutlined />}>
            Navigation Six
          </Menu.Item>
          <Menu.Item key="seven" icon={<AppstoreOutlined />}>
            Navigation Seven
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item Group">
          <Menu.Item key="four" icon={<AppstoreOutlined />}>
            Navigation Four
          </Menu.Item>
          <Menu.Item key="five" icon={<AppstoreOutlined />}>
            Navigation Five
          </Menu.Item>
          <Menu.Item key="six" icon={<AppstoreOutlined />}>
            Navigation Six
          </Menu.Item>
          <Menu.Item key="seven" icon={<AppstoreOutlined />}>
            Navigation Seven
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item Group">
          <Menu.Item key="four" icon={<AppstoreOutlined />}>
            Navigation Four
          </Menu.Item>
          <Menu.Item key="five" icon={<AppstoreOutlined />}>
            Navigation Five
          </Menu.Item>
          <Menu.Item key="six" icon={<AppstoreOutlined />}>
            Navigation Six
          </Menu.Item>
          <Menu.Item key="seven" icon={<AppstoreOutlined />}>
            Navigation Seven
          </Menu.Item>
        </Menu.ItemGroup>
      </Container>
    </div>
  );
};

export default MegaMenu;

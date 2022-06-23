import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Menu } from "antd";
import "antd/dist/antd.css";

import MegaMenu from "../MegaMenu";
import "./styles.scss";

const AppbarLink = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Menu
          mode="horizontal"
          selectable={false}
          className="appbar-link__menu"
        >
          <Menu.Item key="Home">Home</Menu.Item>
          <Menu.SubMenu key="SubMenu" title="PTE Practice">
            <MegaMenu />
          </Menu.SubMenu>
          <Menu.Item key="Materials">Materials</Menu.Item>
          <Menu.Item key="Course">Course</Menu.Item>
          <Menu.Item key="Circle">Circle</Menu.Item>
          <Menu.Item key="App">App</Menu.Item>
        </Menu>
      </Box>
    </>
  );
};

export default AppbarLink;

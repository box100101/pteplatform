import React from "react";
import { Dropdown, Menu, Space, Button } from "antd";
import { FlagFilled, SmileOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import "./styles.scss";

const menu = (
  <Menu
    className="number-menu"
    items={[
      {
        key: "1",
        label: "Orange",
        icon: (
          <FlagFilled
            style={{
              fontSize: 23,
              color: "rgb(255, 204, 0)",
              marginRight: "15px",
            }}
          />
        ),
      },
      {
        key: "2",
        label: "Purple",
        icon: (
          <FlagFilled
            style={{
              fontSize: 23,
              color: "rgb(178, 110, 255)",
              marginRight: "15px",
            }}
          />
        ),
      },
      {
        key: "3",
        label: "Green",
        icon: (
          <FlagFilled
            style={{
              fontSize: 23,
              color: "rgb(157, 255, 72)",
              marginRight: "15px",
            }}
          />
        ),
      },
      {
        key: "4",
        label: "Red",
        icon: (
          <FlagFilled
            style={{
              fontSize: 23,
              color: "rgb(255, 102, 102)",
              marginRight: "15px",
            }}
          />
        ),
      },
    ]}
  />
);

const Number = ({ number, content }) => {
  return (
    <div className="number-container">
      <div className="number-container__left">
        <p>{`#${number} ${content}`}</p>
      </div>
      <div className="number-container__right">
        <Dropdown
          overlay={menu}
          className="number-container__right-dropdown"
          placement="bottom"
        >
          <Space>
            <FlagFilled style={{ fontSize: 23, color: "rgb(204, 204, 204)" }} />
          </Space>
        </Dropdown>
        <Button className="number-container__right-btn">Tested(144)</Button>
      </div>
    </div>
  );
};

export default Number;

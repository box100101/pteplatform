import React from "react";
import { DownOutlined, SwapOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space } from "antd";

import "./styles.scss";

const menu = (
  <Menu
    // onClick={handleMenuClick}
    items={[
      {
        label: "menu item",
        key: "1",
        // icon: <UserOutlined />,
      },
      {
        label: "menu item",
        key: "2",
        // icon: <UserOutlined />,
      },
      {
        label: "menu item",
        key: "3",
        // icon: <UserOutlined />,
      },
    ]}
  />
);

const DropdownAction = () => {
  return (
    <div className="dropdown-action">
      <Dropdown overlay={menu} className="dropdown-action__btn-new">
        <Button>
          <Space>
            New
            <SwapOutlined className="dropdown-action__new-icon" />
          </Space>
        </Button>
      </Dropdown>
      <Dropdown overlay={menu} className="dropdown-action__btn">
        <Button>
          <Space>
            Mask
            <DownOutlined className="dropdown-action__icon" />
          </Space>
        </Button>
      </Dropdown>
      <Dropdown overlay={menu} className="dropdown-action__btn">
        <Button>
          <Space>
            Prac status
            <DownOutlined className="dropdown-action__icon" />
          </Space>
        </Button>
      </Dropdown>
      <Dropdown overlay={menu} className="dropdown-action__btn">
        <Button>
          <Space>
            Shadowing
            <DownOutlined className="dropdown-action__icon" />
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
};

export default DropdownAction;

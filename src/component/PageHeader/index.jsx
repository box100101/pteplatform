import React from "react";
import { Button } from "antd";
import { AlipayOutlined } from "@ant-design/icons";

import "./styles.scss";

const PageHeader = ({ logo, title, chip, content, isDrawer = false }) => {
  return (
    <>
      <div className="page-header">
        <div className="page-header__logo">
          <img src={logo} alt="page-header-logo" />
        </div>
        <div className="page-header__right">
          <div className="page-header__title">
            <h2>{title}</h2>
            {isDrawer || (
              <Button icon={<AlipayOutlined />} className="page-header__button">
                {chip}
              </Button>
            )}
          </div>
          {isDrawer || (
            <div className="page-header__content">
              <p>{content}</p>
            </div>
          )}
        </div>
      </div>
      {/* <Divider className="page-header__hr" /> */}
    </>
  );
};

export default PageHeader;

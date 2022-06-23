import React from "react";
import { Tabs } from "antd";

const onChange = (key) => {
  console.log(key);
};

const CustomTab = ({ children }) => {
  return (
    <div>
      <Tabs onChange={onChange} type="card">
        {children}
      </Tabs>
    </div>
  );
};

export default CustomTab;

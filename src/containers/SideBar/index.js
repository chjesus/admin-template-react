import React from "react";
import { useSelector } from "react-redux";
import { Layout } from "antd";

import SiderContent from "./SiderContent";

const { Sider } = Layout;

function SideBar() {
  const { collapsed } = useSelector(({ settings }) => settings);

  return (
    <Sider
      collapsed={collapsed}
      className={`admin-app-sider admin-app-sider-${
        !collapsed ? "collapsed" : null
      }`}
    >
      <SiderContent />
    </Sider>
  );
}

export default SideBar;

import React from "react";

import { Link } from "react-router-dom";
import { collapsedMenu } from "../../redux/actions/Settings";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";

function SideBarLogo() {
  const dispatch = useDispatch();
  const { collapsed } = useSelector(({ settings }) => settings);

  const handleCollapsedMenu = () => {
    dispatch(collapsedMenu(!collapsed));
  };

  return (
    <div className="admin-app-sider-header">
      <Button type="primary" className="adm-icon" onClick={handleCollapsedMenu}>
        <MenuFoldOutlined className="ad-font-s-30" />
      </Button>
      {!collapsed ? (
        <Link to="/" className="adm-logo">
          Admin Panel
        </Link>
      ) : null}
    </div>
  );
}

export default SideBarLogo;

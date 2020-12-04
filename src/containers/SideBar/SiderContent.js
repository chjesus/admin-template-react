import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu } from "antd";
import {
  DashboardOutlined,
  SettingOutlined,
  ShopOutlined,
} from "@ant-design/icons";

import SideBarLogo from "./SideBarLogo";
import SideBarPerfil from "./SideBarPerfil";
import CustomScrollbars from "../../utils/CustomScrollbars";

const { SubMenu } = Menu;

function SiderContent() {
  const location = useLocation();

  return (
    <>
      <SideBarLogo />
      <SideBarPerfil />
      <CustomScrollbars style={{ height: "calc(100vh - 64px - 169px)" }}>
        <Menu
          selectedKeys={[location.pathname]}
          mode="inline"
          theme="dark"
          className="admin-app-sider-menu"
        >
          <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="/shops" icon={<ShopOutlined />}>
            <Link to="/shops">Tiendas</Link>
          </Menu.Item>
          <SubMenu
            key="/config"
            title="Configuracion"
            icon={<SettingOutlined />}
          >
            <Menu.Item key="/config/city">
              <Link to="/config/city">Ciudades</Link>
            </Menu.Item>
            <Menu.Item key="/config/rols">
              <Link to="/config/rols">Roles</Link>
            </Menu.Item>
            <Menu.Item key="/config/users">
              <Link to="/config/users">Usuarios</Link>
            </Menu.Item>
            <Menu.Item key="/config/permits">
              <Link to="/config/permits">Permisos</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </CustomScrollbars>
    </>
  );
}

export default SiderContent;

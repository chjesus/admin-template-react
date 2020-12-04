import React from "react";

import { Popover } from "antd";
import { useSelector } from "react-redux";
function SideBarPerfil() {
  const { collapsed } = useSelector(({ settings }) => settings);
  const { infoUser } = useSelector(({ auth }) => auth);

  const {
    name,
    access: { username },
  } = infoUser;

  const content = (
    <ul className="m-0">
      <li>My Account</li>
      <li>Logout</li>
    </ul>
  );
  return (
    <div className="admin-app-sider-profile pt-2 pb-2">
      <Popover content={content} trigger="click" placement="right">
        <figure className="admin-app-sider-profile_img">
          <img
            src="https://randomuser.me/api/portraits/men/96.jpg"
            alt="profile"
          />
        </figure>
      </Popover>
      {!collapsed ? (
        <div>
          <h1 className="admin-app-sider-profile_name">{name}</h1>
          <h2 className="admin-app-sider-profile_rol">{username}</h2>
        </div>
      ) : null}
    </div>
  );
}

export default SideBarPerfil;

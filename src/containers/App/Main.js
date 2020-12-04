import React from "react";
import { useRouteMatch } from "react-router-dom";

import { Layout } from "antd";

import App from "../../routes";
import SideBar from "../SideBar";
import TopBar from "../TopBar";

const { Content, Footer } = Layout;
function Main() {
  const match = useRouteMatch();

  return (
    <Layout style={{ height: "100vh" }}>
      <SideBar />
      <Layout>
        <TopBar />
        <Content>
          <App match={match} />
          <Footer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            cumque.
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Main;

import HeaderMenu from "./Header/HeaderMenu";
import { useEffect, useState } from "react";
import LeftPart from "./LeftPart";
import SideFooter from "./Footer/SideFooter";
import { Layout } from 'antd';
import RightPart from "./RightPart";
import './WebsiteLayout.css';

const WebsiteLayout = () => {

    const { Header, Footer, Sider, Content } = Layout;

  return (
      <Layout>
          <Header>
        <HeaderMenu />
          </Header>

          <Layout>
              <Content><LeftPart/></Content>
              <Sider width={500}>
                  <RightPart/>
              </Sider>
          </Layout>
          <Footer style={{backgroundColor: 'white',padding: '0px'}}>  <SideFooter/></Footer>
      </Layout>
  );
};

export default WebsiteLayout;

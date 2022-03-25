import HeaderMenu from "./Header/HeaderMenu";
import { useEffect, useState } from "react";
import LeftPart from "./LeftPart";
import SideFooter from "./Footer/SideFooter";
import { Layout } from 'antd';
import RightPart from "./RightPart";

const WebsiteLayout = () => {
  const [posts, setPosts] = useState([]);


    const { Header, Footer, Sider, Content } = Layout;

  useEffect(() => {
    const webPosts = localStorage.getItem("posts");
    setPosts(JSON.parse(webPosts));
  }, []);


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

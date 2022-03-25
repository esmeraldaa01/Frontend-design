import HeaderMenu from "./Header/HeaderMenu";
import { useEffect, useState } from "react";
import Posts from "./Posts";
import SideFooter from "./Footer/SideFooter";

import { Layout } from 'antd';

const Article = () => {
  const [posts, setPosts] = useState([]);


    const { Header, Footer, Sider, Content } = Layout;

  useEffect(() => {
    const webPosts = localStorage.getItem("posts");
    setPosts(JSON.parse(webPosts));
  }, []);


  return (
      <Layout>

          <Header>
        <HeaderMenu data={posts} />
          </Header>

          <Layout style={{backgroundColor: 'white'}}>
              <Content><Posts/></Content>
          </Layout>
          <Footer style={{backgroundColor: 'white',padding: '0px'}}>  <SideFooter/></Footer>
      </Layout>
  );
};

export default Article;

import Header from "./Header";
import { useEffect, useState } from "react";
import Posts from "./Posts";

const Article = () => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const webPosts = localStorage.getItem("posts");
    setPosts(JSON.parse(webPosts));
  }, []);


  return (
    <div>
      <div className="header">
        <Header data={posts} />
      </div>
<div>
<Posts/>
</div>
    </div>
  );
};

export default Article;

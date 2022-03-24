import Header from "./Header";
import { useEffect, useState } from "react";
import data from "../assests/data";

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
 {posts?.map((post) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "250px",
                  margin: "20px",
                }}
              >
                <p>{post.news}</p>
                <p> {post.like}</p>
              </div>
            );
          })}
    </div>
  );
};

export default Article;

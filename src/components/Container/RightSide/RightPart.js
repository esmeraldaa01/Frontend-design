import React from "react";
import { useContext } from "react";
import "./RightPart.css";
import { Context } from "../../Context/Context";
import SubArticles from "./SubArticles";

const RightPart = () => {
  const { posts } = useContext(Context);

  const d = posts.map((x) => x.category);
  const categories = d.filter((item, index) => d.indexOf(item) === index);

  return (
    <div className="container">
      {categories.map((category) => (
        <div style={{ marginTop: "20px" }}>
          {posts
            .filter((post) => post.category === category)
            .map((filterPost) => {
              return (
                <div id={category.toLowerCase()}>
                  {filterPost.subCategories.map((subCategory) => {
                    console.log(subCategory);
                    return (
                      <div style={{marginBottom:'240px'}}>
                        <h1
                          style={{
                            fontSize: 15,
                            fontWeight: 900,
                          }}
                        >
                          <p style={{marginBottom:'0px'}}>{subCategory.name}</p>
                          <p className='category-name'>{subCategory.secName}</p>
                        </h1>
                        {subCategory.list.map((subPost) => <SubArticles subPost={subPost}/>)}
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
};
export default RightPart;

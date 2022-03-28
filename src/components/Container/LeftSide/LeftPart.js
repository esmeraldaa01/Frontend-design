import React, { useContext } from "react";
import "./LeftPart.css";
import { Context } from "../../Context/Context";
import Article from "./Article";

const LeftPart = () => {
  const { posts } = useContext(Context);

  const allCaregories = posts.map((x) => x.category);
  const categories = allCaregories.filter(
      (item, index) => allCaregories.indexOf(item) === index
  );

  return (
      <div className='mainSection'>
        {categories.map((x) => (
            <div className='section' id={x.toLowerCase()}>
              {posts
                  .filter((post) => post.category === x)
                  .map((p) => (
                          <div>
                            <h1 className='categoryName'>{p.category}</h1>
                            <h3 className='categoryTitle'>{p.categoryTitle}</h3>
                            <div>{p.list.map(x => <Article x={x}/> )}</div>
                          </div>
                      )
                  )}
            </div>
        ))}
      </div>
  );
};
export default LeftPart;
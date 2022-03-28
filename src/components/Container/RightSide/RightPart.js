import React from "react";
import { useContext } from "react";
import "./RightPart.css";
import { Context } from "../../Context/Context";
import {BsCheckCircleFill} from "react-icons/bs";

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
                        {subCategory.list.map((subPost) => (
                          <div className="videos">
                            <img
                              className="img"
                              width={230}
                              height={140}
                              src={subPost.image}
                            />
                            <div className='vertical'>
                            <p className="title-right">
                              {" "}
                              {subPost.title.substring(0, 45)}...
                            </p>
                              <div style={{display:'flex', gap:'5px', marginLeft:'10px'}}>
                              <img width={20} height={10} src={subPost.icon} />
                              <p className='added'>{subPost.iconName}</p>
                                <BsCheckCircleFill size={10} />
                              </div>
                              <p className='h-added'>{subPost.added}</p>
                            </div>
                          </div>
                        ))}
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

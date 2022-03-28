import React, { useContext } from "react";
import "./Posts.css";
import { Context } from "../../Context/Context";
import { BsCheckCircleFill } from "react-icons/bs";

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
                <p className='category-left'>{p.category}</p>
                <div>{p.list.map(x => (
                   <div className='article'>
                   <img width={450} height={250} src={x.image}/>
                   <div className='image-info'>
                                     <p className="label">{x.labelTag}</p>
                                     <p className='title'>{x.title}</p>
                                     <div className='subInfo'>
                                          <BsCheckCircleFill size={10} /> 
                                         <span className='timestamp'>{x.timestamp}</span>
                                     </div>
                                 </div>
                 </div>
                ))}</div>
              </div>
            )
            )}
        </div>
      ))}
    </div>
  );
};
export default LeftPart;

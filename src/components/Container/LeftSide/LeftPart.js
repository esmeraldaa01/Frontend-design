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
                            <h1 className='categoryName'>{p.category}</h1>
                            <h3 className='categoryTitle'>{p.categoryTitle}</h3>
                            <div>{p.list.map(x => (
                                <div className='article'>
                                  <img width={450} height={250} src={x.image} />
                                  <div className='image-info'>
                                    <p className="label">{x.labelTag}</p>
                                    <p className='titleLeft'>{x.title}</p>
                                    <div className='subInfo'>
                                      <img className='srcLogo' src={x.sourceLogo} />
                                      <span className='srcName'>{x.sourceName}</span>
                                      <BsCheckCircleFill size={10} />
                                      <span className='timestamp'>{x.timestamp}</span>
                                    </div>
                                    {x.seeMore ? (
                                        <div className='more'>
                                          <span className='seeMore'>{x.seeMore}</span>
                                          <div className='buttonName'>{x.buttonName}</div>
                                        </div>
                                    ) : ''}
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
import React from "react";
import { useContext } from "react";
import "./RightPart.css";
import { Context } from "../../Context/Context";
import SubArticles from "./SubArticles";
import styled from 'styled-components'
import {Col} from "antd";

const Title = styled.p`
  color: black;
    margin-bottom: 0;
    font-weight: bold;
    font-size: 13px;
`;

const Header = styled.h1`
    font-weight: 800;
    font-size: 22px ;
    color:rgb(87, 85, 85);
  `

const RightPart = () => {
  const { posts } = useContext(Context);

  const categories = posts.map((x) => x.category);
  const filterCategories = categories.filter((item, index) => categories.indexOf(item) === index);

  return (
    <div className="container">
      {filterCategories.map((category) => (
        <div style={{ marginTop: "20px" }}>
          {posts
            .filter((post) => post.category === category)
            .map((filterPost) => {
              return (
                <div id={category.toLowerCase()}>
                  {filterPost.subCategories.map((subCategory) => {
                    return (
                      <Col style={{marginBottom:'150px'}}>
                          <Title>{subCategory.name.toUpperCase()}</Title>
                        <Header>{subCategory.secName}</Header>
                        {subCategory.list.map((subPost) => <SubArticles subPost={subPost}/>)}
                      </Col>
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

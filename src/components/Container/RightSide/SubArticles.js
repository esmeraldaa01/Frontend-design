import React from 'react';
import {BsCheckCircleFill} from "react-icons/bs";
import styled from 'styled-components'
import {Row , Col} from "antd";

const Header = styled.h6`
  color: rgb(139, 139, 139);
  font-size: 10px;
  font-weight: 800;
  margin-top: 5px;
`;

const BiggerHeader = styled.h5`
  margin-left: 10px;
  color: rgb(139, 139, 139);
  font-size: 10px;
  font-weight: 800;
`
const Title = styled.h1`
  font-weight: 900;
  font-size: 15px;
  font-family: arial;
  margin-left: 10px;
  width: 230px;
`
const SubArticles = ({subPost}) => {

    return (
        <Row>
            <Col flex={3}>
            <img
                style={{margin:'10px 5px'}}
                width={220}
                height={130}
                src={subPost.image}
            />
            </Col>
            <Col flex={2}>
                <Title>{subPost.title.substring(0, 45)}...</Title>
                <Row gutter={[6,0]}>
                    <Col>
                        <img width={20} height={10} src={subPost.icon} />
                    </Col>
                    <Col>
                        <Header>{subPost.iconName}</Header>
                    </Col>
                    <Col>
                        <BsCheckCircleFill size={10} />
                    </Col>
                </Row>
                <BiggerHeader>{subPost.added}</BiggerHeader>
            </Col>
        </Row>
    )
}
export default SubArticles;
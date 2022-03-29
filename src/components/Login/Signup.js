import React from 'react'
import {Input, Select, Checkbox, Button, Layout} from "antd";
import {UserOutlined, EyeInvisibleOutlined, GiftOutlined, UndoOutlined} from "@ant-design/icons";
import '../Header/Header.css';
import './Signup.css';
import {FiCircle} from 'react-icons/fi';
import {Col , Row} from 'antd';
import styled from "styled-components";
const {Option} = Select;
const { Sider, Content } = Layout;


const Title = styled.div`
  color: black;
  font-size: 18px;
  font-family: Calibri;
  
  &.bold{
    font-weight: 900; 
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top:50px;
  left: 50px;
  &.space{
   margin-top: 40px;
  }
`;

const SecondWrapper = styled.div`
  margin: 40px 40px 20px 70px;
  top: 10%;
  left: 50%;
  align-items: center;
  
  &.bold{
    font-weight: 900;
  }
`;

const Signup = () => {
    return (
        <Layout>
            <Sider width={500}>
                <Wrapper>
                <Row style={{rowGap:'15px'}}>
                    <Col  className='space'>
                            <Title className='bold'>Your personal video library</Title>
                           <Title>Save the videos you love to share</Title>
                    </Col>
                    <Col className='space'>
                            <Title className='bold'> The latest channels and topics</Title>
                            <Title>Discover new artists , athletes , and hobbies</Title>
                    </Col>
                    <Col className='space'>
                            <Title className='bold'>Premium video playlists</Title>
                            <Title>Create playlists for parties and workouts</Title>
                    </Col>
                </Row>
            </Wrapper>
            </Sider>
            <Content style={{display: 'flex'}}>
                <SecondWrapper>
                    <Col  style={{justifyContent:"center"}}>
                    <Row className='bold'>Sign up</Row>
                    <Row  style={{rowGap:'15px'}}>
                    <Input label="name"
                           size="large"
                           style={{width: '350px', marginTop :'10px'}}
                           placeholder="Email address"
                           prefix={<UserOutlined/>}

                    />
                    </Row>
                    <Row>
                    <Input label="name"
                           size="large"
                           style={{width: '350px', marginTop :'10px'}}
                           placeholder="Password"
                           prefix={<EyeInvisibleOutlined/>}

                    />
                    </Row>
                    <Row>
                    <Input label="name"
                           size="large"
                           style={{width: '350px', marginTop :'10px'}}
                           placeholder="Date of birth"
                           prefix={<GiftOutlined/>}

                    />
                    </Row>
                    <Row>
                    <Select label="Gender"
                            size="large"
                            style={{width: '350px', marginTop :'10px'}}
                            placeholder="Enter your username"
                            prefix={<FiCircle/>}
                    >
                        <Option value='female'>female</Option>
                        <Option value='men'>male</Option>
                    </Select>
                    </Row>
                    <Row className='captcha'>
                        <p><Checkbox/> I'm not a robot</p>
                        <p> <UndoOutlined/></p>
                    </Row>
                    <Row>
                        <div className='terms-use'>
                    <Checkbox/>
                    <p>I accept terms of Dailymotion's Terms of Use and Privacy Policy </p>
                        </div>
                    </Row>
                    <Row>
                    <Button className='signup-button'>Sign up</Button>
                    </Row>
                    <p className='or'>Or</p>
                    <Row>
                    <Button className='apps' type={"primary"}>Continue with Facebook</Button>
                    </Row>
                    <Row>
                    <Button className='apps'>Continue with Google</Button>
                    </Row>
                    <Row style={{ marginTop:'10px'}}>Already have an account?Log in</Row>
                    </Col>
                </SecondWrapper>
            </Content>
        </Layout>
    )
}

export default Signup;
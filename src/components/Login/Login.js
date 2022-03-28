import React, {useContext, useState} from "react";
import {Space, Button, Input} from 'antd';
import { AiFillGoogleCircle} from "react-icons/ai";
import { BsFacebook} from "react-icons/bs";
import './Login.css';
import {EyeInvisibleOutlined, EyeTwoTone, UserOutlined ,FacebookOutlined ,DownOutlined , UpOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

const {  Content } = Layout;

const Login = () => {
   const [showSocialMedia , setShowSocialMedia] = useState(false)



    const showSocialMediaBtn = () => {
       if(!showSocialMedia) setShowSocialMedia(true);
       else setShowSocialMedia(false)
    }


    return (
        <Layout  style={{width: '100vw', height: '150vh'}}>
            <Content style={{ padding: '0 50px' }}>
                <div className='form-card' style={{height:`${showSocialMedia ? '600px' : '500px'}`}}>
                    <h1 style={{color: "black"}}>Login</h1>
                    <Space direction="vertical" className='form-input'>
                        <Input label="name"
                               size="large"
                               placeholder="Enter your username"
                               prefix={<UserOutlined/>}

                        />
                        <Input.Password placeholder="Enter your password"
                                        iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}

                        />
                        <Button block
                                value="large"
                                shape="rectangle"
                                style={{backgroundColor:'grey'}}
                                htmlType="submit"
                        >
                            Log in
                        </Button>
                        <div className='login-footer'>
                            <p  style={{display:'flex', alignItems:'center'}}>
                                <div>
                                    <p style={{textAlign:'center'}}>Or</p>
                                    <p style={{display:'flex'}}>
                                        <AiFillGoogleCircle className='google' />
                                        <BsFacebook className='facebook' />
                                    </p>
                                </div>
                                {showSocialMedia ? <Button style={{border:'none'}} onClick={showSocialMediaBtn}> <UpOutlined /></Button>
                                    : <Button style={{border:'none'}} onClick={showSocialMediaBtn}> <DownOutlined /></Button>}
                            </p>
                            {showSocialMedia &&
                                <div className='social-med-btn'>
                                    <Button type={"primary"} style={{border:'none', width:'180px'}}>
                                        <p style={{fontSize:'13px'}}> <FacebookOutlined className='facebook-btn' />Continue with Facebook </p>
                                    </Button>
                                    <Button>
                                        <p  style={{fontSize:'14px'}}>
                                            <AiFillGoogleCircle />Continue with Google
                                        </p>
                                    </Button>
                                </div>}
                        </div>
                    </Space>
                </div>
            </Content>
        </Layout>
)
}
export default Login;
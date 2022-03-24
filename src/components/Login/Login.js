import React, {useState} from "react";
import {Space, Button, Input} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone, UserOutlined} from '@ant-design/icons';
import './Login.css';


const Login = () => {
   


    return (
        <div className='form-card'>
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
                        htmlType="submit"
                >
                    Log in
                </Button>
            </Space>
        </div>
    )
}
export default Login;
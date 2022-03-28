import React, {useContext} from 'react'
import {Input, Select, Checkbox, Button, Layout} from "antd";
import {UserOutlined, EyeInvisibleOutlined, GiftOutlined, UndoOutlined} from "@ant-design/icons";
import '../Header/Header.css';
import './Signup.css';
import {FiCircle} from 'react-icons/fi';

const {Option} = Select;

const {Header, Footer, Sider, Content} = Layout;

const Signup = () => {
    return (
        <Layout>
            <Sider width={500}>
                <div className='left-part'>
                    <div>
                        <h3>Your personal video library</h3>
                        <p>Save the videos you love to share</p>
                    </div>
                    <div>
                        <h3>The latest channels and topics</h3>
                        <p>Discover new artists , athletes , and hobbies</p>
                    </div>
                    <div>
                        <h3>Premium video playlists</h3>
                        <p>Create playlists for parties and workouts</p>
                    </div>
                </div>
            </Sider>
            <Content style={{display: 'flex'}}>
                <div className='signup-container'>
                    <h1>Sign up</h1>
                    <Input label="name"
                           size="large"
                           style={{width: '400px'}}
                           placeholder="Email adress"
                           prefix={<UserOutlined/>}

                    />
                    <Input label="name"
                           size="large"
                           style={{width: '400px'}}
                           placeholder="Password"
                           prefix={<EyeInvisibleOutlined/>}

                    />
                    <Input label="name"
                           size="large"
                           style={{width: '400px'}}
                           placeholder="Date of birth"
                           prefix={<GiftOutlined/>}

                    />
                    <Select label="Gender"
                            size="large"
                            style={{width: '400px'}}
                            placeholder="Enter your username"
                            prefix={<FiCircle/>}
                    >
                        <Option value='j'>j</Option>
                    </Select>
                    <div className='captcha'>
                        <p><Checkbox/> I'm not a robot</p>
                        <UndoOutlined/>
                    </div>
                    <Checkbox/>
                    <p>I accept terms of Dailymotion's Terms of Use and Privacy Policy </p>
                    <Button className='signup-button'>Sign up</Button>
                    <p>Or</p>
                    <Button className='apps' type={"primary"}>Continue with Facebook</Button>
                    <Button className='apps'>Continue with Google</Button>
                    <p>Already have an account?Log in</p>
                </div>
            </Content>
        </Layout>
    )
}

export default Signup
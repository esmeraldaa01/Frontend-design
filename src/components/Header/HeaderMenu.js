import React from 'react';
import './Header.css';
import { AiOutlineUser } from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import Search from "../Search/Search";
import { Row, Col, Divider } from 'antd';

/*
* Refactor steps
* Make code readable
* Make use of Row,Col for the layout part
* Make use of styled-components lib to handle css part
* */

const HeaderMenu = ({displayMenu}) => {

    let navigate = useNavigate();

const handleNavigate = () => {
  navigate(`/`);
  displayMenu(true)
}

    const handleNavigateLogin = () => {
        navigate(`/login`);
        displayMenu(false)
    }

    const handleNavigateSignUp = () => {
        navigate(`/signup`);
        displayMenu(false)
    }

    return (
    <Row>

            <Col flex={3}>
            <p className='logo-name' onClick={handleNavigate} >dailymotion</p>
            </Col>

         <Col flex={2}>
             <Search/>
         </Col>
        <Col flex={1}>
           <button className='login' onClick={handleNavigateLogin}> <AiOutlineUser/> Login</button>
           <button className='sign-up' onClick={handleNavigateSignUp}>Sign up</button>
        </Col>
        </Row>
    )
}
export default HeaderMenu;
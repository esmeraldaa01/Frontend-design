import React from 'react';
import './Header.css';
import { AiOutlineUser } from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import Search from "../Search/Search";
import { Row, Col } from 'antd';


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

            <Col flex={6}>
            <div className='logo-name' onClick={handleNavigate}>dailymotion</div>
            </Col>

         <Col style={{display:'flex', justifyContent:'flex-end'}} flex={1}>
             <Row>
             <Search/>
           <button className='login' onClick={handleNavigateLogin}><AiOutlineUser/>Login</button>
           <button className='sign-up' onClick={handleNavigateSignUp}>Sign up</button>
             </Row>
        </Col>
        </Row>
    )
}
export default HeaderMenu;
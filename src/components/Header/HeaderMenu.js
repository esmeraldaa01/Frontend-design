import React from 'react';
import './Header.css';
import { AiOutlineUser } from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import Search from "../Search/Search";
import Menu from './Menu'

const HeaderMenu = () => {
    let navigate = useNavigate();


    return (
    <div style={{display:'flex', flexDirection:'column'}}>
      
        <div className='header-container'>
            <div>
            <p onClick={() => navigate(`/`)} className='logo-name'>dailymotion</p>
            </div>
         <div className='menu'>
            <Search/>
           <button className='login' onClick={() => navigate(`/login`)}> <AiOutlineUser/> Login</button>
           <button className='sign-up' onClick={() => navigate(`/signup`)}>Sign up</button>
         </div>
        </div>
        <div>
        <Menu/>
        </div>
        </div>
    )
}
export default HeaderMenu;
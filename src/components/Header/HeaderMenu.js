import React, {useContext} from 'react';
import './Header.css';
import { AiOutlineUser } from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import Search from "../Search/Search";
import Menu from './Menu'
import {Context} from "../Context/Context";


/*
* Refactor steps
* Make code readable
* Make use of Row,Col for the layout part
* Make use of styled-components lib to handle css part
* */

const HeaderMenu = () => {
    const {showMenu, setShowMenu } = useContext(Context);
    let navigate = useNavigate();

const handleNavigate = () => {
  navigate(`/`);
    setShowMenu(true)
}
    return (
    <div style={{display:'flex', flexDirection:'column'}}>
      
        <div className='header-container'>
            <div>
            <p onClick={handleNavigate} className='logo-name'>dailymotion</p>
            </div>
         <div className='menu'>
            <Search/>
           <button className='login' onClick={() => navigate(`/login`)}> <AiOutlineUser/> Login</button>
           <button className='sign-up' onClick={() => navigate(`/signup`)}>Sign up</button>
         </div>
        </div>
        <div>
            {showMenu && <Menu/>}
        </div>
        </div>
    )
}
export default HeaderMenu;
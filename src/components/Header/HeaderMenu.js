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
    <div style={{display:'flex', flexDirection:'column'}}>
      
        <div className='header-container'>

            <div>
            <p onClick={handleNavigate} className='logo-name'>dailymotion</p>
            </div>

         <div className='menu'>
            <Search/>
           <button className='login' onClick={handleNavigateLogin}> <AiOutlineUser/> Login</button>
           <button className='sign-up' onClick={handleNavigateSignUp}>Sign up</button>
         </div>

        </div>

        </div>
    )
}
export default HeaderMenu;
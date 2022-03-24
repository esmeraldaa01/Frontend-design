import React , {useState} from 'react';
import './Header.css';
import { AiOutlineZoomIn, AiOutlineUser } from "react-icons/ai";
import { Modal } from 'antd';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    let navigate = useNavigate();

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <div className='header-container'>

            <div>
            <p className='logo-name'>dailymotion</p>
            </div>

         <div className='menu'>
             <Modal closable={false} footer={null} visible={isModalVisible}>
                 <div className='horizontal'>
             <AiOutlineZoomIn style={{backgroundColor:'grey', color:'white'}}/>
                 <p className='paragraph'>Some contents...</p>
                 </div>
             </Modal>
             <AiOutlineZoomIn style={{backgroundColor:'transparent', color:'white'}}/>
           <input onClick={showModal} placeholder="Search" className='search' />
           <button className='login' onClick={() => navigate(`/login`)}> <AiOutlineUser/> Login</button>
             <button className='sign-up' onClick={() => navigate(`/signup`)}>Sign up</button>
         
         </div>
        </div>
    )
}
export default Header;
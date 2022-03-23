import React , {useState} from 'react';
import './Header.css';
import { AiOutlineZoomIn, AiOutlineUser } from "react-icons/ai";
import { Modal } from 'antd';

const Header = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <div className='header-container'>

            <div>
            <p className='logo-name'>dailymotion</p>
            </div>

         <div className='menu'>
             <Modal footer={null} visible={isModalVisible}>
                 <p>Some contents...</p>
             </Modal>
             <AiOutlineZoomIn style={{backgroundColor:'black', color:'white'}}/>
             <input onClick={showModal} placeholder="Search" className='search' />
             <button className='sign-up'>Sign up</button>
             <button className='login'> <AiOutlineUser/> Login</button>
         </div>
        </div>
    )
}
export default Header;
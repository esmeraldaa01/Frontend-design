import React, {useState} from "react";
import './Search.css'
import { AiOutlineZoomIn } from "react-icons/ai";
import { Modal } from 'antd';
import data from "../assests/data";

const Search = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [inputValue , setInputValue] = useState("");
     const [posts , setPosts] = useState([]);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleInput = (e) => {
        setInputValue(e.target.value);

        const filterData = data.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(inputValue.toLowerCase())
        })
        setPosts(filterData)
        localStorage.setItem('posts', JSON.stringify(posts))
    }



    return(
        <div>
            <Modal closable={false} footer={null} visible={isModalVisible}  onCancel={handleCancel}>
                <div className='horizontal'>
                    <AiOutlineZoomIn className='search-icon'/>
                    <input value={inputValue}  className='search-after' onChange={handleInput} placeholder='Search'/>
                </div>
            </Modal>
            <div className='horizont'>
            <AiOutlineZoomIn className='search-icon'/>
            <input onClick={showModal} placeholder="Search" className='search' />
            </div>
        </div>
    )
}
export default Search;
import React, {useEffect, useState} from "react";
import './Search.css'
import { AiOutlineZoomIn } from "react-icons/ai";
import { Modal } from 'antd';
import {Button} from 'antd';
import data from "../assests/data";

const Search = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [secondModal , setSecondModal ] = useState(false);
    const [inputValue , setInputValue] = useState("");
    const [searchItems , setSearchItems] = useState([]);
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
        setPosts(filterData);
        localStorage.setItem('posts', JSON.stringify(posts));
    }

useEffect(() => {
 setSearchItems([...searchItems , inputValue])
}, [posts])
    
    const handleRemove = () => {
        setSecondModal(true);
        setSearchItems([]);
        setPosts([]);
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    const handleCancelModal = () => {
        setSecondModal(false)
    }

    return(
        <div className="modal">
            <Modal closable={false} footer={null} visible={isModalVisible}  onCancel={handleCancel}>
                <div className='modal'>
                    <div  style={{backgroundColor:'black'}}>
                <AiOutlineZoomIn className='search-icon'/>
                    <input value={inputValue}  className='search-after' onChange={handleInput} placeholder='Search'/>
                    </div>
                    <div className="search-posts"> 
                    <p style={{marginTop:'14px'}}>Recent search</p>
                    <button onClick={handleRemove} className="remove">Remove All</button>
                    </div>
                    {searchItems.map((searched) =>{
                        return <p style={{color:'black'}}>{searched}</p>
                    })}
                </div>
            </Modal>
            <Modal className='second-modal' footer={null} closable={false} visible={secondModal} onCancel={handleCancelModal}>
                <p>Are you sure  you want to remove all recent searches ?</p>
            <p>All recent search will be deleted</p>

                <Button>Cancel</Button>
                <Button>Remove</Button>
            </Modal>
            <div>
            <AiOutlineZoomIn className='search-icon'/>
            <input onClick={showModal} placeholder="Search" className='search' />
            </div>
        </div>
    )
}
export default Search;
import React, { useState , useContext} from "react";
import './Search.css'
import { AiOutlineZoomIn } from "react-icons/ai";
import { Modal } from 'antd';
import data from "../../assests/data";
import RemoveModal from "./RemoveModal";
import {Context} from "../Context/Context";

const Search = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [inputValue , setInputValue] = useState("");
    const [searchItems , setSearchItems] = useState([]);
    const [secondModal , setSecondModal ] = useState(false);
const {posts , setPosts } = useContext(Context)
    const handleCancelModal = () => {
        setSecondModal(false)
    }

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
       console.log(posts , 'p')
    }

    
    const handleRemove = () => {
        setSecondModal(true);
        setSearchItems([]);
        setPosts(data);
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
         <RemoveModal handleCancelModal={handleCancelModal} secondModal={secondModal}/>
            <div>

            <AiOutlineZoomIn className='search-icon'/>
            <input onClick={showModal} placeholder="Search" className='search' />
            </div>
        </div>
    )
}
export default Search;
import React, {useState, useContext, useEffect, Fragment} from "react";
import './Search.css'
import {AiOutlineZoomIn} from "react-icons/ai";
import {Modal} from 'antd';
import data from "../../assests/data";
import RemoveModal from "./RemoveModal";
import {Context} from "../Context/Context";

const Search = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [searchItems, setSearchItems] = useState([]);
    const [secondModal, setSecondModal] = useState(false);
    const { setPosts} = useContext(Context)
    const handleCancelModal = () => {
        setSecondModal(false)
    }

    const showModal = () => {
        setIsModalVisible(true);

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    //.indexOf(inputValue.toLowerCase()) !== -1
    const handleInput = (e) => {
        setInputValue(e.target.value);

        const filterData = data.filter((item) => {
            return item.list.filter((x) => {
                return Object.values(x).join('').toLowerCase().includes(inputValue.toLowerCase())
            })
        })

        console.log(filterData);
        setPosts(filterData);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchItems([...searchItems, inputValue]);
            setIsModalVisible(false)
        }, 2000);

        return () => clearTimeout(timer);
    }, [inputValue]);

    const handleRemove = () => {
        setSecondModal(true);
    }


    return (
        <Fragment>
            <div>
                <Modal width={280} bodyStyle={{padding: 0}}
                       style={{padding: "0 !important", left: 340, top: 10, height: 80}} closable={false} footer={null}
                       visible={isModalVisible} onCancel={handleCancel}>
                    <div className='modal-body'>
                        <div style={{backgroundColor: 'black'}}>
                            <AiOutlineZoomIn className='search-icon'/>
                            <input value={inputValue} className='search-after' onChange={handleInput}
                                   placeholder='Search'/>
                        </div>
                        <div className="search-posts">
                            <p style={{marginTop: '14px'}}>Recent search</p>
                            <button onClick={handleRemove} className="remove">Remove All</button>
                        </div>
                        {searchItems.map((searched) => {
                            return <p style={{color: 'black'}}>{searched}</p>
                        })}
                    </div>
                </Modal>

                <AiOutlineZoomIn className='search-icon'/>
                <input onClick={showModal} placeholder="Search" className='search'/>
            </div>
            <div>
                <RemoveModal handleCancelModal={handleCancelModal} secondModal={secondModal}
                             setSearchItems={setSearchItems} setSecondModal={setSecondModal}/>

            </div>
        </Fragment>
    )
}
export default Search;
import React, {useContext} from "react";
import {Button, Modal} from "antd";
import './RemoveModal.css'
import {Context} from "../Context/Context";
import data from "../../assests/data";

const RemoveModal = ({secondModal , handleCancelModal , setSecondModal , setSearchItems}) => {
    const { setPosts} = useContext(Context);

    const handleRemove = () => {
        setPosts(data);
        setSecondModal(false);
     setSearchItems([])
    }
    return(
            <Modal width={450} bodyStyle={ {backgroundColor: 'lightgrey', padding:0}} 
            centered  footer={null} closable={false} visible={secondModal} onCancel={handleCancelModal}>
               <div className='text'>
                <p className='question'>Are you sure  you want to remove all recent searches ?</p>
                <p>All recent search will be deleted</p>
                </div>
                <div className='row'>
                    <Button style={{border:'none'}}>Cancel</Button>
                    <Button style={{border:'none'}} onClick={handleRemove}>Remove</Button>
                </div>
            </Modal>
    )
}
export default RemoveModal;
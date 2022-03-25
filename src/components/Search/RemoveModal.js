import React, {useContext} from "react";
import {Button, Modal} from "antd";
import './RemoveModal.css'
import {Context} from "../Context/Context";
import data from "../../assests/data";

const RemoveModal = ({secondModal , handleCancelModal , setSecondModal}) => {
    const { setPosts} = useContext(Context);

    const handleRemove = () => {
        setPosts(data);
        setSecondModal(false)
    }
    return(
        <div>
            <Modal className='second-modal' footer={null} closable={false} visible={secondModal} onCancel={handleCancelModal}>
                <div className="second-modal__body">

                <p>Are you sure  you want to remove all recent searches ?</p>
                <p>All recent search will be deleted</p>
                <div className='row'>
                    <Button>Cancel</Button>
                    <Button onClick={handleRemove}>Remove</Button>
                </div>
                </div>

            </Modal>
        </div>
    )
}
export default RemoveModal;
import React, {useState} from "react";
import {Button, Modal} from "antd";
import './RemoveModal.css'

const RemoveModal = ({secondModal , handleCancelModal}) => {
    return(
        <div>
            <Modal className='second-modal' footer={null} closable={false} visible={secondModal} onCancel={handleCancelModal}>
                <div className="second-modal__body">

                <p>Are you sure  you want to remove all recent searches ?</p>
                <p>All recent search will be deleted</p>
                <div className='row'>
                    <Button>Cancel</Button>
                    <Button>Remove</Button>
                </div>
                </div>

            </Modal>
        </div>
    )
}
export default RemoveModal;
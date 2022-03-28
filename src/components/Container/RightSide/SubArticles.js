import React from 'react';
import {BsCheckCircleFill} from "react-icons/bs";

const SubArticles = ({subPost}) => {
    return (
        <div className="videos">
            <img
                className="img"
                width={230}
                height={140}
                src={subPost.image}
            />
            <div className='vertical'>
                <p className="title-right">
                    {" "}
                    {subPost.title.substring(0, 45)}...
                </p>
                <div style={{display:'flex', gap:'5px', marginLeft:'10px'}}>
                    <img width={20} height={10} src={subPost.icon} />
                    <p className='added'>{subPost.iconName}</p>
                    <BsCheckCircleFill size={10} />
                </div>
                <p className='h-added'>{subPost.added}</p>
            </div>
        </div>
    )
}
export default SubArticles;
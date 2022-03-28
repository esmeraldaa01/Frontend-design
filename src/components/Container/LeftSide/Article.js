import React from "react";
import {BsCheckCircleFill} from "react-icons/bs";

const Article = ({x}) => {
    return(
        <div className='article'>
            <img width={450} height={250} src={x.image} />
            <div className='image-info'>
                <p className="label">{x.labelTag}</p>
                <p className='titleLeft'>{x.title}</p>
                <div className='subInfo'>
                    <img className='srcLogo' src={x.sourceLogo} />
                    <span className='srcName'>{x.sourceName}</span>
                    <BsCheckCircleFill size={10} />
                    <span className='timestamp'>{x.timestamp}</span>
                </div>
                {x.seeMore ? (
                    <div className='more'>
                        <span className='seeMore'>{x.seeMore}</span>
                        <div className='buttonName'>{x.buttonName}</div>
                    </div>
                ) : ''}
            </div>
        </div>
    )
}
export default Article;
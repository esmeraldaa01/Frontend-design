import React from "react";
import data from "../assests/data";
import featured from "../assests/featured.jpg";
import  './RightPart.css';

const RightPart = () => {
    return(
        <div className='container'>
            <h1>Featured videos</h1>
            <div>
                {data.filter(post => post.category === 'Enterteiment').map((p) => {
                    return (
                        <div>
                            {p.moreVideos.map((mvideo) => {
                                return (
                                    <div className='videos'>
                                        <img width={200} height={100} src={featured}/>
                                        <div style={{display:'flex', flexDirection:'column', margin:'5px'}}>
                                        <p>{mvideo.title}</p>
                                        <p>{mvideo.added}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div style={{marginTop:'20px'}}>
                {data.filter(post => post.category === 'News').map((p) => {
                    return (
                        <div>
                            {p.moreVideos.map((mvideo) => {
                                return (
                                    <div>
                                        {p.moreVideos.map((mvideo) => {
                                            return (
                                                <div className='videos'>
                                                    <img width={200} height={100} src={featured}/>
                                                    <div style={{display:'flex', flexDirection:'column', margin:'5px'}}>
                                                        <p>{mvideo.title}</p>
                                                        <p>{mvideo.added}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default RightPart
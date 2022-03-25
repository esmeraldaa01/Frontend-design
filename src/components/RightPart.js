import React from "react";
import {useContext} from "react";
import featured from "../assests/featured.jpg";
import  './RightPart.css';
import {Context} from "./Context/Context";

const RightPart = () => {
    const {posts } = useContext(Context)
    return(
        <div className='container'>
            <h1>Featured videos</h1>
            <div>
                {posts.filter(post => post.category === 'Enterteiment').map((p) => {
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
                {posts.filter(post => post.category === 'News').map((p) => {
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
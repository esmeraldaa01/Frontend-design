import React from "react";
import data from "../assests/data";
import featured from "../assests/featured.jpg";

const RightPart = () => {
    return(
        <div>
            <div>
                {data.filter(post => post.category === 'Enterteiment').map((p) => {
                    return (
                        <div>
                            {p.moreVideos.map((mvideo) => {
                                return (
                                    <div>
                                        <p>{mvideo.title}</p>
                                        <p>{mvideo.added}</p>
                                        <img width={100} height={200} src={featured}/>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div>
                {data.filter(post => post.category === 'News').map((p) => {
                    return (
                        <div>
                            {p.moreVideos.map((mvideo) => {
                                return (
                                    <div>
                                        <p>{mvideo.title}</p>
                                        <p>{mvideo.added}</p>
                                        <img width={100} height={200} src={featured}/>
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
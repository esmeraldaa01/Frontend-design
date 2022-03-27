import React from "react";
import {useContext} from "react";
import featured from "../../../assests/featured.jpg";
import  './RightPart.css';
import {Context} from "../../Context/Context";

const RightPart = () => {
    const {posts } = useContext(Context);
    
       const d = posts.map(x => x.category);
const categories = d.filter((item, 
    index) => d.indexOf(item) === index);

console.log(categories , 'c')
    return(
        <div className='container'>
            <h1 style={{fontWeight:800, fontSize:'20px'}}>Featured videos</h1>
                          {categories.map(x => (
            <div style={{marginTop:'150px'}}>
            {posts.filter(post => post.category === x).map((p) => {
                    return (
                        <div id={x.toLowerCase()}>
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
              ))}
        </div>
    )
}
export default RightPart
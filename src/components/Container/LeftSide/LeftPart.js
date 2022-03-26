import React, {useContext} from "react";
import './Posts.css';
import featured from '../../../assests/featured.jpg'
import {Context} from "../../Context/Context";


const LeftPart = () => {
    const {posts } = useContext(Context);
    return (
        <div className='body'>

                    <div className='full-body'>
                        {posts.filter(post => post.category === 'Featured').map((p) => {
                            return (
                                <div className='vertical'>
                                    <p className='category'>Featured</p>
                                    <div className='horizontal'>
                                    <img width={400} height={300} src={featured}/>
                                        <div className='vertical'>
                                    <p>{p.title}</p>
                                    <p>{p.comment}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            <div id='news' className='full-body' >
                {posts.filter(post => post.category === 'News').map((p) => {
                    return (
                        <div>
                            <p className='category'>News</p>
                            <div className='horizontal'>
                                <img width={400} height={300} src={featured}/>
                                <div className='vertical'>
                                    <p>{p.title}</p>
                                    <p>{p.comment}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
        </div>
    );
}
export default LeftPart;
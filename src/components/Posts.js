import React from "react";
import data from "../assests/data";
import './Posts.css';
import featured from '../assests/featured.jpg'


const Posts = () => {

    return (
        <div className='body'>
            <div className='horizontal'>
            <p><a href="#news">News</a></p>
            <p><a href="#sport">Sport</a></p>
            <p><a href="#enterteiment">Enterteiment</a></p>
            </div>
                    <div className='full-body'>
                        {data.filter(post => post.category === 'Featured').map((p) => {
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
                        {data.filter(post => post.category === 'Featured').map((p) => {
                            return (
                                <div>
                                    {p.moreVideos.map((mvideo) => {
                                        return (
                                            <div>
                                                <p>{mvideo.title}</p>
                                                <p>{mvideo.added}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
            <div id='news' className='full-body' >
                {data.filter(post => post.category === 'News').map((p) => {
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
                {data.filter(post => post.category === 'News').map((p) => {
                    return (
                        <div>
                            {p.moreVideos.map((mvideo) => {
                                return (
                                    <div>
                                        <p>{mvideo.title}</p>
                                        <p>{mvideo.added}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div id='sport' className='full-body'>
                {data.filter(post => post.category === 'Sport').map((p) => {
                    return (
                        <div>
                            <p className='category'>Sport</p>
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
                {data.filter(post => post.category === 'Sport').map((p) => {
                    return (
                        <div>
                            {p.moreVideos.map((mvideo) => {
                                return (
                                    <div>
                                        <p>{mvideo.title}</p>
                                        <p>{mvideo.added}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div id='enterteiment' className='full-body' >
                {data.filter(post => post.category === 'Enterteiment').map((p) => {
                    return (
                        <div>
                            <p className='category'>Enterteiment</p>
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
                {data.filter(post => post.category === 'Enterteiment').map((p) => {
                    return (
                        <div>
                            {p.moreVideos.map((mvideo) => {
                                return (
                                    <div>
                                        <p>{mvideo.title}</p>
                                        <p>{mvideo.added}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>

        </div>
    );
}
export default Posts;
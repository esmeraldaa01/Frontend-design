import React, {useContext} from "react";
import './Posts.css';
import featured from '../../../assests/featured.jpg'
import {Context} from "../../Context/Context";


const LeftPart = () => {
    const { posts } = useContext(Context);

    const allCaregories = posts.map(x => x.category);
    const categories = allCaregories.filter((item, 
        index) => allCaregories.indexOf(item) === index);
  
    
    return (
        <div className='body'>
           
                    {categories.map(x => (
                          <div className='full-body' id={x.toLowerCase()}>
                        {posts.filter(post => post.category === x).map((p) => { 
                            return (
                                <div className='vertical'>
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
                    ))}
         
        </div>
    );
}
export default LeftPart;
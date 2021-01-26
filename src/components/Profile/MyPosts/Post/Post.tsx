import React from 'react';
import cl from './Post.module.css';

type PropsType = {
    message: string
    like: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={cl.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKD17RdQJlmy3HC_xwalAsXG5kntjZ6odskQ&usqp=CAU" alt='ava'></img>
            {props.message}
            <div>
                <span>Like</span> {props.like}
            </div>
        </div >
    );
};

export default Post;
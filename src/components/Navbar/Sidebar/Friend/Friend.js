import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Friend.module.css';


const Friend = (props) => {
    return (
        <div className={cl.friend}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKD17RdQJlmy3HC_xwalAsXG5kntjZ6odskQ&usqp=CAU"></img>
            <div>Kostya</div>
        </div>

    )

}

export default Friend;
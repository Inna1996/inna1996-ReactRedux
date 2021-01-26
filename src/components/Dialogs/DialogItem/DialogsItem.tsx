import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './DialogsItem.module.css';


type PropsType = {
    id: number
    name: string
    img: string
}

const DialogItem: React.FC<PropsType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div>
            <div className={cl.dialog + ' ' + cl.active}>
                <img src={props.img} className={cl.ava} alt='avatar'></img>
                <NavLink to={path} >{props.name}</NavLink>
            </div>
            <hr className={cl.hr}></hr>
        </div>
    )
}

export default DialogItem;
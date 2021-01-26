import React from 'react';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import cl from './Sidebar.module.css';


const Sidebar = (props) => {

    // let friends = props.state.sidebar.map(friend => <Friend name={friend.name} id={friend.id} img={friend.ava} />)
    return (<div className={cl.sidebar}>
        <Friend />
        <Friend />
        <Friend />
    </div>
    );
}

export default Sidebar;
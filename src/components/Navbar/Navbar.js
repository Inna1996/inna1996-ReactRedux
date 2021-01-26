import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css';
import Sidebar from './Sidebar/Sidebar';


const Navbar = (props) => {
    return (<div className={cl.nav}>
        <div className={cl.nav_wrapper}>

            <div className={cl.nav_item}>
                <NavLink to='/news' activeClassName={cl.activeLink}>News</NavLink>
            </div>
            <div className={cl.nav_item}>
                <NavLink to='/musik' activeClassName={cl.activeLink}>Music</NavLink>
            </div>

            <div className={cl.nav_item}>
                <NavLink to='/settings' activeClassName={cl.activeLink}>Settings</NavLink>
            </div>
        </div>
        <div className={cl.sidebar}>
            <Sidebar />
        </div>
    </div>
    );
}

export default Navbar;
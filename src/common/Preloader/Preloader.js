import React from 'react';
import spinner from '../../assets/images/spinner.svg'
import cl from './Preloader.module.css';

let Preloader = () => {
    return (
        <div>
            <div className={cl.wrapper}>
                <img src={spinner} />
            </div>
        </div>
    )
}

export default Preloader;
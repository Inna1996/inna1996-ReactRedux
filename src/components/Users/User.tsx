import React from 'react';
import { UsersType } from '../../types/types';
import cl from './Users.module.css';
import userPfoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';


type PropsType = {
    user: UsersType
    followingInProgress: Array<number>
    unfollowUser: (userId: number) => void
    followUser: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, followingInProgress, unfollowUser, followUser, }) => {

    return (
        <div className={cl.wrapper}>
            <div className={cl.avaFollow}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPfoto} alt='userPhoto' />
                </NavLink>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                        className={cl.btn} onClick={() => { unfollowUser(user.id) }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                        className={cl.btn} onClick={() => { followUser(user.id) }}>Follow</button>
                }
            </div>
            <div className={cl.content}>
                <div className={cl.nameStatus}>
                    <div className={cl.name}>{user.name}</div>
                    <div className={cl.status}>{user.status}</div>
                </div>
                <div className={cl.location}>
                    <div className={cl.city}>{'us.location.city'}</div>
                    <div className={cl.country}>{'us.location.country'}</div>
                </div>
            </div>
        </div>
    )
}



export default User;
import React from 'react';
import { ProfileType } from '../../types/types';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cl from './Profline.module.css';

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}


const Profile: React.FC<PropsType> = (props) => {

    return (<div className={cl.wrapper}>
        <ProfileInfo profile={props.profile}
            isOwner={props.isOwner}
            status={props.status}
            updateStatus={props.updateStatus}
            savePhoto={props.savePhoto}
            saveProfile={props.saveProfile} />
        <MyPostsContainer />

    </div>
    );
};

export default Profile;
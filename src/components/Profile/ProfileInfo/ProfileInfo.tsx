import React, { ChangeEvent, } from 'react';
import { useState } from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import userPfoto from '../../../assets/images/user.png'
import cl from './ProfileInfo.module.css';
import ProfileStatusWithHook from './ProfileStatusWithHook';
import ProfileDataFormRedux from './ProfileDataForm';
import { ProfileType, ContactsType } from '../../../types/types';

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = ({ profile, savePhoto, isOwner, status, updateStatus, saveProfile }) => {

    let [editMode, setEditMore] = useState(false);
    if (!profile) {
        return <Preloader />
    }
    const onMainPhooSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(
            () => {
                setEditMore(false);
            }
        );

    };

    return (
        <div>
            <div className={cl.bigImg}>
                <img src={profile.photos.large || userPfoto} alt='' />
                {isOwner && <input type={'file'} onChange={onMainPhooSelected} />}
            </div>
            { editMode ? <ProfileDataFormRedux initialValues={profile} profile={profile} onSubmit={onSubmit} />
                : <ProfileData goToEditMode={() => { setEditMore(true) }} profile={profile} isOwner={isOwner} />}

            <ProfileStatusWithHook status={status} updateStatus={updateStatus} />
        </div>
    );
};
type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
            <div>
                <b>Full name:</b> {profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About Me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
                })}
            </div>
        </div>
    )
}
type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}
const Contact: React.FC<ContactsPropsType> = ({ contactTitle, contactValue }) => {
    return (
        <div className={cl.contact}><b>{contactTitle}</b>: {contactValue}</div>
    )
}

export default ProfileInfo;
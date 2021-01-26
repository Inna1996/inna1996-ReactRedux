import { ResultCodeEnam } from '../api/api';
import { profileAPI } from '../api/profile-api';
import { FormAction, stopSubmit } from 'redux-form';
import { PhotosType, PostDataType, ProfileType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from './redux-store';

let initialState = {
    postData: [
        { id: 1, message: 'how are you', like: 3 },
        { id: 2, message: 'Wie geht es dir', like: 12 },
        { id: 3, message: 'Yoooooo', like: 10 }
    ] as Array<PostDataType>,
    status: '',
    profile: null as ProfileType | null,
    newPostBody: ''
};

let profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/profile/ADD_POST':
            return {
                ...state,
                postData: [...state.postData, {
                    id: 5,
                    message: action.newPostBody,
                    like: 0,
                }],
            }

        case 'SN/profile/SET_USERS_PROFILE':
            return { ...state, profile: action.profile }

        case 'SN/profile/SET_STATUS':
            return { ...state, status: action.status }

        case 'SN/profile/DELETE_POST':
            return { ...state, postData: state.postData.filter(p => p.id != action.postId) }
        case 'SN/profile/SET_PHOTO_SUCCESS':
            return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }

        default:
            return state;
    }
};


export const actions = {
    addPostActionCreator: (newPostBody: string) => ({ type: 'SN/profile/ADD_POST', newPostBody }) as const,

    setUserProfile: (profile: ProfileType) => ({ type: 'SN/profile/SET_USERS_PROFILE', profile }) as const,

    setUserStatus: (status: string) => ({ type: 'SN/profile/SET_STATUS', status }) as const,

    setPhotoSuccess: (photos: PhotosType) => ({ type: 'SN/profile/SET_PHOTO_SUCCESS', photos }) as const,

    deletePost: (postId: number) => ({ type: 'SN/profile/DELETE_POST', postId }) as const
}

export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
};

export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(actions.setUserStatus(data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultCode === ResultCodeEnam.Succes) {
        dispatch(actions.setUserStatus(status));
    }
};

export const savePhoto = (photoFile: File): ThunkType => async (dispatch) => {
    const response = await profileAPI.savePhoto(photoFile)
    if (response.resultCode === ResultCodeEnam.Succes) {
        dispatch(actions.setPhotoSuccess(response.data.photos));
    }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if (response.resultCode === ResultCodeEnam.Succes) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', { _error: response.messages[0] }));
        return Promise.reject(response.messages[0])
    }
};

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

export default profileReducer;
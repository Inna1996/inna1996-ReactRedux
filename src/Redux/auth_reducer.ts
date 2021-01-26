import { ResultCodeEnam, ResultCodeForCaptcha } from '../api/api';
import { authAPI } from '../api/auth-api'
import { securityAPI } from '../api/security-api';
import { FormAction, stopSubmit } from 'redux-form';
import { BaseThunkType, InferActionsTypes } from './redux-store';

let initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false as boolean,
    captchaUrl: null as null | string
}

let authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/auth/SET_USERS_DATA':
            return {
                ...state,
                ...action.payload,
            }
        case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

export const actions = {
    setAuthUsersData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SN/auth/SET_USERS_DATA', payload: { userId, email, login, isAuth }
    }) as const,
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS', payload: { captchaUrl }
    }) as const
}

export const getAuthUsersData = (): ThunkType => async (dispatch) => {
    const data = await authAPI.me()
    if (data.resultCode === ResultCodeEnam.Succes) {
        let { id, email, login } = data.data;
        dispatch(actions.setAuthUsersData(id, email, login, true));
    }
};


export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodeEnam.Succes) {
        dispatch(getAuthUsersData());
    } else {
        if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptcha());
        }

        let message = data.messages.length > 0 ? data.messages[0] : 'Some Error'
        dispatch(stopSubmit('login', { _error: message }));
    }
};

export const getCaptcha = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));

};

export const logout = (): ThunkType => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === ResultCodeEnam.Succes) {
        dispatch(actions.setAuthUsersData(null, null, null, false));
    }
};

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

export default authReducer;
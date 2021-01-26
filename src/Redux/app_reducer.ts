import { ThunkAction } from 'redux-thunk';
import { getAuthUsersData } from './auth_reducer';
import { AppStateType } from './redux-store';

let INITIALISED_SUCCESS = 'INITIALISED_SUCCESS';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

let appReducer = (state: InitialStateType = initialState, action: InitializedSuccessActionType): InitialStateType => {
    switch (action.type) {
        case INITIALISED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
};

type InitializedSuccessActionType = {
    type: typeof INITIALISED_SUCCESS
}

export let initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALISED_SUCCESS });

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, InitializedSuccessActionType>
export const initializeApp = (): ThunkType => async (dispatch: any) => {
    let promise = dispatch(getAuthUsersData());
    await Promise.all([promise])
    dispatch(initializedSuccess());
}

export default appReducer;
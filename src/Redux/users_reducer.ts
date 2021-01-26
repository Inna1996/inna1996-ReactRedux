import { userAPI } from '../api/users-api';
import { ResultCodeEnam } from '../api/api';
import { UsersType } from '../types/types';
import { InferActionsTypes, BaseThunkType } from './redux-store';

let initialState = {
    users: [] as Array<UsersType>,
    pageSise: 8 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number>, //array of usersId,
    filter: {
        term: '',
        friend: null as null | boolean
    }
}


let usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/users/FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                }),
            }

        case 'SN/users/UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                }),
            }
        case 'SN/users/SET_USERS':
            return { ...state, users: action.users }

        case 'SN/users/SET_CURRENT_PAGE':
            return {
                ...state, currentPage: action.currentPage
            }
        case 'SN/users/SET_TOTAL_USERS_COUNT':
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case 'SN/users/TOGGLE_IS_FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        case 'SN/users/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        case 'SN/users/SET_FILTER':
            return { ...state, filter: action.filter }
        default:
            return state;
    }
}


export const actions = {
    follow: (userId: number) => ({ type: 'SN/users/FOLLOW', userId } as const),
    unfollow: (userId: number) => ({ type: 'SN/users/UNFOLLOW', userId } as const),
    setUsers: (users: Array<UsersType>) => ({ type: 'SN/users/SET_USERS', users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'SN/users/SET_CURRENT_PAGE', currentPage } as const),
    setFilter: (filter: FilterType) => ({ type: 'SN/users/SET_FILTER', filter } as const),
    setUsersTotalCount: (totalUsersCount: number) => ({ type: 'SN/users/SET_TOTAL_USERS_COUNT', totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'SN/users/TOGGLE_IS_FETCHING', isFetching } as const),
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => ({ type: 'SN/users/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const)
}

export const getAllUsers = (currentPage: number, pageSise: number, filter: FilterType): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(currentPage));
        dispatch(actions.setFilter(filter));

        let data = await userAPI.getUsers(currentPage, pageSise, filter.term, filter.friend)
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setUsersTotalCount(data.totalCount));
    }
}

export const followUser = (userId: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFollowingProgress(true, userId))
    let response = await userAPI.follow(userId)
    if (response.data.resultCode === 0) {
        dispatch(actions.follow(userId));
    }
    dispatch(actions.toggleIsFollowingProgress(false, userId))
}

export const unfollowUser = (userId: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFollowingProgress(true, userId))
    let data = await userAPI.unfollow(userId)
    if (data.resultCode === ResultCodeEnam.Succes) {
        dispatch(actions.unfollow(userId));
    }
    dispatch(actions.toggleIsFollowingProgress(false, userId))
}

export type InitialStateType = typeof initialState;
export type FilterType = typeof initialState.filter;
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>


export default usersReducer;
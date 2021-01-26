import { UsersType } from '../types/types';
import { instance, ResponseType } from './api';

type GetUsersResponse = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}

export const userAPI = {
    getUsers(currentPage: number = 1, pageSise: number = 10, term: string = '', friend: null | boolean = null) {
        return instance.get<GetUsersResponse>(`users?page=${currentPage}&count=${pageSise}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
            .then(response => response.data)
    },

    follow(usId: number) {
        return instance.post<ResponseType>(`follow/${usId}`)
    },

    unfollow(usId: number) {
        return instance.delete<ResponseType>(`follow/${usId}`).then(response => response.data) as Promise<ResponseType>
    }
}


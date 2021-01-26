import React, { FC, useEffect } from 'react';
import cl from './Users.module.css';
import { FilterType } from '../../Redux/users_reducer';
import Paginator from './Paginator';
import User from './User';
import UsersSearchForm from './UsersSearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, followUser, unfollowUser } from '../../Redux/users_reducer';
import { useHistory } from 'react-router-dom'
import * as queryString from 'querystring'
import { getUsersSelector, getCurrentPage, getPageSize, gettotalUsersCount, getFollowingInProgress, getUsersFilter } from './../../Redux/users-selectors';

type PropsType = {}
type QueryParamsType = { term?: string; page?: string; friend?: string }

export const Users: FC<PropsType> = React.memo(() => {
    const totalUsersCount = useSelector(gettotalUsersCount)
    const pageSise = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const users = useSelector(getUsersSelector)
    const followingInProgress = useSelector(getFollowingInProgress)
    const filter = useSelector(getUsersFilter)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType;
        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)

        if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string }

        switch (parsed.friend) {
            case "null":
                actualFilter = { ...actualFilter, friend: null }
                break;
            case "true":
                actualFilter = { ...actualFilter, friend: true }
                break;
            case "false":
                actualFilter = { ...actualFilter, friend: false }
                break;
        }

        dispatch(getAllUsers(actualPage, pageSise, actualFilter));
    }, [])



    useEffect(() => {
        const query: QueryParamsType = {}

        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        }
        )
    }, [filter, currentPage])


    const onPageChanged = (currentPage: number) => {
        dispatch(getAllUsers(currentPage, pageSise, filter));
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getAllUsers(1, pageSise, filter))
    }

    const followUsers = (userId: number) => {
        dispatch(followUser(userId))
    }

    const unfollowUsers = (userId: number) => {
        dispatch(unfollowUser(userId))
    }

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount} pageSise={pageSise} />
            <UsersSearchForm onFilterChanged={onFilterChanged} />
            {users.map(us => <User user={us}
                key={us.id}
                followingInProgress={followingInProgress}
                unfollowUser={unfollowUsers}
                followUser={followUsers} />
            )
            }
        </div >

    )
})

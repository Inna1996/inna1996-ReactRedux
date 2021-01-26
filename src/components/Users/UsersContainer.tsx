import React from 'react';
import { useSelector } from 'react-redux';
import { Users } from './Users';
import Preloader from '../../common/Preloader/Preloader';
import { AppStateType } from '../../Redux/redux-store';


export const UsersPage: React.FC = (props) => {
    const isFetching = useSelector((state: AppStateType) => state.usersPage.isFetching)
    return (<>
        {isFetching ? <Preloader /> : null}
        <Users />
    </>)

}


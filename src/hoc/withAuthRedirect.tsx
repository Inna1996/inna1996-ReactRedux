import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../Redux/redux-store';

let mapStayToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
} as MapPropsType);

type MapPropsType = {
    isAuth: boolean
}
type DispatchPropsType = {
}

export function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
        let { isAuth, ...restProps } = props

        if (!isAuth) return <Redirect to={'/login'} />

        return (<div>
            <Component {...restProps as WCP} />
        </div>
        )

    }
    let ConnectedRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(mapStayToPropsForRedirect)(RedirectComponent)
    return ConnectedRedirectComponent;
}





export default withAuthRedirect;
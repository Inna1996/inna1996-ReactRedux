import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profline';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile } from '../../Redux/profile_reducer'
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../Redux/redux-store';
import { ProfileType } from '../../types/types';


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}
type PathParamsType = {
    userId: string
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizerdUserId;
        }
        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {

            this.props.getUserProfile(userId as number);
            this.props.getUserStatus(userId as number)
        }

    }
    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType,) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }


    render() {
        return (<div>
            <Profile {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile} />
        </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizerdUserId: state.auth.userId

});


export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


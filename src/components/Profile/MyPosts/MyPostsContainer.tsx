import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../Redux/profile_reducer';
import { AppStateType } from '../../../Redux/redux-store';
import MyPosts, { DispatchPropsType, MapPropsType } from './MyPosts';


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.postData,
        // newPostText: state.profilePage.newPostText
    }
};



const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { ...actions })(MyPosts);

export default MyPostsContainer;
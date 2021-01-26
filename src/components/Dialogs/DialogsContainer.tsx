import React from 'react';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { actions } from '../../Redux/dialogs_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AppStateType } from '../../Redux/redux-store';

let mapStateToProps = (state: AppStateType) => {
    return {
        // newMessageText: state.messagesPage.newMessageText,
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth,
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         sendMessageCreator: (newMessageText) => {
//             dispatch(actions.sendMessageCreator(newMessageText));
//         },

//     }
// };

export default compose<React.ComponentType>(
    connect(mapStateToProps, { ...actions }),
    withAuthRedirect
)(Dialogs)

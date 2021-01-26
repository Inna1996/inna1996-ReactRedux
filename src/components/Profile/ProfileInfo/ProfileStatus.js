import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activatedEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivatedEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange(e) {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activatedEditMode.bind(this)}>{this.props.status || '-----'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <input onChange={this.onStatusChange.bind(this)}
                        autoFocus={true} onBlur={this.deactivatedEditMode.bind(this)} value={this.state.status}></input>
                }
            </div>
        )
    }

};

export default ProfileStatus;
import React from 'react';

// type StatusProps StatusState
type ProfileStatusProps = {
    status: string
}

type ProfileStatusState = {
    editMode: boolean
}

export class ProfileStatus extends React.Component <ProfileStatusProps, ProfileStatusState> {

    state: ProfileStatusState = {
        editMode: false
    }

    activateEditMode() {
        this.setState({editMode: true})
    }

    deactivateEditMode() {
        this.setState({editMode: false})
    }

    render() {
        return <>
            {!this.state.editMode &&
                <span
                    onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}
                </span>
            }

            {
                this.state.editMode &&
                <input
                    onBlur={this.deactivateEditMode.bind(this)}
                    value={this.props.status}
                    placeholder={'Hello my friends'}
                    autoFocus
                />
            }
        </>
    }
}


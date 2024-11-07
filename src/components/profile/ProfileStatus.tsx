import React from 'react';

// type StatusProps StatusState
type ProfileStatusProps = {
    status: string
    updateStatus: any
}
type ProfileStatusState = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component <ProfileStatusProps, ProfileStatusState> {

    state: ProfileStatusState = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (event: any) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusProps>, prevState: Readonly<ProfileStatusState>) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return <>
            {!this.state.editMode &&
                <span
                    onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}
                </span>
            }

            {
                this.state.editMode &&
                <input
                    onChange={this.onStatusChange}
                    onBlur={this.deactivateEditMode}
                    value={this.state.status}
                    placeholder={'Hello my friends'}
                    autoFocus
                />
            }
        </>
    }
}






import React from 'react';
import styles from './ProfileInfo.module.css';

type ProfileStatusPropsType = {
    status: any
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        title: 'Yo'
    }

    activateEditMode=()=> {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode() {
        debugger
        console.log("this", this)
        this.setState({
            editMode: false
        });
    }



    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
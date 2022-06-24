import React, { Component } from "react";

export class ProfileContainer extends Component {
    

  render() {
    const {id, email, first_name, last_name, avatar} = this.props.currUserData
    return (
      <div className="profile-container">
        <div className="image-container">
          <img src={avatar} alt="profile" />
        </div>
        <div className="data-container">{email}</div>
      </div>
    );
  }
}

export default ProfileContainer;

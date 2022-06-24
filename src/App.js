import ProfileContainer from './ProfileContainer';
import React,{ Component } from 'react';

import './App.css';
const url = "https://reqres.in/api/users";

export default class App extends Component {
  
    constructor(){
        super()
        this.state = {
           
        };
    }

  async componentDidMount() {
    console.log("thisMethodCalled")
    const res = await fetch(url);
    const resJSON = await res.json();
    this.setState(userData, resJSON.data)
  }

  render() {
    return (
      <>
        {
          userData.map((user) => {
            return <ProfileContainer currUserData={user} />
          })
        }
      </>
    )
  }
}


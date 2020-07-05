import React from 'react';

import '../styles/Login.scss';
import '../styles/partials/form.scss';
import loginImage from '../images/login.jpg'

export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      client_id: "7b57baeaff1149f6b0b9631e5debda85",
      client_secret: "662f69e2c8164d77a53f936febc433f3",
      redirect_uri: "http://localhost:3000",
      scopes: 'user-read-private user-read-email'
    }
  }

  login = () => {
    window.location.href = "http://localhost:4200/users/login";
  }

  render() {
    return (
      <div className="login">
        <div>
          <button onClick={this.login}>Login with Spotify</button>
        </div>

        <div className="imageLogin">
          <img src={loginImage} alt="LoginImage" />
        </div>
      </div>
    )
  }
}
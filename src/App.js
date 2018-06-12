import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { simpleAction } from "./actions/simpleAction";
import CreateTopic from "./components/createTopic";
import { GoogleLogin } from 'react-google-login';
import config from './config.json';


const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };

  googleResponse = (response) => {
    console.log("this is the token ",response.accessToken);
        const tokenBlob = JSON.stringify({AccessToken: response.accessToken})
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'no-cors',
            cache: 'default'
        };
        fetch('http://localhost:3000/login', options).then(r => {
            const token = r.headers.get('x-auth-token');
            console.log("token is ",token);
            // r.json().then(user => {
            //     if (token) {
            //         this.setState({isAuthenticated: true, user, token})
            //     }
            // });
        }).catch(error=>{
          console.log(error);
        })
    };

    onFailure = (error) => {
      console.log(error);
       alert(error.details);
   };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.simpleAction}>Test redux action</button>
        <GoogleLogin
                        clientId={config.GOOGLE_CLIENT_ID}
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.onFailure}
                    />
        <div className="formArea">
          <CreateTopic />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

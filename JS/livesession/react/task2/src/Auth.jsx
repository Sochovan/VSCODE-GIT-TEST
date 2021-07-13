import React from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

// algo
// 1. show login by default +++++
// 2. show spinner for 2 sec after login click
// 3. show logout
// 4. show login after logout click

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isLogging: false,
  };
  onLogin = () => {
    debugger;
    this.setState({
      isLogging: true,
    });
    //input: func, ms
    //output: undefined

    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isLogging: false,
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({
      isLogging: false,
    });
  };

  render() {
    const { isLogging, isLoggedIn } = this.state;

    if (isLogging) {
      return <Spinner size={50} />;
    }
    if (isLoggedIn) {
      return <Logout onLogout={this.onLogout} />;
    }
    return <Login onLogin={this.onLogin} />;
  }
}

export default Auth;

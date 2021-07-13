import React from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

// 1.Show login by default
// 2.Show spinner for 2 sec
// 3.show logout
// 4.show login after logout click

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      isSpinner: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
      isSpinner: true,
    });

    setTimeout(() => {
      this.setState({
        isLoggedIn: false,
        isSpinner: false,
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: true,
      isSpinner: false,
    });
  };

  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <Login onLogin={this.handleLogin} />;
    } else {
      button = <Logout onLogout={this.handleLogout} />;
    }
    return <div>{this.state.isSpinner ? <Spinner size={40} /> : button}</div>;
  }
}

export default Auth;

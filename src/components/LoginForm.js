import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handlePasswordChange = (event) => {
    this.setState({
      password:event.target.value
    })
  }

  handleUsernameChange = (event) => {
    this.setState({
      username:event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    console.log(this.state.username)

    if(this.state.username == '' || this.state.password == ''){
      return
    }
    else{
      this.props.onSubmit(this.state.username, this.state.password)
    }

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value = {this.state.username} onChange={this.handleUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value = {this.state.password} onChange={this.handlePasswordChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

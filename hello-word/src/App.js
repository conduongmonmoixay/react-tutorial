import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      data:
      [
        {
          id: 1,
          name: "khanh toan"
        },
        {
          id: 2,
          name: "Tuan Thinh"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <table>
          <tr>
            <td>id</td>
            <td>name</td>
          </tr>
          {this.state.data.map((person, id) => <Header data={person} key={id}/>)}
        </table>
        <Test />
        <LoginController/>
        <FormDemo />
      </div>
    );
  }
}

class Header extends React.Component{
  constructor(){
    super();

    this.state = {
      data:
      [
        {
          id: 1,
          name: "khanh toan"
        },
        {
          id: 2,
          name: "Tuan Thinh"
        }
      ]
    }
  }
  render(){
    return (
        <tr>
          <td>{this.props.data.id}</td>
          <td>{this.props.data.name}</td>
        </tr>
    );
  }
}

class Test extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      data: []
    }
    this.setStateHandler = this.setStateHandler.bind(this);
  }

  setStateHandler(){
    var item = "setSatte";
    var arr = this.state.data;
    arr.push(item);
    this.setState({
      data: arr
    });
  }

  render(){
    return (
      <div>
        <h1>{this.props.cms}</h1>
        <h1>dsdada</h1>
        <button onClick={this.setStateHandler}>SET STATE</button>
        <p>{this.state.data}</p>
      </div>
    );
  }

}
Test.defaultProps = {
  cms: "LOAD CMS"
}

class LoginController extends React.Component{
  constructor(props){
    super(props);
    this.state = {isLogin: false}
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  };

  handleLogIn(){
    this.state.isLogin = true;
    this.setState({
      isLogin: true
    });
  };

  handleLogOut(){
    this.state.isLogin = false;
    this.setState({
      isLogin: false
    });
  }

  render(){
    var button = null;
    var isLogin = this.state.isLogin;
    if(isLogin){
      button = <LogOutButton onClick={this.handleLogOut}></LogOutButton>
    }
    else{
      button = <LogInButton onClick={this.handleLogIn}></LogInButton>
    }
    return (
      <div>
        <Greeting isLogin={isLogin}/>
        {button}
      </div>
    );
  }
}

function LogOutButton(props){
  return (
    <button onClick={props.onClick}>Log Out</button>
  );
}

function LogInButton(props){
  return (
    <button onClick={props.onClick}>Log In</button>
  );
}

function UserGreeting(props){
  return (
    <h1>WelCome USer</h1>
  );
}

function GuestGreeting(props){
  return (
    <h1>Please Login</h1>
  );
}

function Greeting(props){
  var isLogin = props.isLogin;
  if(isLogin){
    return <UserGreeting/>
  }
  else{
    return <GuestGreeting/>
  }
}

class FormDemo extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      val: ''
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  handleFormChange(event){
    this.setState({
      val: event.target.value
    });
  }

  handleFormSubmit(event){
    alert(this.state.val);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" onChange={this.handleFormChange}/>
        <input type="submit" value="submit"/>
      </form>
    );
  }
}

export default App;

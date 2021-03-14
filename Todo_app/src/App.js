import React from "react";
import "./App.css";
import User from "./User";
import Todo from './Todo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      currentUser: {},
      usersView:true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((result) => {
        const { data } = result;
        this.setState({ users: data });
      });
  }

  handleClick(user) {
    console.log("handelchange");
    this.setState({ currentUser: user, usersView:false });
    console.log(this.state.usersView);
  }
  render() {
   
    console.log("rendering...")
    const usersArr = this.state.users.map((user) => {
      return (
        <User key={user.id} currentUser={user} handleClick={this.handleClick} />
      );
    });
    return (
      <div className="container">
        <h1>ToDo App</h1>
        <div className={this.state.usersView===true?"users":"d-none users"}>{usersArr}</div>
        <div className={this.state.usersView===true?"d-none":"d-block todo-list"}>
        <Todo user={this.state.currentUser}/>
        </div>
      </div>
    );
  }
}

export default App;

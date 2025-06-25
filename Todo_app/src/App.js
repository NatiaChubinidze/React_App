import React from "react";
import "./App.css";
import User from "./components/User";
import Todo from "./components/Todo";

class App extends React.Component {
  style = {
    backgroundImage:
      "linear-gradient(to right, rgba(224, 221, 224, 0.3),rgba(128, 41, 114, 0.144)",
  };
  constructor() {
    super();
    this.state = {
      users: [],
      currentUser: {},
      usersView: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.changeVisibility = this.changeVisibility.bind(this);
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=1", {
      method: "GET",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        const { data } = result;
        this.setState({ users: data });
      });
  }

  handleClick(user) {
    this.setState({ currentUser: user, usersView: false });
  }
  changeVisibility() {
    this.setState({ usersView: true });
  }

  render() {
    const usersArr = this.state.users.map((user) => {
      return (
        <User key={user.id} currentUser={user} handleClick={this.handleClick} />
      );
    });
    return (
      <div
        className="container"
        style={this.state.usersView ? null : this.style}
      >
        <div className="d-flex text mb-2">
          <h1 className="me-3">ToDo App</h1>
          <h4 className="mt-2">Click users to see their to do lists</h4>
        </div>
        <div
          className={this.state.usersView === true ? "users" : "d-none users"}
        >
          {usersArr}
        </div>
        <div
          className={
            this.state.usersView === true ? "d-none" : "d-block todo-list"
          }
        >
          <Todo
            user={this.state.currentUser}
            changeVisibility={this.changeVisibility}
          />
        </div>
      </div>
    );
  }
}

export default App;

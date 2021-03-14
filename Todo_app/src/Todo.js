import React from "react";
import TodoItem from './Todo-item';
import "./Todo.css";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ toDos: result });
      });
  }

  render() {
      const filteredToDos=this.state.toDos.filter(item=>item.userId===this.props.user.id);
      const toDos=filteredToDos.map(todo=><TodoItem key={todo.id} currentToDo={todo}/>)
    return toDos;
  }
}

export default Todo;

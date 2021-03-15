import React from "react";
import TodoItem from './Todo-item';
import "../styles/Todo.css";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: []
    };
    this.handleChange=this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ toDos: result });
      });
  }
  handleChange(id) {
    this.setState(prevState => {
        const updatedTodos = prevState.toDos.map(todo => {
            if (todo.id === id) {
                return {
                  ...todo,
                  completed:!todo.completed
                }
            }
            return todo;
        })
        return {
            toDos: updatedTodos
        }
    })
}

  render() {
      const filteredToDos=this.state.toDos.filter(item=>item.userId===this.props.user.id);
      const toDos=filteredToDos.map(todo=><TodoItem key={todo.id} currentToDo={todo} 
        handleChange={this.handleChange}/>)
    return (
      <div>
      <svg
      onClick={this.props.changeVisibility}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-box-arrow-left"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
      />
      <path
        fillRule="evenodd"
        d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
      />
    </svg>
    {toDos}
 </div>
 )
  }
}

export default Todo;

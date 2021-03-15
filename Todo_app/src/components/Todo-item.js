import React from "react";
import "../styles/Todo-item.css";

class TodoItem extends React.Component {
  completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.currentToDo.completed}
          onChange={() => this.props.handleChange(this.props.currentToDo.id)}
        />
        <p
          style={this.props.currentToDo.completed ? this.completedStyle : null}
        >
          {this.props.currentToDo.title}
        </p>
      </div>
    );
  }
}

export default TodoItem;

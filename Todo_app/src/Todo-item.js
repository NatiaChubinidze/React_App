import React from "react";

class TodoItem extends React.Component {

  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" checked={this.props.currentToDo.completed}/>
        <p>{this.props.currentToDo.title}</p>
      </div>
    );
  }
}

export default TodoItem;

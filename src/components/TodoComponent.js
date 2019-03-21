import React, { Component } from 'react';

class TodoComponent extends Component {

  handleDelete = (e) => {
    this.props.paraEliminar(this.props.index);
  }

  handleComplete = (e) => {
    this.props.onComplete(this.props.index);
  }

  render() {
    const { todo: {title, isDone} } = this.props;
    return (
      <li>
        <div>{!isDone ? title : <div>tarea completada</div>}</div>
        {/* {isDone && <div>tarea completada</div>}
        {!isDone && <div>{title}</div>} */}
        <button onClick={this.handleComplete}>complete</button>
        <button onClick={this.handleDelete}>delete</button>
      </li>
    );
  }
}

export default TodoComponent;
import React, { Component } from 'react';
import { generateTask } from './helpers'

import './App.css';
import TodoComponent from './components/TodoComponent';

class App extends Component {
  state = {
    todos: [generateTask(), generateTask()]
  }

  handleClick = () => {
    this.setState({
      todos: [...this.state.todos, generateTask()]
    })
  }

  delete = (index) => {
    console.log('🤯🤯🤪', index);
    this.state.todos.splice(index, 1);
    console.log(this.state);
    this.setState({
      todos: [...this.state.todos],
    })
  }

  handleComplete = (index) => {
    const { todos } = this.state;

    todos[index].isDone = !todos[index].isDone;

    this.setState({
      todos: [...todos],
    })
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <button onClick={this.handleClick}>add todo</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return <TodoComponent 
              key={index}
              todo={todo}
              index={index}
              paraEliminar={this.delete}
              onComplete={this.handleComplete}
            />
          })}
        </ul>
      </div>
    );
  }
}

export default App;

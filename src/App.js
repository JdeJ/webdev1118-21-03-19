import React, {Component} from 'react';
import {generateTask} from './helpers';

import './App.css';
import TodoComponent from './components/TodoComponent';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [generateTask(), generateTask()],
  };

  handleTask = todo => {
    this.setState({
      todos: [...this.state.todos, generateTask(todo)],
      todo: '',
    });
  };

  delete = index => {
    this.state.todos.splice(index, 1);
    this.setState({
      todos: [...this.state.todos],
    });
  };

  handleComplete = index => {
    const {todos} = this.state;

    todos[index].isDone = !todos[index].isDone;

    this.setState({
      todos: [...todos],
    });
  };

  render() {
    const {todos} = this.state;
    console.log('render');
    return (
      <div>
        <h1>Todo</h1>
        <AddTodo onClick={this.handleTask} />
        <ul>
          {todos.map((todo, index) => {
            return (
              <TodoComponent
                key={index}
                todo={todo}
                index={index}
                onDelete={this.delete}
                onComplete={this.handleComplete}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;

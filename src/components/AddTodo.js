import React, { Component } from 'react';

class AddTodo extends Component {
  
  state = {
    todo: '',
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleClick = () => {
    const { todo } = this.state
    this.props.onClick(todo);
    this.setState({
      todo: '',
    })
  }

  render() {
    const { todo } = this.state;
    return (
      <>
        <input 
          type="text"
          value={todo}
          onChange={this.handleInput}
          name='todo'
          placeholder='pon aqui algo que seguro se te olvida'
        />
        <button onClick={this.handleClick}>add todo</button>
      </>
    );
  }
}

export default AddTodo;
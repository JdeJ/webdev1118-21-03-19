import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  state = {
    todo: '',
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    const {todo} = this.state;
    this.props.onClick(todo);
    this.setState({
      todo: '',
    });
  };

  render() {
    const {todo} = this.state;
    return (
      <>
        <input
          type="text"
          value={todo}
          onChange={this.handleInput}
          name="todo"
          placeholder="pon aqui algo que seguro se te olvida"
        />
        <button onClick={this.handleClick}>add todo</button>
      </>
    );
  }
}

AddTodo.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddTodo;

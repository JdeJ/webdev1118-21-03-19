import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoComponent extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.index);
  };

  handleComplete = () => {
    this.props.onComplete(this.props.index);
  };

  render() {
    const {
      todo: {title, isDone},
    } = this.props;
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

TodoComponent.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoComponent;

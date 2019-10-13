import React, { Component } from 'react';
import classes from './stylesheets/Todo.css';
import PropTypes from 'prop-types';

class todo extends Component {
    //Add the default todo class, and if completed add the completed class also

    // const editFunc = !props.editingState ? props.editingHandler.bind(this, todoIndex) : null;
    // const deleteFunc = !props.editingState ? props.deleteHandler.bind(this, todoIndex) : null; 
    render() {
        let todoClasses = [classes.Todo];
        if (this.props.todo.isCompleted) {
            todoClasses.push(classes.Completed);
        }

        const todoText = this.props.todo.task;
        const isTodoCompleted = this.props.todo.isCompleted;
        const todoIndex = this.props.index;
        return (
            <li className={todoClasses.join(' ')}>
                <p className={classes.Index}>{todoIndex + 1}.</p>
                <label>
                    <input
                        className={classes.Checkbox}
                        type='checkbox'
                        onChange={() => this.props.completedHandler(todoIndex)}
                        checked={isTodoCompleted} />

                    <div className={classes.TodoText}>
                        <p>{todoText}</p>
                    </div>
                </label>
                <span className={classes.EditIcon} onClick={this.props.editingHandler.bind(this, todoIndex)}>
                    <i className="material-icons">edit</i>
                </span>

                <span className={classes.DeleteIcon} onClick={this.props.deleteHandler.bind(this, todoIndex)}>
                    <i className="material-icons">delete_sweep</i>
                </span>

            </li>
        );
    }


}

todo.propTypes = {
    todo: PropTypes.object,
    index: PropTypes.number,
    completedHandler: PropTypes.func,
    deleteHandler: PropTypes.func,
}

export default todo;
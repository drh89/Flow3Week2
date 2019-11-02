import React from 'react';
import PropTypes from 'prop-types';

const TodoList = (props) => {
  return (
    <React.Fragment>
      <h2>All Todos</h2>
      <ul>
        {props.todos.map(todo => (
          <li key={todo.id}>{todo.todoText}
                <a href="#/" onClick = {(e) => {props.deleteTodo(todo)}}>(delete / </a>
                <a href="#/" onClick = {(e) => {props.editTodo(todo)}}>edit) </a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array
}
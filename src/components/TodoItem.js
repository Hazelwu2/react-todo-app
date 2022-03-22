import React from 'react'

function TodoItem(props) {
  return <li>
    <button
      onClick={() => props.deleteTodoProps(props.todo.id)}
    >
      刪除
    </button>
    <input
      type="checkbox"
      checked={props.todo.completed}
      onChange={() => props.handleChangeProps(props.todo.id)}
    />
    {props.todo.title}
  </li>
}

export default TodoItem
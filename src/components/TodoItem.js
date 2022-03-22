import React from 'react'
import style from './TodoItem.module.scss'

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { completed, id, title } = props.todo

  return <li className={style.item}>
    <input
      type="checkbox"
      checked={completed}
      onChange={() => props.handleChangeProps(id)}
    />
    <button onClick={() => props.deleteTodoProps(id)}>
      刪除
    </button>
    <span style={completed ? completedStyle : null}>
      {title}
    </span>
  </li>
}

export default TodoItem
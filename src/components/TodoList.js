import React from "react"
import { useTodos } from "../redux/ducks/todos"

export default function(props) {
  const { todos, remove, toggle } = useTodos()

  return (
    <div className="container">
      <ul>
        {todos.map(todo => (
          <li
            className={todo.completed ? "completed" : ""}
            key={"todo" + todo.id}
            onClick={e => toggle(todo.id)}
          >
            {todo.title}
            <button className="x" onClick={e => remove(todo.id)}>
              X
            </button>
            <button
              className="line"
              onClick={todo.completed}
              onClick={e => toggle(todo.id)}
            ></button>
          </li>
        ))}
      </ul>
      <div className="itemleft"> Items Left: {todos.length}</div>
    </div>
  )
}

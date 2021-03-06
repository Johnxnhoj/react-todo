import React, { useState } from "react"
import { useTodos } from "../redux/ducks/todos"

export default function(props) {
  const { add } = useTodos()
  const [todo, setTodo] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    add(todo)
    setTodo("")
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          className="test"
          type="text"
          placeholder="what needs to be done?"
          onChange={e => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

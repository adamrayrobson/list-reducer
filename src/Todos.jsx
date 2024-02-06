import { useState, useReducer } from 'react'
import Todo from './Todo'

const ACTION = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, newTodo(action.payload)]
    case ACTION.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case ACTION.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload)
    default:
      return todos
  }
}


function newTodo(title) {
  return { id: Date.now(), title: title, complete: false }
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, [])

  const [title, setTitle] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTION.ADD_TODO, payload: title })
    setTitle('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map(todo => (
       <Todo key={todo.id} dispatch={dispatch} ACTION={ACTION} {...todo} />
      ))}
    </>
  )
}

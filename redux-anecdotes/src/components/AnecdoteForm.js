import React from "react"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setMessage, removeMessage } from "../reducers/notificationReducer"
const AnecdoteForm = props => {
  const addAnecdote = event => {
    event.preventDefault()
    const content = event.target.anecdote.value
    props.store.dispatch(createAnecdote(content))
    props.store.dispatch(setMessage(content))
    setTimeout(() => props.store.dispatch(removeMessage()), 5000)
  }
  
  return (
    <div>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm

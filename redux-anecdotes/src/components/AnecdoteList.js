import React from "react"
import { voteAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteList = props => {
  const store = props.store
  const anecdotes = store.getState()
  const vote = id => store.dispatch(voteAnecdote(id))

  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
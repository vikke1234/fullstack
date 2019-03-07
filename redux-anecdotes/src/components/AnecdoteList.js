import React from "react"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setMessage, removeMessage } from "../reducers/notificationReducer"

const Anecdote = ({ key, content, votes, onClick }) => (
  <div key={key}>
    <div>{content}</div>
    <div>
      has {votes}
      <button onClick={onClick}>vote</button>
    </div>
  </div>
)

const AnecdoteList = props => {
  const store = props.store
  const { anecdotes, filter } = store.getState()
  const vote = id => {
    const anecdote = voteAnecdote(id)
    const message = anecdotes.find(a => a.id === anecdote.data.id).content

    store.dispatch(anecdote)
    store.dispatch(setMessage(message))
    setTimeout(() => store.dispatch(removeMessage()), 5000)
  }

  const anecdotesToShow = () => {
    if (filter === "ALL") {
      return anecdotes
    }

    return anecdotes.filter(anecdote => anecdote.content.includes(filter))
  }

  return (
    <div>
      {anecdotesToShow().map(anecdote => (
        <Anecdote
          key={anecdote.id}
          content={anecdote.content}
          votes={anecdote.votes}
          onClick={() => vote(anecdote.id)}
        />
      ))}
    </div>
  )
}

export default AnecdoteList

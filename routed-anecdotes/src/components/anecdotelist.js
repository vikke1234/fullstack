import React from "react"
import { connect } from "react-redux"
const AnecdoteList = props => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {props.anecdotes.map(anecdote => (
        <li key={anecdote.id}>
          <a href={`localhost:3000/anecdote/${anecdote.id}`}>
            {anecdote.content}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export const Anecdote = ({ anecdote }) => {
  return <h1>{anecdote.content}</h1>
}
const map_state_to_props = state => {
  return {
    anecdotes: state.anecdotes
  }
}

export default connect(map_state_to_props)(AnecdoteList)

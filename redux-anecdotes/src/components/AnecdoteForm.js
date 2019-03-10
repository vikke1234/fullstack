import React from "react"
import { connect } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setMessage, removeMessage } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdote_service"

const AnecdoteForm = props => {
  const addAnecdote = async event => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ""
    const new_anecdote = await anecdoteService.create_new(content)
    props.createAnecdote(new_anecdote.content)
    
    props.setMessage(content)
    setTimeout(() => props.removeMessage(), 5000)
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

const mapDispatchToProps = {
  createAnecdote,
  setMessage,
  removeMessage
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

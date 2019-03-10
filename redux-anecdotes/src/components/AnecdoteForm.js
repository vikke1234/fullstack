import React from "react"
import { connect } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, removeNotification } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdote_service"

const AnecdoteForm = props => {
  const addAnecdote = async event => {
    const notify = (message, seconds) => {
      props.setMessage(message)
      setTimeout(() => props.removeMessage(), seconds * 1000)
    }
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ""
    const new_anecdote = await anecdoteService.create_new(content)
    props.createAnecdote(new_anecdote.content)
    
    notify(content, 10)
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
  setNotification,
  removeNotification
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

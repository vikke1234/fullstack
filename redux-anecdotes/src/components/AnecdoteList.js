import React from "react"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, removeNotification } from "../reducers/notificationReducer"
import { connect } from "react-redux"

const Anecdote = ({ content, votes, onClick }) => {
  return (
    <div>
      <div>{content}</div>
      <div>
        has {votes} <button onClick={onClick}>vote</button>
      </div>
    </div>
  )
}

const Anecdotes = props => {
  const vote = async id => {
    const notify = (message, seconds) => {
      props.setNotification(message)
      setTimeout(() => props.removeNotification(), seconds * 1000)
    }
    const anecdote = await props.voteAnecdote(id)
    const message = anecdote.data.content
    notify(message, 10)
  }

  return (
    <div>
      {props.visibleAnecdotes.map(anecdote => (
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

const anecdotesToShow = ({ anecdotes, filter }) => {
  if (filter === "ALL") {
    return anecdotes
  }

  return anecdotes.filter(anecdote => anecdote.content.includes(filter))
}

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
    message: state.message,
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  removeNotification,
  setNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Anecdotes)

import React from "react"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setMessage, removeMessage } from "../reducers/notificationReducer"
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
    const anecdote = await props.voteAnecdote(id)
    console.log(anecdote);
    
    const message = anecdote.data.content
    console.log(message);
    
    props.setMessage(message)
    setTimeout(() => props.removeMessage(), 5000)
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

const anecdotesToShow = ({anecdotes, filter}) => {
  if (filter === "ALL") {
    return anecdotes
  }

  return anecdotes.filter(anecdote =>
    anecdote.content.includes(filter)
  )
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
  removeMessage,
  setMessage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Anecdotes)

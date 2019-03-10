import React, { useEffect } from "react"
import { connect } from "react-redux"
import AnecdoteForm from "./components/AnecdoteForm"
import Anecdotes from "./components/AnecdoteList"
import Notification from "./components/Notification"
import Filter from "./components/Filter"
import { initializeAnecdotes } from "./reducers/anecdoteReducer"

const App = props => {
  
  useEffect(() => {
    props.initializeAnecdotes()
  }, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteForm />
      <Anecdotes />
    </div>
  )
}

export default connect(
  null,
  { initializeAnecdotes }
)(App)

import React, {useEffect} from "react"
import { connect } from "react-redux"

import Footer from "./components/footer"
import Menu from "./components/menu"
import { initialize_anecdotes } from "./reducers/anecdote_reducer"

const App = props => {
  useEffect(() => {
    props.initialize_anecdotes()
  }, [])

  const anecdoteById = id => props.anecdotes.find(a => a.id === id)

  const vote = id => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    props.anecdotes.map(a => (a.id === id ? voted : a))
  }

  return (
    <div>
      <h1>Software anecdotes</h1>
      {props.notification ? props.notification : null}
      <Menu anecdotes={props.anecdotes} />
      <Footer />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    notification: state.notification,
    anecdotes: state.anecdotes
  }
}

export default connect(
  mapStateToProps,
  { initialize_anecdotes }
)(App)

import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import AnecdoteList, { Anecdote } from "./anecdotelist"
import CreateNew from "./anecdote_form"
import About from "./about"

const Menu = ({ anecdotes, addNew, setNotification }) => {
  const padding = {
    paddingRight: 5
  }
  const anecdoteById = id => anecdotes.find(anecdote => anecdote.id === id)

  return (
    <div>
      <Router>
        <div>
          <div>
            <Link style={padding} to="/">
              anecdotes
            </Link>
            <Link style={padding} to="/create">
              create new
            </Link>
            <Link style={padding} to="/about">
              about
            </Link>
          </div>

          <Route
            exact
            path="/"
            render={() => <AnecdoteList anecdotes={anecdotes} />}
          />
          <Route
            path="/create"
            render={() => (
              <CreateNew addNew={addNew} setNotification={setNotification} />
            )}
          />
          <Route path="/about" render={() => <About />} />
          <Route
            path="/anecdote/:id"
            render={({ match }) => (
              <Anecdote anecdote={anecdoteById(match.params.id)} />
            )}
          />
        </div>
      </Router>
    </div>
  )
}

export default Menu
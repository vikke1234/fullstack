import React from "react"
import AnecdoteForm from "./components/AnecdoteForm"
import Anecdotes from "./components/AnecdoteList"
import Notification from "./components/Notification";
import Filter from "./components/Filter";

const App = props => {
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

export default App

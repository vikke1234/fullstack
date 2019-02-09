import React, { useState, useEffect } from "react"
import network from "./network"
import { Numbers, PersonForm } from "./phonerecords"
import "./app.css"

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return <div className="error">{message}</div>
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [shown, setShown] = useState(persons)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    network.getAll().then(response => {
      setPersons(response)
      setShown(response)
    })
  }, [])

  const filter = name => {
    setShown(persons.filter(person => person.name.toLowerCase().includes(name)))
  }
  return (
    <div>
      <h2>Puhelinluettelo</h2>
      rajaa: <input onChange={event => filter(event.target.value)} />
      <h3>lisäää uusi</h3>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setShown={setShown}
        setErrorMessage = {setErrorMessage}
      />
      <Notification message={errorMessage} />
      <h2>Numerot</h2>
      <div>
        <Numbers 
        persons={shown} 
        setShown={setShown} 
        setPersons={setPersons} 
        setErrorMessage = {setErrorMessage}
        />

      </div>
    </div>
  )
}

export default App

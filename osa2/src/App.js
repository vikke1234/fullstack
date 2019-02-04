import React, { useState, useEffect } from "react"
import axios from "axios"
import {Numbers, PersonForm} from './phonerecords'

const App = () => {
  const [persons, setPersons] = useState([])

  const [shown, setShown] = useState(persons)
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(response => {
      console.log("response gotten")
      setPersons(response.data)
      setShown(response.data)
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
      <PersonForm persons={persons} setPersons={setPersons} setShown = {setShown} />

      <h2>Numerot</h2>
      <div>
        <Numbers persons={shown} />
      </div>
    </div>
  )
}

export default App

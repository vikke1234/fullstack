import React, { useState } from "react"
import create from "./network"

export const Numbers = ({ persons }) => {
  let rows = persons.map(person => (
    <p key={person.name}>
      {person.name} {person.number}
    </p>
  ))
  return rows
}

export const PersonForm = props => {
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const submit = event => {
    event.preventDefault()

    let found = false
    for (let i = 0; i < props.persons.length; i++) {
      if (
        props.persons[i].name === newName &&
        props.persons[i].number === newNumber
      ) {
        found = true
        break
      }
    }

    if (found) {
      alert("$(newName) on jo luettelussa")
    } else {
      let new_person = { name: newName, number: newNumber }
      let clone = create(new_person)

      props.setPersons(clone)
    }
  }

  return (
    <form onSubmit={submit}>
      <div>
        nimi: <input onChange={event => setNewName(event.target.value)} />
      </div>
      <div>
        numero: <input onChange={event => setNewNumber(event.target.value)} />
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  )
}

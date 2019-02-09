import React, { useState } from "react"
import networkService from "./network"

const updateList = (setShown, setPersons) => {
  networkService.getAll().then(response => {
    setPersons(response)
    setShown(response)
  })
}

export const Numbers = ({ persons, setShown, setPersons, setErrorMessage}) => {
  const handleClick = person => {
    if (window.confirm(`poistetaanko ${person.name}`)) {
      networkService.remove(person.id).then(() => {
        updateList(setShown, setPersons)
      }).catch(response => setErrorMessage(`error removing ${person.name}, already removed`))
    }
  }

  let rows = persons.map(person => {
    return (
      <p key={person.name}>
        {person.name} {person.number}{" "}
        <button onClick={() => handleClick(person)}>poista</button>
      </p>
    )
  })
  return rows
}

export const PersonForm = props => {
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const submit = event => {
    event.preventDefault()

    let found = false
    let id = -1
    for (let i = 0; i < props.persons.length; i++) {
      if (props.persons[i].name === newName) {
        found = true
        id = props.persons[i].id
        break
      }
    }

    let new_person = { name: newName, number: newNumber }
    if (found) {
      if (window.confirm(`${newName} on jo luettelussa, haluutko korvata`)) {
        networkService
          .put(new_person, id)
          .then(() => updateList(props.setShown, props.setPersons))
          .catch('error changing the number')
      }
    } else {
      networkService
        .post(new_person)
        .then(response => updateList(props.setShown, props.setPersons))
        .catch(response => props.setErrorMessage('error adding new person to list'))
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



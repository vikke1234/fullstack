import React, { useState } from "react"
const Numbers = ({ persons }) => {
  let rows = persons.map(person => (
    <p key={person.name}>
      {person.name} {person.number}
    </p>
  ))
  return rows
}
const PersonForm = (props) => {
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const submit = event => {
    event.preventDefault()

    let found = false
    for (let i = 0; i < props.persons.length; i++) {
      if (props.persons[i].name === newName && props.persons[i].number === newNumber) {
        found = true
        break
      }
    }

    if (found) {
      alert("$(newName) on jo luettelussa")
    } else {
      let clone = [...props.persons]
      clone.push({ name: newName, number: newNumber })
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

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Martti Tienari', number: '040-123456' },
    { name: 'Arto Järvinen', number: '040-123456' },
    { name: 'Lea Kutvonen', number: '040-123456' }
  ])

  const [shown, setShown] = useState(persons)

  const filter = (name) => {
    setShown(persons.filter(person => person.name.toLowerCase().includes(name)))
  }
  return (
    <div>
      
      <h2>Puhelinluettelo</h2>
      rajaa: <input onChange = {(event) => filter(event.target.value)} />

      <h3>lisäää uusi</h3>
      <PersonForm persons = {persons} setPersons = {setPersons}/>

      <h2>Numerot</h2>
      <div>
        <Numbers persons={shown} />
      </div>
    </div>
  )
}


export default App

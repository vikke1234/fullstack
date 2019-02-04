import React from "react"

const Part = (part) => {
  return (
    <p>{part.name} {part.exercises} </p>
  )
}

const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Content = ({ parts }) => {
  let rows = parts.map(part => (
    <Part key = {part.id} name = {part.name} exercises = {part.exercises} />
  ))
  let sum = parts
    .map(part => part.exercises)
    .reduce((prev, cur) => (prev += cur))

  rows.push(<p key={parts[parts.length - 1].id + 1}>yhteensä {sum} </p>)
  return <div> {rows} </div>
}

const Course = ({ courses }) => {
  let content = courses.map(course => {
    return (
      <div key={course.id}>
        <Header title={course.name} />
        <Content parts={course.parts} />
      </div>
    )
  })

  return <div>{content}</div>
}

export default Course
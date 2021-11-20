import React from 'react'

const Course = ({ header, content }) => {

  return (
    <div>
      <Header header={header} />
      <Content content={content} />
    </div>
  )

}

const Header = ({ header }) => {

  return (
    <h1>{header}</h1>
  )
}

const Content = function ({ content }) {
  const exercises = content.map(con => con.exercises)
  const total = exercises.reduce((previous, current) => {
    return previous + current
  })

  return (
    <div>
      {content.map(con => (
        <p key={con.id}>{con.name} {con.exercises}</p>
      ))}
      {total}
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  }


  return (
    <div>
      <Course header={course.name} content={course.parts} />
    </div>
  )

}

export default App
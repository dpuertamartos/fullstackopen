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
      <h2>{header}</h2>
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
        <h3> total of {total} exercises </h3>
      </div>
    )
  }

export default Course
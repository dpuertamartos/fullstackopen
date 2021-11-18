import React, { useState } from 'react'


const Display = ({ counter }) => <span>{counter}</span>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Header = ({header}) => <h1>{header}</h1>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Header header={'give feedback'} />
      <Button
        onClick={increaseGood}
        text='good'
      />
      <Button
        onClick={increaseNeutral}
        text='neutral'
      />     
      <Button
        onClick={increaseBad}
        text='bad'
      />
      <Header header={'statistics'} />
      <div>good <Display counter={good}/></div>
      <div>neutral <Display counter={neutral}/></div>
      <div>bad <Display counter={bad}/></div>

    </div>
  )
}

export default App
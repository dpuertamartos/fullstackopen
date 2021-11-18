import React, { useState } from 'react'

const Header = ({header}) => <h1>{header}</h1>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Display = ({ counter }) => <span>{counter}</span>

const Statistics = ({ good,neutral,bad }) => {
  return(
  <div>
    <div>Total {good+neutral+bad}</div>
    <div>Average  {(good-bad)/(good+neutral+bad)}</div>
    <div>Positive {good*100/(good+neutral+bad)}%</div>
  </div>)
}




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
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App
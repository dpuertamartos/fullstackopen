import React, { useState } from 'react'

const Header = ({header}) => <h1>{header}</h1>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ good,neutral,bad }) => {
  return(
  <table>
    <tbody>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="Total" value ={good+neutral+bad} />
      <StatisticLine text="Average" value ={(good-bad)/(good+neutral+bad)} />
      <StatisticLine text="Positive" value ={good*100/(good+neutral+bad)} />
    </tbody> 
  </table>)
}

const StatisticLine = ({ text, value }) =>{
  return(
    <tr>
      <td>{text}  </td> 
      <td>{value} </td> 
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  
  if (good+neutral+bad === 0) {
    return(
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
        <div>No feedback given</div>
        
      </div>
    )
  }

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
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App
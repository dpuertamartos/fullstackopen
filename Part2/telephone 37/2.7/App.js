import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      id: 1
  }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject={
      name: newName,
      id: persons.length + 1
    }
    if (persons.map(person=>person.name).includes(nameObject.name) === true){
      window.alert(`${nameObject.name} already added to phonebook`)
      console.log('failed adding')
    }
    else{
      setPersons(persons.concat(nameObject))
      setNewName('')  
      console.log("success adding")
    }
    console.log('add button clicked', event.target)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person=>
          <div key={person.id}>{person.name}</div>
          )}
      </div>
      
    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({name, handle}) =>{
  return(
  <form>
  search : <input value={name} onChange={handle}/>  
  </form>)
}

const PersonForm = ({onSubmit,namevalue,nameonChange, telvalue, telonChange}) => {
  return(
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={namevalue} onChange={nameonChange}/>
      </div>
      <div>
        telephone: <input value={telvalue} onChange={telonChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    )
}

const Persons = ({persons, nameFilter}) => {
  return(
  persons.map(person=>{
    if(person.name.toLowerCase().includes(nameFilter.toLowerCase())===true){
    return <div key={person.id}>{person.name} {person.telephone}</div>
    }
    else{
      return console.log('No match')
      }}
    )
  )    
}

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newTelephone, setNewTelephone ] = useState('')
  const [ nameFilter, setNewFilter ] = useState('')
  
  useEffect( () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  
  console.log('render', persons.length, 'persons')
  
  const addName = (event) => {
    event.preventDefault()
    const nameObject={
      name: newName,
      telephone: newTelephone,
      id: persons.length + 1
    }
    if (persons.map(person=>person.name).includes(nameObject.name) === true){
      window.alert(`${nameObject.name} already added to phonebook`)
      console.log('failed adding')
    }
    else{
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewTelephone('')  
      console.log("success adding")
    }
    console.log('add button clicked', event.target)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleTelephoneChange = (event) => {
    console.log(event.target.value)
    setNewTelephone(event.target.value)
  }

  return (
    <div>
      <Filter name={nameFilter} handle={handleSearchChange} />
      <h2>Phonebook</h2>
      <PersonForm onSubmit={addName} namevalue={newName} nameonChange={handleNameChange} 
      telvalue={newTelephone} telonChange={handleTelephoneChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={nameFilter} />
    </div>
  )
}

export default App
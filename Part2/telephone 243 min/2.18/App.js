import React, { useState, useEffect } from 'react'
import telephoneService from './services/telephone.js'


const Filter = ({name, handle}) =>{
  return(
  <form>
  filter shown with : <input value={name} onChange={handle}/>  
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

const Persons = ({persons,nameFilter,handleRemove}) => {
  return(
  persons.map(person=>{
    if(person.name.toLowerCase().includes(nameFilter.toLowerCase())===true){
    return <div key={person.id}>{person.name} {person.number} <button onClick={() => handleRemove(person)}>delete</button></div>
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
    telephoneService
      .getAll()
      .then(returnedTelephone => {
        console.log('show all telephones')
        setPersons(returnedTelephone)
      })
  }, [])
  
  console.log('render', persons.length, 'persons')
  
  const addName = (event) => {
    event.preventDefault()
    const nameObject={
      name: newName,
      number: newTelephone,
      id: persons.slice(-1).id + 1
    }
    if (persons.map(person=>person.name).includes(nameObject.name) === true){
      
      const personToUpdate = persons.find(p => p.name === nameObject.name)
      const changedPersonToUpdate = { ...personToUpdate, number: nameObject.number}
      
      if (window.confirm(`${nameObject.name} is already in the database, do you want to
      update the number?`)){
        telephoneService
          .update(personToUpdate.id, changedPersonToUpdate)
          .then(returnedTelephone => {       
            setPersons(persons.map(person => person.id !== personToUpdate.id ? person : returnedTelephone))
            }
          ) 
      }
    }
    else{
      telephoneService
        .create(nameObject)
        .then(returnedTelephone => {
          setPersons(persons.concat(returnedTelephone))
          setNewName('')
          setNewTelephone('')
        })   
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

  const handleRemove = (personToRemove) =>{
    if (window.confirm(`Do you want to remove ${personToRemove.name}?`)){
      telephoneService
      .remove(personToRemove.id)
      .then(        
        setPersons(persons.filter(person => person.id !== personToRemove.id))
      )     
    } 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter name={nameFilter} handle={handleSearchChange} />
      <h2>add a new</h2>
      <PersonForm onSubmit={addName} namevalue={newName} nameonChange={handleNameChange} 
      telvalue={newTelephone} telonChange={handleTelephoneChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={nameFilter} handleRemove = {handleRemove} />
    </div>
  )
}

export default App
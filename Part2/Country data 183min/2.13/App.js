import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({name, handle}) =>{
  return(
  <form>
  search : <input value={name} onChange={handle}/>  
  </form>)
}

const Countries = ({apidata, nameFilter, setFilter}) =>{
  
  const filteredApi = apidata.filter(apidata => apidata.name.common.toLowerCase().includes(nameFilter.toLowerCase()))
  console.log('filteredApi',filteredApi)
  
  if (filteredApi.length===1){
    const selected=filteredApi[0]
    const languages = Object.values(selected.languages)

    return(
      <div>
      <h1>{selected.name.common}</h1>
      <p>Capital {selected.capital[0]}</p>
      <p>Population {selected.population}</p>
      <h2>languages</h2>
      <ul>
        {languages.map(l => <li key={l}>{l}</li>)}
      </ul>
      <img src={selected.flags.png} alt="flag.png" />
      </div>
    )
  }
  else if(filteredApi.length <11){
    return(
      <ul>
      {filteredApi.map(data => <li key={data.cca3}>{data.name.common} <button onClick={()=>setFilter(data.name.common)}>show</button></li>)}
      </ul>
    )
  }
  else{
    return <div>Too many matches, specify more</div>  
  }
  
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [nameFilter, setNewFilter] = useState('') 

  useEffect( () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  console.log(countries)
  console.log('render', countries.length, 'countries')

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }
  
  return (
    <div>
        <Filter name={nameFilter} handle={handleSearchChange} />
        <Countries apidata={countries} nameFilter={nameFilter} setFilter={setNewFilter}/>
    </div>
  )
}

export default App
const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
      "name": "adssa",
      "number": "1234-21312",
      "id": 7
    },
    {
      "name": "David3",
      "number": "123456",
      "id": 11
    },
    {
      "name": "david",
      "number": "1234567",
      "id": 12
    }
  ]


app.get('/api/persons', (request, response) => {
    response.json(persons)
    })  

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
    })

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    
    response.status(204).end()
    })

const generateId = () => {
    return Math.floor(Math.random()*10000)
    }
    
app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({ 
        error: 'name or telephone missing' 
        })
    }
    else if (persons.map(person=>person.name.toLowerCase()).includes(body.name.toLowerCase())) {
        return response.status(400).json({ 
        error: 'name already added' 
        })
    }
      
    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    }

    persons = persons.concat(person)

    response.json(person)
    })    

app.get('/info', (request, response) => {
    response.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>
        `)
    })      

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
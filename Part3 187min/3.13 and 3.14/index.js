const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const morgan = require('morgan')
const Person = require('./models/person')
const cors = require('cors')


const app = express()

app.use(cors())
app.use(express.static('build'))

morgan.token('nname', function(req, res) {  
    return JSON.stringify(req.body);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :nname'
))

app.use(express.json())

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
      response.json(person)
    })
  })
/* app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
    }) */

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    
    response.status(204).end()
    })

app.post('/api/persons', (request, response) => {
    const body = request.body
    
    if (body.name === undefined) {
        return response.status(400).json({ error: 'content missing' })
    }
    
    const person = new Person({
        name: body.name,
        number: body.number,
    })
    
    person.save().then(savedNote => {
        response.json(savedNote)
    })
})    

/* app.post('/api/persons', (request, response) => {
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
    })   */  

/* app.get('/info', (request, response) => {
    response.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>
        `)
    })  */

app.get('/', function (req, res) {
    res.send('hello, world!')
    })    

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
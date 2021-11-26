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

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id).then(person => {
      if (person) {response.json(person)}
      else {response.status(404).end()}
    })
    .catch(error => next(error))
           
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
    const person = {
        name: body.name,
        number: body.number,
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
        response.json(updatedPerson)
    })
    .catch(error => next(error))           
})

app.post('/api/persons', (request, response, next) => {
    const body = request.body     
    const person = new Person({
        name: body.name,
        number: body.number,
    })
    
    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
    .catch(error => next(error))
})    


app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
    })

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } 
    
    next(error)
    }
    
app.use(errorHandler)    

app.get('/info', (request, response) => {
    Person.find({}).then(persons=>{
    response.send(`
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>
    `)
    })
}) 

app.get('/', function (req, res) {
    res.send('hello, world!')
    })    

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
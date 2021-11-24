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

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
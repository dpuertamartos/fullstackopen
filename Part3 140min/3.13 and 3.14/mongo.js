const mongoose = require('mongoose')


const password = process.argv[2]  
const url =
  `mongodb+srv://fullstackopendavid:${password}@cluster0.nvta5.mongodb.net/telephone-app?retryWrites=true&w=majority`

if (process.argv.length < 3) {
  
    Person.find({}).then(result => {
        result.forEach(person => {
        console.log(person)
        })
        mongoose.connection.close()
    })
    console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema) 

if (process.argv.length === 3) {
    Person.find({}).then(result => {
        result.forEach(person => {
          console.log(person)
        })
        mongoose.connection.close()
      })
    
    console.log('showing all persons in db!')
  }

else if (process.argv.length >4) {
    
    
    const nameadded = process.argv[3]
    const telephoneadded = process.argv[4]

    const person = new Person({
        name: nameadded,
        number: telephoneadded,
      })
      
      person.save().then(result => {
        console.log('person saved!')
        mongoose.connection.close()
      }) 
}  

else {
    console.log('you forgot to add the name or telephone')
    mongoose.connection.close()
    process.exit(1)
}

/* // Create a person

const person = new Person({
  name: nameadded,
  number: telephoneadded,
})

person.save().then(result => {
  console.log('person saved!')
  mongoose.connection.close()
}) 

// Show all persons in console

Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  }) */
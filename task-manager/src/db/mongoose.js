const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User', {
//     name: {
//        type: String 
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Andrew',
//     age: 27
// })

// me.save().then(result => {
//     console.log(result)
// }).catch(error => {
//     console.log(error)
// })
const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const houseCleaning = new Task({
    description: "Clean the house",
    completed: true
})

houseCleaning.save().then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})


const mongoose = require('mongoose');
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User', {
//     name: {
//        type: String,
//        required: true,
//        trim: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if(!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value) {
//             if(value.toLowerCase().includes('password')) {
//                 throw new Error('Password can not contain "password"')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if(value < 0) {
//                 throw new Error('Age must be a positive number');
//             }
//         }
//     }
// })

// const me = new User({
//     name: '   Andrew  ',
//     email: 'MYEMAIL@MEad.io',
//     password: 'Hello@123.'
// })

// me.save().then(result => {
//     console.log(result)
// }).catch(error => {
//     console.log(error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

const houseCleaning = new Task({
    description: "   Learn Mongoose",
})

houseCleaning.save().then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})


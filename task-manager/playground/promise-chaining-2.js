const mongoose = require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('6071a6b3edfe460a74e6482c').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((count) => {
    console.log(count)
}).catch(e => {
    console.log(e)
}) 
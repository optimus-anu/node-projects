const mongoose = require('../src/db/mongoose')
const Task = require('../src/models/task')

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('607bbcf3c301861d20c8e495').then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})
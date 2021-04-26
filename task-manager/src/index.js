const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


const main = async () => {
    // const task = await Task.findById('6081534a606a441de857c374')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    const user = await User.findById('6081524538ee1b1e7ca34318')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
    
}
main()
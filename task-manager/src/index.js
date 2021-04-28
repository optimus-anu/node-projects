const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

const port = process.env.PORT || 3000

const multer = require('multer')
const { db } = require('./models/task')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('File must be a word document'))
        }
        cb(undefined, true)
    }
})

const errorMiddleware = (req, res, next) => {
    throw new Error('From my middleware')
}
app.post('/upload', upload.single('upload') , (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

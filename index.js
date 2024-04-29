const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')
const { resourceLimits } = require('worker_threads')


const app = express()
app.use(cors())
app.use(express.json())



mongoose.connect('mongodb://192.168.0.169:27017/')

app.post('/add', (req, res => {
    const task = req.body.task;
    TodoModel.create({
        task: task 
    }).then(result => res.json(result))
    .catch(err => res.json(err))
}))

app.listen(3001, () =>  {
    console.log("Server is Running")
})
const mongoose = require('mongoose')
const TodoSchema = new mongoose.Schema({
    task: string 
})

const TodoModel = mongoose.model("todos", TodoSchema)
module.exports = TodoModel
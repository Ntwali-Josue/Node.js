const express = require('express')
const mongoose = require('mongoose')
const app = express()
const jwt = require('jsonwebtoken')

mongoose.connect('mongodb://localhost/blogs', {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser:true});
const db =mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Database Connected'))

app.use(express.json())

const blogsRouter =require('./routes/blogs');
const userRouter = require('./routes/user')
app.use('/blogs', blogsRouter)
app.use('/user',userRouter)

app.listen(4500, () => 
    console.log('Server Started')
)
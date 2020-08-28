const express = require('express')
const mongoose = require('mongoose')
const app = express()
const jwt = require('jsonwebtoken')
const URI = "mongodb+srv://dbJosh:dbJosh@cluster0.s5ejl.mongodb.net/dbJosh?retryWrites=true&w=majority"

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser:true
}).then(() => console.log('Database Connected'))
    .catch((err) => console.log(err));

app.use(express.json())

const blogsRouter =require('./routes/blogs');
const userRouter = require('./routes/user')
app.use('/blogs', blogsRouter)
app.use('/user',userRouter)

app.listen(4500, () => 
    console.log('Server Started')
)

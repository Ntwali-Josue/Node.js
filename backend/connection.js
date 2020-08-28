const mongoose = require('mongoose');

const URI = "mongodb+srv://<dbJosh>:<dbJosh>@cluster0.s5ejl.mongodb.net/<blogs>?retryWrites=true&w=majority"

const connectDB = async () => {
    await mongoose.connect(URI);
    console.log('db connected!')
}



module.exports = connectDB;
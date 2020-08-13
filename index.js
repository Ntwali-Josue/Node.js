// // // the function which reverse a number 

// function reverse(num){
//     let x = num.toString().split('').reverse().join('');
//     return x;
// }

// let result = reverse('04690');
// console.log(result)


//working with node.js and my server

var express = require('express')
var app = express()

app.get('/get', function(req,res){
    // console.log(req)
    res.send('Hello Josh')
})

app.listen(5000,function(){
    console.log('localhost: 5000')
})

// import express from 'express';
 
// const app = express();
 
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
 
// app.listen(5000, () =>
//   console.log('localhost: 5000'),
// );

const{MongoClient}
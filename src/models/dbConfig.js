const mongoose = require('mongoose')

mongoose.connect(
    "mongodb+srv://alex:alex@serverlessinstance0.jcd82.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (!err) console.log('Mongodb connected');
        else console.log("Connection error : "+ err)
    },

)
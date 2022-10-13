const mongoose = require('mongoose')

mongoose.connect(
    "mongodb+srv://alex:alex@cluster0.v4itsq8.mongodb.net/testo?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (!err) console.log('Mongodb connected');
        else console.log("Connection error : "+ err)
    }
)
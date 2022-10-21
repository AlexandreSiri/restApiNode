const mongoose = require('mongoose')

mongoose.connect(
    "mongodb+srv://alex:alex@cluster0.v4itsq8.mongodb.net/testo?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (!err) console.log('Mongodb connected');
        else console.log("Connection error : "+ err)
    },

)

// const mongo = require('mongodb').MongoClient;
// global.allCollections = [];
// mongo.connect("mongodb+srv://alex:alex@cluster0.v4itsq8.mongodb.net/testo?retryWrites=true&w=majority", function(err, client) {
// const db = client.db('scanQR')
// db.listCollections().toArray(function(err, collections) {
//     if(err) console.log(err);
//     console.log(collections)
//     //iterate to each collection detail and push just name in array
//     collections.forEach(eachCollectionDetails => {
//         allCollections.push(eachCollectionDetails.name);
//     });
//     //close client
//     client.close();
//  });
// });

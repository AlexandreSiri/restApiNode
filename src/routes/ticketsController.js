const express = require('express')
const { send } = require('express/lib/response')
const router = express.Router()

const {TicketsModel} = require('../models/tickets.model')

router.get('/',(req,res) => {
    TicketsModel.find((err,docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data : " + err)
    })
})

router.post('/',(req,res) =>{
    const newRecord = new TicketsModel({
        code: req.body.code
        });

    newRecord.save((err,docs) =>{
         if (!err) res.send(docs);
        else console.log('Error creating new data ' + err)
    })
})

router.get('/:code',(req,res) =>{
    const alex = TicketsModel.findOneAndUpdate
    (
        {
            code: req.params.code,
            used: false
        },
        {
            code: req.params.code,
            used: true
        },
        {new: true},
        (err, doc) =>{
            if (err) console.log("Something bad")
            if (doc !== null) res.send(true)
            else res.send(false)
        }
    )
})

module.exports = router
const express = require('express')
const { send } = require('express/lib/response')
const { default: mongoose } = require('mongoose')
const router = express.Router()

const {TicketsModel} = require('../models/tickets.model')

global.keyTicket = ''
global.collection = ""


router.post('/collections/:id', (req,res) =>{
    collection = req.params.id
    console.log(req.params.id)
    res.status(201).send();
})

router.post('/key/:keyTicket',(req,res) =>{
    keyTicket = req.params.keyTicket
    console.log(keyTicket)
    res.status(201).send()
})

router.get('/getUsers',(req,res)=>{
    TicketsModel.find({},{_id:0,TicketIDNumeric:0,OrderID:0,AttendeeEmail:0,TicketType:0,PurchaserEmail:0,PurchaserFirstName:0,PurchaserLastName:0,OrderStatus:0,PaymentMethod:0,OrderDate:0,SeatRowName:0,SeatNumber:0,CheckIn:0,__v:0})
    .then((result) => {
        console.log(JSON.stringify(result))
        res.send(JSON.stringify(result))
    }).catch((err) =>{console.log(err)})
})


router.get('/:code',(req,res) =>{
    if (keyTicket.length > 2){
        const lengthKey = keyTicket.length
        const check = req.params.code.substring(0,lengthKey)
        if (check === keyTicket){
            const ticket = TicketsModel.findOne({
                TicketID: `#${req.params.code}`,
                TicketStatus: "Checked In",
            },(err, doc) =>{
                if (err) console.log(err)
                if (doc == null){
                    TicketsModel.create(
                        {    
                            TicketID: `#${req.params.code}`,
                            TicketIDNumeric: parseInt(`${req.params.code}`),
                            OrderID: -1,
                            AttendeeFirstName: "",
                            AttendeeLastName: "",
                            AttendeeEmail: "",
                            TicketStatus:  "Checked In",
                            TicketType: "Billeterie",
                            Variation: "",
                            PurchaserFirstName: "",
                            PurchaserLastName: "",
                            PurchaserEmail: "",
                            OrderStatus: "Completed",
                            PaymentMethod: "systempaystd",
                            OrderDate: Date.now(),
                            SeatRowName: "",
                            SeatNumber: "",
                            CheckIn: `${Date.now()}`
                        }
                    )
                    return res.status(200).send()
                }
                else return res.status(403).send()
            })

        }
        return 30
    }else{
    TicketsModel.findOneAndUpdate
    (
        {
            TicketID: `#${req.params.code}`,
            TicketStatus: "Not Checked In"
        },
        {
            TicketID: `#${req.params.code}`,
            TicketStatus: "Checked In",
            CheckIn: `${Date.now()}`
        },
        {new: true},
        (err, doc) =>{
            if (err) console.log("Une erreur s'est produite")
            if (doc !== null) {console.log(doc); return res.status(200).send();}
            else return res.status(403).send()
        }
    )
    }
})

router.get('/verif/:code', (req,res) =>{
    TicketsModel.findOne
    (
        {
            TicketID: `#${req.params.code}`,
            TicketStatus: 'Checked In'
    },
    (err, doc) =>{
        if (err) console.log("Une erreur s'est produite")
        if (doc !== null) {console.log(doc);return res.status(204).send()}
        else return res.status(200).send()
    })
})

router.post('/changeState/:id',(req,res) => {
    console.log(req.params.id)
    TicketsModel.findOneAndUpdate
    (
        {
            TicketID: `#${req.params.id}`,
            TicketStatus: "Not Checked In"
        },
        {
            TicketID: `#${req.params.id}`,
            TicketStatus: "Checked In",
            CheckIn: `${Date.now()}`
        },
        {new: true},
        (err, doc) =>{
            if (err) console.log("Une erreur s'est produite")
            if (doc !== null) {console.log(doc);console.log('ouiii'); return res.status(200).send();}
            else return res.status(403).send()
        }
    )
    TicketsModel.findOneAndUpdate
    (
        {
            TicketID: `#${req.params.id}`,
            TicketStatus: "Checked In"
        },
        {
            TicketID: `#${req.params.id}`,
            TicketStatus: "Not Checked In",
            CheckIn: `${Date.now()}`
        },
        {new: true},
        (err, doc) =>{
            if (err) console.log("Une erreur s'est produite")
            if (doc !== null) {console.log(doc);console.log('ouiii'); return res.status(200).send();}
            else return res.status(403).send()
        }
    )
    
})



module.exports = router
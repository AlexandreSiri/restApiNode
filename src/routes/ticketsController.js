const express = require('express')
const { send } = require('express/lib/response')
const { default: mongoose } = require('mongoose')
const router = express.Router()

const {TicketsModel} = require('../models/tickets.model')

global.keyTicket = ''

router.get('/collections', (req,res) =>{
    console.log(typeof(allCollections))
    console.log(JSON.stringify(allCollections))
    console.log(typeof(JSON.stringify(allCollections)))
    res.send(JSON.stringify(allCollections))
})

router.post('/key/:keyTicket',(req,res) =>{
    keyTicket = req.params.keyTicket
    console.log(keyTicket)
    res.status(201).send()
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
            if (doc !== null) {console.log(doc);console.log('ouiii'); return res.status(200).send();}
            else return res.status(403).send()
        }
    )
    }
})




module.exports = router
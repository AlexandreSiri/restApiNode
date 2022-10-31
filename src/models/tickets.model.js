const mongoose = require('mongoose');

const TicketsModel = new mongoose.Schema({
      TicketID: {type: String,Required: true},
      TicketIDNumeric: {type: Number, Required: true},
      OrderID: {type: Number, Required: true},
      AttendeeFirstName: {type: String, Required: true},
      AttendeeLastName: {type: String, Required: true},
      AttendeeEmail: {type: String, Required: true},
      TicketStatus: {type: String, Required: true},
      TicketType: {type: String, Required: true},
      Variation: {type: String, Required: true},
      PurchaserFirstName: {type: String, Required: true},
      PurchaserLastName: {type: String, Required: true},
      PurchaserEmail: {type: String, Required: true},
      OrderStatus: {type: String, Required: true},
      PaymentMethod: {type: String, Required: true},
      OrderDate: {type: Date, Required: true},
      SeatRowName: {type: String, Required: true},
      SeatNumber: {type: String, Required: true},
      CheckIn:{type: String, Required: true}
   },{collection: 'angers04-11-2022'}
)

module.exports = {TicketsModel};
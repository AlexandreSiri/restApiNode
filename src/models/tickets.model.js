const mongoose = require('mongoose');

const TicketsModel = mongoose.model(
   "appQR",
   {
      code:{
         type: String,
         required: true
      },
      used: {
         type: Boolean,
         default: false,
         equired: true
      },
      createdAt: {
         type: Date,
         default: Date.now(),
         required: false
      },
      updateAt: { 
         type: Date,
         default: Date.now(),
         required: true
      }

   },
   "Tickets"
)

module.exports = {TicketsModel};
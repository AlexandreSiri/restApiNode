const express = require('express');
require('./models/dbConfig')
const bodyParser = require('body-parser');
const helmet = require('helmet');
const ticketsRoutes = require('./routes/ticketsController')
const PORT = process.env.PORT || 8080

// defining the Express app
const app = express();
global.collection = ""
app.use(bodyParser.json());
app.use('/tickets',ticketsRoutes)
app.get('/',(req,res) =>{
  res.send('Hello')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
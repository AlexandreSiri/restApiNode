const express = require('express');
require('./models/dbConfig')
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const ticketsRoutes = require('./routes/ticketsController')

// defining the Express app
const app = express();

app.use(bodyParser.json());
app.use('/tickets',ticketsRoutes)

app.listen(3001, () => {
  console.log('listening on port 3001');
});
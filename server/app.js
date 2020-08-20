const express = require('express')
const app = express()

const index = require('./routes/index.js');
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/', index);

const PORT = 3000 

app.listen(PORT, () => {
  console.log(`online: ${PORT} !`);
})
const express = require('express') //ES5
const mongoose = require('mongoose')
const products = require('./routes/Products')
const app = express()
const connectDB = require('./config/db')

connectDB();
/*app.get('/', (req, res) => res.send('API Running'));*/

// middleware to parse the body of requests
app.use(express.json())
app.use('/product', products )



// Connect to Database
/*const db = 'mongodb://localhost/camera' // database = contactfs9
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(console.log('Connected to database'))
    .catch(err => console.log(err))*/

// Server listening to a specific port (Pinging)
app.listen(5000, err => {
    if(err) console.log(err)
    console.log('Server is running on port 5000')
})
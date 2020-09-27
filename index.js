const config = require('config')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require('mongoose')
const users = require('./routes/users')
const auth = require('./routes/auth')
const addbook = require('./routes/addbook')
const getAllBooks = require('./routes/getAllBooks')
const buybook = require('./routes/buybook')
const express = require('express')
const app = express()
var cors = require('cors')

console.log("config.get('PrivateKey')::" + config.get('PrivateKey'))
// if (!config.get('PrivateKey')) {
//   console.error('FATAL ERROR: PrivateKey is not defined.')
//   process.exit(1)
// }

mongoose.connect('mongodb+srv://abc123:mokesh100@cluster0-skocn.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Now connected to MongoDB!'))
  .catch(err => console.error('Something went wrong', err))

app.use(cors())
app.use(express.json())
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/api/addbook', addbook)
app.use('/api/getallbooks', getAllBooks)
app.use('/api/buybook', buybook)

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on port ${port}...`))

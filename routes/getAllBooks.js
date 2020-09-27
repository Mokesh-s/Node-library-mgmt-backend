const { Book } = require('../models/user')
const express = require('express')
const router = express.Router()
const _ = require('lodash')

router.get('/', async (req, res) => {

  // Check if this user already exisits
  const book = await Book.find()
  console.log('All books: ' + book)
  res.send(book)
})

module.exports = router

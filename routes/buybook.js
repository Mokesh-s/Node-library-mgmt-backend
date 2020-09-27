const { Book } = require('../models/user')
const express = require('express')
const router = express.Router()
const _ = require('lodash')
const mongodb = require('mongodb')

router.post('/', async (req, res) => {

  // Check if this user already exisits

  await Book.update({ book_id: req.body.book_id }, { status: 'booked' }, { multi: true })
  // console.log('book ' + book)
  // await book.save()
  // res.send(_.pick(book, ['book_id', 'title', 'author_name', 'cost']))
  let book = await Book.findOne({ book_id: req.body.book_id } )
  res.send(book)
})

module.exports = router

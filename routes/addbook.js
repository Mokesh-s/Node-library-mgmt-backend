const { Book, validatebook } = require('../models/user')
const express = require('express')
const router = express.Router()
const _ = require('lodash')

router.post('/', async (req, res) => {
  // First Validate The Request
  const { error } = validatebook(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  // Check if this user already exisits
  let book = await Book.findOne({ book_id: req.body.book_id })
  if (book) {
    return res.status(400).send('That book id already exisits!')
  } else {
    // Insert the new book if they do not exist yet
    book = new Book(_.pick(req.body, ['book_id', 'title', 'author_name', 'cost']))
    await book.save()
    res.send(_.pick(book, ['book_id', 'title', 'author_name', 'cost']))
  }
})

module.exports = router

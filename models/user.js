const Joi = require('joi')
const mongoose = require('mongoose')

const User = mongoose.model('User', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  role: ''
}))

function validateUser (user) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  }
  return Joi.validate(user, schema)
}

const Book = mongoose.model('book', new mongoose.Schema({
  book_id: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  author_name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  cost: {
    type: Number,
    required: true,
    minlength: 2,
    maxlength: 8
  },
  status: {
    type: String
  }
}))

function validatebook (book) {
  const schema = {
    book_id: Joi.string().min(5).max(50).required(),
    title: Joi.string().min(5).max(255).required(),
    author_name: Joi.string().min(5).max(255).required(),
    cost: Joi.number().integer().min(5).required(),
    status: Joi.string()
  }
  console.log(book)
  return Joi.validate(book, schema)
}

exports.User = User
exports.validate = validateUser
exports.Book = Book
exports.validatebook = validatebook

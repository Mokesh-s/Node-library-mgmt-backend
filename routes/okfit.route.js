var global = require('../global')
var express = require('express')
var OkFitFile = require('../models/OkFit')
const okFitRoutes = express.Router()
const { okFitFetchData } = require('../API/ApiRequest.js')

const validateEnquiry = (request) => {
  if (request && request.enquiry_name && request.enquiry_phone && request.enquiry_gender) {
    return true
  }
  return false
}

okFitRoutes.route('/enquiry').post((req, res) => {
  var { enquiry_name, enquiry_phone, enquiry_email, enquiry_gender, enquiry_followUpDate, enquiry_notes } = req.body
  if (!validateEnquiry(req.body)) {
    res.status(400)
      .send({
        status: 400,
        message: 'Bad request'
      })
      .end()
  } else {
    const Enquiry = new OkFitFile.Enquiry(enquiry_name, enquiry_phone, enquiry_email, enquiry_gender, enquiry_followUpDate, enquiry_notes)
    console.log('Enquiry obj === ' + JSON.stringify(Enquiry))
    console.table(Enquiry)
    okFitFetchData(Enquiry).then(response => {
      console.table(response)
      if (response.success === 'Enquiry has been successfully added') {
        res.status(200)
          .send({
            status: 200,
            message: 'success'
          })
          .end()
      } else {
        res.status(400)
          .send({
            status: 400,
            message: response.err
          })
          .end()
      }
    })
  }
})

module.exports = okFitRoutes

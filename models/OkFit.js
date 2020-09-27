module.exports.Enquiry = function (name, phone, email, gender, followUpDate = '', notes = '') {
  this.enquiry_name = name
  this.enquiry_phone = phone
  this.enquiry_email = email
  this.enquiry_gender = gender
  this.enquiry_followUpDate = followUpDate
  this.enquiry_notes = notes
}

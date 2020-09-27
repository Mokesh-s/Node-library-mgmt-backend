/* Below fetchData method reference site - https://github.com/github/fetch */
const fetch = require('cross-fetch')
const baseURL = 'https://portal.okfit.in/remote/enquiry/add' // live
// const baseURL = 'https://staging.okfit.in/remote/enquiry/add' // staging

module.exports.okFitFetchData = function (reqBody) {
  return fetch(baseURL, {
    method: 'POST',
    headers: {
      authorization: 'a1398f65-c781-4f42-a2d2-580441cbf1cc',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reqBody)
  }).then(data => { return parseJSON(data) })
    .catch(error => { return error })
}

function parseJSON (response) {
  return response.json()
}

var os = require('os')
var hostname = os.hostname()

const { Datastore } = require('@google-cloud/datastore')
if (hostname.includes('localhost')) { // checking for hostname
  module.exports.Datastore = new Datastore({
    projectId: 'aromathai-web',
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
  })
} else {
  module.exports.Datastore = new Datastore()
}

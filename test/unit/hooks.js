const mongoose = require('mongoose')

exports.mochaHooks = {
  afterAll(done) {
    mongoose.connection.close()
    done()
  },
}

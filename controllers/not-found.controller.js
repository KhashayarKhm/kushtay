const httpStatusCodes = require('http-status-codes')
const fs = require('node:fs')
const path = require('node:path')
const { marked } = require('marked')

const notFoundController = (_, res) => {
  fs.readFile(path.resolve('./README.md'), 'utf-8', (err, data) => {
    if (err) {
      throw err
    }

    const errorMsgMd = '### NOT FOUND!    ERROR_CODE: 404\n'
    const parsedFile = marked(errorMsgMd + data.toString())
    res.status(httpStatusCodes.StatusCodes.NOT_FOUND).send(parsedFile)
  })
}

module.exports = notFoundController

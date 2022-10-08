const httpStatusCodes = require('http-status-codes')
const fs = require('node:fs')
const path = require('node:path')
const { marked } = require('marked')

const homeController = (_, res) => {
  fs.readFile(path.resolve('./README.md'), 'utf-8', (err, data) => {
    if (err) {
      throw err
    }

    const parsedFile = marked(data.toString())
    res.status(httpStatusCodes.StatusCodes.OK).send(parsedFile)
  })
}

module.exports = homeController

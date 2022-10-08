const httpStatusCodes = require('http-status-codes')
const customAlphabet = require('nanoid').customAlphabet
const Link = require('../models/link.model')

const KEY_PREFIX = 'u'
const nanoid = customAlphabet('0123456789_abcdefghijklmnopqrstuvwxyz-')

const createLinkController = async (req, res) => {
  const link = await Link.create({
    origin: req.body.originUrl,
    key: KEY_PREFIX + nanoid(5),
    createdAt: Date.now(),
  })

  res.status(httpStatusCodes.StatusCodes.CREATED).json({
    link: process.env.APP_URL + '/' + link.key,
    createdAt: new Date(link.createdAt).toISOString(),
  })
}

module.exports = createLinkController

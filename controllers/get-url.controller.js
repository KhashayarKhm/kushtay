const Link = require('../models/link.model')
const httpStatusCode = require('http-status-codes')

const getURLController = async (req, res) => {
  const { urlKey } = req.params
  const link = await Link.findOne({ key: urlKey.toString() }).exec()
  if (link) {
    const { origin } = link
    res.redirect(httpStatusCode.StatusCodes.MOVED_PERMANENTLY, origin)
  } else {
    res.status(httpStatusCode.StatusCodes.NOT_FOUND).json({
      msg: `${httpStatusCode.ReasonPhrases.NOT_FOUND}: the key probably doesn't exist or expired`,
    })
  }
}

module.exports = getURLController

const httpStatusCodes = require('http-status-codes')
const { isWebUrl, hasProtocol } = require('../utils/web-url-regex')

const urlVerifyMiddleware = (req, res, next) => {
  const rawUrl = req.body.originUrl.toString()
  const normalizedUrl = hasProtocol(rawUrl) ? rawUrl : 'https://' + rawUrl
  if (isWebUrl(normalizedUrl)) {
    req.body.originUrl = normalizedUrl
    next()
  } else {
    res.status(httpStatusCodes.StatusCodes.BAD_REQUEST).json({
      msg: `${httpStatusCodes.ReasonPhrases.BAD_REQUEST}: invalid URL`,
    })
  }
}

module.exports = urlVerifyMiddleware

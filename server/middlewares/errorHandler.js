const errorHandler = (error, req, res, next) => {
  let status = error.status || 500
  let data = {message: error.message || 'Interval Server Error'}
  res.status(status).json(data)
}

module.exports = errorHandler

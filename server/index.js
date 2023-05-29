require('dotenv').config()
const cors = require('cors')
const express = require('express')
const router = require('./routes/weatherRoutes')
const errorHandler = require('./middlewares/errorHandler')

const PORT = process.env.PORT || 4000
const API_KEY = process.env.WEATHER_API

const app = express()
app.use(
  cors({
    origin: function (origin, callback) {
      return callback(null, true)
    },
  })
)
app.use(express.json())
app.use('/api', router)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))

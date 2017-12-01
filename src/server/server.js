const express = require('express')
let path = require('path')
let router = require('./routes/router.js')
let parser = require('body-parser')

let PORT = process.env.PORT || 3000

const app = express()

app.use(express.static(path.join(__dirname, '../client')))

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

app.use('/', router)

const server = app.listen(PORT, () => {
  console.log('Listening on port 3000...')
})

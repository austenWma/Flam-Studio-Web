const router = require('express').Router()
let express = require('express')
let path = require('path')

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client'));
})

module.exports = router

const express = require('express')
const db = require('../db')

const router = express.Router()

router.route('/').get((req, res) => {
  const components = db.create('components')
  res.status(201).send(components[components.length - 1])
})

module.exports = router

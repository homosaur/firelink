const express = require('express')
const db = require('../db')

const router = express.Router()

router.route('/').get((req, res) => {
  const components = db.create('components')
  res.status(200).send(components[components.length - 1].id)
})

module.exports = router

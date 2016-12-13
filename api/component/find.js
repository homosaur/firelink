const express = require('express')
const db = require('../db')

const router = express.Router()

router.route('/:id').get((req, res) => {
  const fetched = db.find('components', req.params.id)

  if (fetched) {
    res.status(200).send(fetched)
  }

  res.send(404)
})

module.exports = router

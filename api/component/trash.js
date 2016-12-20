const express = require('express')
const db = require('../db')

const router = express.Router()

router.route('/:id').get((req, res) => {
  const trashed = db.trash('components', req.params.id)

  if (trashed) {
    res.status(200).send(trashed)
  } else {
    res.status(400).send(trashed)
  }
})

module.exports = router

const express = require('express')
const db = require('../db')

const router = express.Router()

router.route('/:id').get((req, res) => {
  const recovered = db.recover('components', req.params.id)

  if (recovered) {
    res.status(200).send(recovered)
  } else {
    res.status(400).send(recovered)
  }
})

module.exports = router

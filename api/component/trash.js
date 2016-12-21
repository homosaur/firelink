import express from 'express'
import {trash} from '../db'

const router = express.Router()

router.route('/:id').get((req, res) => {
  const trashed = trash('components', req.params.id)

  if (trashed) {
    res.status(200).send(trashed)
  } else {
    res.status(400).send(trashed)
  }
})

export default router

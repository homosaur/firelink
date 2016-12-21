import express from 'express'
import {recover} from '../db'

const router = express.Router()

router.route('/:id').get((req, res) => {
  const recovered = recover('components', req.params.id)

  if (recovered) {
    res.status(200).send(recovered)
  } else {
    res.status(400).send(recovered)
  }
})

export default router

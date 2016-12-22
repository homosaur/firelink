import express from 'express'
import {find} from '../db'

const router = express.Router()

router.route('/:id').get((req, res) => {
  const fetched = find('components', req.params.id)

  if (fetched) {
    res.status(200).send(fetched)
  }

  res.status(404).send()
})

export default router

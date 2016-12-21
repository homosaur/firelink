import express from 'express'
import {create} from '../db'

const router = express.Router()

router.route('/').get((req, res) => {
  const components = create('components')
  res.status(201).send(components[components.length - 1])
})

export default router

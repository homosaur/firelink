import express from 'express'
const app = express()

import create from './component/create'
import find from './component/find'
import trash from './component/trash'
import recover from './component/recover'

// component API
app.use('/api/component/create', create)
app.use('/api/component/find', find)
app.use('/api/component/trash', trash)
app.use('/api/component/recover', recover)

// boot dat
app.listen(9001, () => {
  console.log('listening on port 9001')
})

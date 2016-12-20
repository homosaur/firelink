const express = require('express')

const app = express()

// component API
app.use('/api/component/create', require('./component/create'))
app.use('/api/component/find', require('./component/find'))
app.use('/api/component/trash', require('./component/trash'))

// boot dat
app.listen(9001, () => {
  console.log('listening on port 9001')
})

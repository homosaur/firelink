const express = require('express')

const app = express()

// component API
app.use('/api/component/create', require('./component/create'))

// boot dat
app.listen(9001, () => {
  console.log('listening on port 9001')
})

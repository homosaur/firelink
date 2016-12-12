const low = require('lowdb')
const uuid = require('shortid')

const db = low('.db.json')

module.exports = {
  create: function (type) {
    db.defaults({components: []})
      .value()

    return db.get(type)
      .push({id: uuid.generate()})
      .value()
  }
}

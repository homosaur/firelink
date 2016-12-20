const low = require('lowdb')
const uuid = require('shortid')

const db = low('.db.json')

// base model for Firelink
const baseModel = {
  components: []
}

module.exports = {
  /**
   * creates an object in the db of a defined type
   * @param  {String} type The defined content type to create
   * @return {String}      ID of the created object
   */
  create: function create (type) {
    db.defaults(baseModel)
      .value()

    return db.get(type)
             .push({id: uuid.generate()})
             .value()
  },

  /**
   * finds a specific object in database
   * @param  {String} type    The defined content type to search
   * @param  {String} id      ID of the object to fetch
   * @return {Object|Boolean} Contents of the requested object, or false if none found
   */
  find: function find (type, id) {
    const fetched = db.get(type)
                      .find({id: id})
                      .value()

    if (typeof fetched === 'undefined') {
      return false
    }

    return fetched
  },

  /**
   * trashes on object of a type with a specific ID
   * @param  {String} type The defined content type to trash
   * @param  {String} id   ID of the object to trash
   * @return {Boolean}     True if deleted, false if not
   */
  trash: function trash (type, id) {
    const trashed = db.get(type)
                      .find({id: id})
                      .assign({trashed: true})
                      .value()

    // if an object is not found, it will only have assigned key
    if (Object.keys(trashed).length > 1) {
      return true
    }

    return false
  }
}

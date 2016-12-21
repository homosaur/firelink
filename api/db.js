// @flow
import low from 'lowdb'
import uuid from 'shortid'

const db = low('.db.json')

// base model for Firelink
const baseModel = {
  components: []
}

/**
 * creates an object in the db of a defined type
 * @param  {String} type The defined content type to create
 * @return {String}      ID of the created object
 */
export function create (type: string) {
  db.defaults(baseModel)
    .value()

  return db.get(type)
           .push({id: uuid.generate()})
           .value()
}

/**
 * finds a specific object in database
 * @param  {String} type    The defined content type to search
 * @param  {String} id      ID of the object to fetch
 * @return {Object|Boolean} Contents of the requested object, or false if none found
 */
export function find (type: string, id: string) {
  const fetched = db.get(type)
                    .find({id: id})
                    .value()

  if (typeof fetched === 'undefined') {
    return false
  }

  return fetched
}

/**
 * recovers on object of a type with a specific ID
 * @param  {String} type The defined content type to delete
 * @param  {String} id   ID of the object to delete
 * @return {Boolean}     True if deleted, false if not
 */
export function recover (type: string, id: string) {
  const recovered = db.get(type)
                      .find({id: id})
                      .assign({trashed: false})
                      .value()

  // if an object is not found, it will only have assigned key
  if (Object.keys(recovered).length > 1) {
    return true
  }

  return false
}

/**
 * trashes on object of a type with a specific ID
 * @param  {String} type The defined content type to trash
 * @param  {String} id   ID of the object to trash
 * @return {Boolean}     True if deleted, false if not
 */
export function trash (type: string, id: string) {
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

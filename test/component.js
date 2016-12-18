const should = require('chai').should() // eslint-disable-line
const db = require('../api/db')

// created testId
let testId

before(() => {
})

describe('component', () => {
  it('should create a component', () => {
    const components = db.create('components')
    testId = components[components.length - 1].id
    testId.should.have.length(9)
  })

  it('should return an existing object using id', () => {
    const dbObject = db.find('components', testId)
    dbObject.should.not.be.empty
    dbObject.id.should.have.length(9)
  })

  it('should return a 404 upon nonexistant object using invalid id', () => {
    const dbObject = db.find('components', 'invalidId')
    dbObject.should.be.false
  })
})

after(() => {
})

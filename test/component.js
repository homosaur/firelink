import {expect} from 'chai'
import * as db from '../api/db'

// created testId
let testId

before(() => {
})

describe('component', () => {
  it('should create a component', () => {
    const components = db.create('components')
    testId = components[components.length - 1].id
    expect(testId).to.have.length(9)
  })

  it('should return an existing object using id', () => {
    const dbObject = db.find('components', testId)
    expect(dbObject).to.not.be.empty
    expect(dbObject.id).to.have.length(9)
  })

  it('should return a 404 upon nonexistant object using invalid id', () => {
    const dbObject = db.find('components', 'invalidId')
    expect(dbObject).to.be.false
  })
})

after(() => {
})

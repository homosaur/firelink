const supertest = require('supertest')
const server = supertest.agent('http://localhost:9001')

const should = require('chai').should()

// created testId
let testId

before(() => {
  // boot()
})

describe('component', () => {
  it('should create a component on /api/component/create', (done) => {
    server
      .get('/api/component/create')
      .expect(200)
      .end((err, res) => {
        if (err) throw err
        res.status.should.equal(200)
        testId = res.text
        testId.should.have.length(9)
        done()
      })
  })

  it('should return an existing object at /api/component/find/:id', (done) => {
    server
      .get(`/api/component/find/${testId}`)
      .expect(200)
      .end((err, res) => {
        if (err) throw err
        res.status.should.equal(200)
        res.body.should.not.be.empty
        res.body.id.should.have.length(9)
        done()
      })
  })

  it('should return a 404 upon nonexistant object at /api/component/find/:id', (done) => {
    server
      .get('/api/component/find/invalidstring')
      .expect(404)
      .end((err, res) => {
        if (err) throw err
        res.status.should.equal(404)
        done()
      })
  })
})

after(() => {
  // shutdown()
})

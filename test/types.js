import {expect} from 'chai'
import Textarea from '../api/types/copy/textarea'
import Radio from '../api/types/options/radio'

// testing declarations
let radio

before(() => {
})

describe('Textarea', () => {
  it('should be able to process Markdown data into HTML', () => {
    const expectedOutput = '<p>testing</p>\n'
    const textarea = Object.create(Textarea)

    textarea.data = 'testing'
    textarea.process()
    expect(textarea.html).to.equal(expectedOutput)
  })
})

describe('Radio', () => {
  it('setOptions should be able to set options', () => {
    radio = Object.create(Radio)
    const options = [
      ['option1', 'The first option'],
      ['option2', 'The second option']
    ]
    radio.setOptions(options)
    expect(radio.options).to.be.an('array')
    expect(radio.options.length).to.equal(2)
  })

  it('getOptions should return an existing value')
  it('getOptions should return false if value does not exist')
  it('setOptions should modify an existing value')
})

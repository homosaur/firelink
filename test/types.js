import {expect} from 'chai'
import Textarea from '../api/types/copy/textarea'

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

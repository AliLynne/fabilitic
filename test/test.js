// const assert = require('assert')
const assert = require('chai').assert

const Day = require('../src/models/days_model')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1)
    })
  })
})

describe('day', function() {
  const d = new Day({ name: 'I am a name'})
  it('should be invalid if name is empty', function(done) {
    console.log(d.name)
    assert.exists(d.name, 'name is neither `null` nor `undefined` ')
    done()
  })
})
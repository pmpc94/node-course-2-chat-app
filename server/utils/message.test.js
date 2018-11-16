var expect = require('expect');
const {app} = require('../server');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Pedro';
    var text = 'This is a test';
    var res = generateMessage (from, text);

    expect(res).toInclude({from, text});
    expect(typeof res.createdAt).toBe('number');
  });
});

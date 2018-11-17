var expect = require('expect');
const {app} = require('../server');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Pedro';
    var text = 'This is a test';
    var res = generateMessage (from, text);

    expect(res).toInclude({from, text});
    expect(typeof res.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'User';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var res = generateLocationMessage(from, latitude, longitude);

    expect(res).toInclude({from, url});
    expect(typeof res.createdAt).toBe('number');
  });
});

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('double done', function(done) {
      // Calling `done()` twice is an error
      setImmediate(done);
    });
  });
  //Timeouts
  this.timeout(500);

  it('should take less than 500ms', function(done) {
    setTimeout(done, 300);
  });

  it('should take less than 500ms as well', function(done) {
    setTimeout(done, 250);
  });
});
//slow
describe('something slow', function() {
  this.slow(300000); // five minutes

  it('should take long enough for me to go make a sandwich', function() {
    // ...
  });
});
var should = require('should'),
    utility = require('../lib/main')();

describe('survey', function() {
  describe('basic', function() {
    it('isNull: true', function() {
      utility.basic.isNull(null).should.eql(true);
    });

    it('isNull: false', function() {
      utility.basic.isNull('').should.eql(false);
      utility.basic.isNull(0).should.eql(false);
      utility.basic.isNull(false).should.eql(false);
    });

    it('isArray: true', function() {
      utility.basic.isArray([]).should.eql(true);
      utility.basic.isArray([1, 2, 3]).should.eql(true);
      utility.basic.isArray([{}, {}]).should.eql(true);
    });

    it('isArray: false', function() {
      utility.basic.isArray({}).should.eql(false);
      utility.basic.isArray('test').should.eql(false);
      utility.basic.isArray(123).should.eql(false);
      utility.basic.isArray(true).should.eql(false);
    });

    it('isNumber: true', function() {
      utility.basic.isNumber(123).should.eql(true);
    });

    it('isNumber: false', function() {
      utility.basic.isNumber({}).should.eql(false);
      utility.basic.isNumber('test').should.eql(false);
      utility.basic.isNumber([]).should.eql(false);
      utility.basic.isNumber(true).should.eql(false);
    });
  });
});

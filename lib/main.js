module.exports = function() {
  var _basic = {};

  _basic.isNull = function(obj) {
    return (obj === null || typeof obj === 'undefined');
  };

  _basic.isArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  _basic.isNumber = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
  };

  return {
    'basic': _basic
  };
};
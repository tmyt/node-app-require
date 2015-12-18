var path = require('path');

module.exports = function(name){
  var path = require('path');
  return require(path.join(path.dirname(require.main.filename), name))
}

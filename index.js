require('./style/index.less');

var dbox = {
};

module.exports = dbox;

dbox.version = require('./package.json').version;

if (typeof window !== 'undefined') {
  window.dbox = dbox;
}

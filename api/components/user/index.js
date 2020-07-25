//const store = require('../../../store/mysql');
const config = require('../../../config');

let store, cache;
if (config.remoteDB === true) {
    store = require('../../../store/remote-mysql');
} else {
    store = require('../../../store/mysql');
}

if (config.remoteCache === true) {
    cache = require('../../../store/remote-cache');
} else {
    cache = require('../../../store/redis');
}

const ctrl = require('./controller');

module.exports = ctrl(store, cache);
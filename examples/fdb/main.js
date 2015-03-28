var level = require('level-browserify');
var db = level('whatever');
var fdb = require('forkdb')(db);

window.db = db;
window.fdb = fdb;
window.wsock = require('websocket-stream');

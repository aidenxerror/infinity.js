var CONFIG = require( "./core/config.js" );
var Engine = require( "./core/engine.js" );

var engine = new Engine( {
    SERVER_PORT:CONFIG.SERVER_PORT
} );
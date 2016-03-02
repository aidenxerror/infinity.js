var Server = require( "./module/server.js" );

module.exports = function( options ) {
    var s = new Server();
    
    s.onRequest = function( request, response ) {
        console.log( "Request: " + request.url );
        // parse url
        // split url
        // load channel
        // load controller
        // load method
        
        response.end();
    };
    
    s.start( options.SERVER_PORT );
};
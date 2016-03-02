var http = require('http');

module.exports = function() {
    var _self = this;
    
    var handler = function( request, response ) {
        _self.onRequest( request, response );
    };
    
    var server = http.createServer( handler );
    
    this.start = function( port ) {
        console.log( "Module_Serever: Startging HTTP Server..." );
        
        server.listen( port, function() {
            console.log( "Module_Serever: HTTP Server sterted" );
            console.log( "Module_Serever: HTTP Server listening on port " + port );
        } );
    };
    
    this.stop = function() {
        console.log( "Module_Serever: Stopping HTTP Server..." );
        server.close( function() {
            console.log( "Module_Serever: HTTP Server stopped" );
        } );
    };
    
    this.onRequest = function( request, response ) {
        response.end();
    };
};
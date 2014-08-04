//handles regular logins and sends user to the dash board 
var mysql = require('mysql'),
	dbConn = require('../dbConn.js');

exports.login = function(req, res) {
	console.log('login');
		
	res.redirect('/dashboard');

}

//handles reqeusts from MuniMaps and sends to the building page
exports.auth = function(req,res) {
	console.log('auth');
	console.log(req.body);

}

//creates a unique cookie ID to identify user and session
function makeCV() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
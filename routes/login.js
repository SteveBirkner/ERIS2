//handles regular logins and sends user to the dash board 
var mysql = require('mysql'),
	dbConn = require('../dbConn.js');

var connection = mysql.createConnection({
		host     : dbConn.host(),
		user     : dbConn.user(),
		password : dbConn.pass(), 
		database : 'mapping_accounts'
	});

connection.connect();



exports.login = function(req, res) {
	console.log('login');
	console.log(req.body['userName']);
	
	connection.query("SELECT `userName`,`cookieValue` FROM `ERIS_Auth` WHERE `userName` LIKE 'steven' AND `password` LIKE 'steven36' LIMIT 0, 30 ", function(err, rows, fields) {
	  if (err) throw err;
	  console.log('here');
	  console.log('The solution is: ', rows[0]);
	});	
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
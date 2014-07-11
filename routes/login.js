exports.login = function(req, res) {
	console.log('login');
	res.render('index');

}

exports.auth = function(req,res) {
	console.log('auth');
	console.log(req.body);
	console.log(req.params.b);
	console.log(req.params.a);

}

//creates a unique cookie ID to identify user and session
function makeCV() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
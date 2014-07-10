module.exports = function (app) {

var index = require('./routes/index'),
	login = require('./routes/login');


app.get('/', index.index);
app.post('/login', login.login);


}
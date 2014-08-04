module.exports = function (app) {

var index = require('./routes/index'),
	login = require('./routes/login'),
	dashboard = require('./routes/dashboard');

//GETS
app.get('/', index.index);
app.get('/dashboard', dashboard.dash);


//POSTS
app.post('/login', login.login);
app.post('/login/auth/', login.auth);



}
// treats exports as a function so that this file can serve
// as an extension of server.js
module.exports = function(app, path) {
	// test route
	app.get('/test1', (req, res) => {
		res.json({test: 'test'});
	});
	// route for home page
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
	
	// route for survey page
	app.get('/survey', (req, res) => {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
};
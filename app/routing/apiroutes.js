// treats exports as a function so that this file can serve
// as an extension of server.js
module.exports = function(app) {
	// test route
	app.get('/test', (req, res) => {
		res.json({test2: 'test2'});
	});
};
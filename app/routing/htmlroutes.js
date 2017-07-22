// treats exports as a function so that this file can serve
// as an extension of server.js
module.exports = function(app, path, friends) {
	app.get('/:route?', (req, res) => {
		// captures route
		let route = req.params.route;
		console.log(route);
		// switch statement for routing
		switch (route) {
			case 'survey':
				res.sendFile(path.join(__dirname, "../public/survey.html"));
				break;
			default:
				res.sendFile(path.join(__dirname, "../public/home.html"));
		}
	});
	app.get('/images/friendbkg.jpg', (req, res) => {
		res.sendFile(path.join(__dirname, "../images/friendbkg.jpg"));
	});
	// // route for home page
	// app.get('/', (req, res) => {
	// 	res.sendFile(path.join(__dirname, "../public/home.html"));
	// });
	
	// // route for survey page
	// app.get('/survey', (req, res) => {
	// 	res.sendFile(path.join(__dirname, "../public/survey.html"));
	// });
};
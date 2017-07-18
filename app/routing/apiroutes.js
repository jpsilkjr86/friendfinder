// treats exports as a function so that this file can serve
// as an extension of server.js
module.exports = function(app) {
	// GET route at api/friends
	app.get('/api/friends', (req, res) => {
		res.json({friend: 'friendtest'});
	});

	// POST route at api/friends
	app.post('/api/friends', (req, res) => {
		let newProfile = req.body;
		console.log(req.body);
		res.json(newProfile);
	});
};
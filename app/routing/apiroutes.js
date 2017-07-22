// treats exports as a function so that this file can serve
// as an extension of server.js
module.exports = function(app, path, friends) {
	// GET route at api/friends
	app.get('/api/friends', (req, res) => {
		res.json({friends: friends});
	});

	// POST route at api/friends
	app.post('/api/friends', (req, res) => {
		let newProfile = req.body;
		// res.json(newProfile);
		friends.push(newProfile);
		console.log(friends);
		res.send(friends);
	});
};
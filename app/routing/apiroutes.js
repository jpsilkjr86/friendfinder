// treats exports as a function so that this file can serve
// as an extension of server.js
module.exports = function(app, path, friendFinder) {
	// GET route at api/friends
	app.get('/api/friends', (req, res) => {
		res.json({friends: friendFinder.all});
	});

	// POST route at api/friends
	app.post('/api/friends', (req, res) => {
		// instantiate new profile equal to incoming data
		let newProfile = friendFinder.New(req.body);
		// push onto array of all friendFinder profiles
		friendFinder.all.push(newProfile);
		console.log(friendFinder.all);
		// instantiate matched profile equal to function call of .matchOf()
		let matchedProfile = friendFinder.matchOf(newProfile);
		console.log('match:');
		console.log(matchedProfile);
		res.json(matchedProfile);
	});
};
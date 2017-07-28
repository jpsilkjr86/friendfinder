// declares object to be exported
const friendFinder = {
	// array of all profiles accumulated
	all: [],
	// scope-safe constructor for new profiles
	New: function (data) {
		// to ensure `new`-safety
		if (!(this instanceof friendFinder.New)) {
			return new friendFinder.New(data);
		}
		// instantiates newProfile object equal to incoming data
		let newProfile = {
			name: data.name,
			email: data.email,
			score: data.score
		};
		// returns newProfile object
		return newProfile;
	},
	scoreDifference: (scoreOne, scoreTwo) => {
		// loops through arrays and adds difference as absolue value
		let diff = 0;
		for (let i = 0; i < scoreOne.length && i < scoreTwo.length; i++) {
			diff += Math.abs(scoreOne[i] - scoreTwo[i]);
		}
		return diff;
	},
	matchOf: (profile) => {
		// instantiates locally scoped variables: 
		// friends (array of all friends), match (empty object),
		// matchIndex (initially null), matchDiff (initially null)
		const friends = friendFinder.all;
		let match = {};
		let matchIndex = null;
		let matchDiff = null;

		// if friends is not populated with any profiles, return empty object
		if (!friends.length) {
			return {};
		}
		// loop through friends
		for (let i = 0; i < friends.length; i++) {
			// if friends[i] is not the same as profile
			if (profile.email !== friends[i].email) {
				// if matchIndex is null, set matchIndex = i, matchDiff = scoreDifference()
				if (matchIndex == null) {
					matchIndex = i;
					matchDiff = friendFinder.scoreDifference(profile.score, friends[i].score);
				}
				// else (if matchIndex is not null)
				else {
					// instantiate locally scoped variable called thisDiff = scoreDifference()
					let thisDiff = friendFinder.scoreDifference(profile.score, friends[i].score);

					// if thisDiff is less than matchDiff,
					if (thisDiff < matchDiff) {
						// set matchDiff = thisDiff, matchIndex = i
						matchDiff = thisDiff;
						matchIndex = i;
					}
				}
			}
		}
		// after loop, if matchIndex is still null, return empty object
		if (matchIndex == null) {
			return {};
		}
		// default action is: match = friends[matchIndex], return match.
		match = friends[matchIndex];
		return match;
	}
};

module.exports = friendFinder;

/*
// instantiates locally scoped variables. `friends` for easier reference to friends array
			const friends = friendFinder.all;
			let matchedProfile = {};
			let matchedIndex = null;
			// returns empty object if friends array is empty
			if (!friends.length) {
				return {};
			}
			// loops through  friends array to find who has the lowest score
			for (let i = 0; i < friends.length; i++) {
				// only check friends who are not the same as this new profile
				if (!(friends[0].email === this.email)) {
					// if matchedProfile is empty, set it equal to friends[i] 
					if (!matchedProfile.hasOwnProperty('score')) {
						matchedIndex = i;
					}
					// compare score difference of each friend with the current matched profile.
					// if friends[i] difference is smaller, set matchedProfile equal to that.
					else if (
						friendFinder.scoreDifference(this, friends[i])
						<
						friendFinder.scoreDifference(this, matchedProfile)
					) {
						matchedProfile = friends[i];
					}	
				}
			}
			return matchedProfile;

			*/
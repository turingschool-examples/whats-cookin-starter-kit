const userInfo = require('../data/users').usersData;

class Pantry {
	constructor({ name, id, pantry }) {
		this.name = name;
		this.id = id;
		this.pantry = pantry;
	};
};

module.exports = Pantry;
const chai = require('chai');
const expect = chai.expect;
const userInfo = require('../data/users').usersData;
const Pantry = require('../src/Pantry');

describe('Pantry', () => {
	it('Should hold users ingredients', () => {
		const userPantry = new Pantry(userInfo[0]);

		expect(userPantry.pantry).to.deep.equal(userInfo[0].pantry);
	});
});
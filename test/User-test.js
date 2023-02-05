import { expect } from 'chai';
import User from '../src/classes/User';

describe.only('User', () => {
    let user;

    beforeEach(() => {
        user = new User();
    });

    it('should be a function', () => {
        expect(User).to.be.a('function');
    });

    it('should be an instance of User', () => {
        expect(user).to.be.an.instanceOf(User);
    });
});
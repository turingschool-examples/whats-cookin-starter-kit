import { expect } from 'chai';
import User from '../src/classes/user';

describe('user', () =>{
    let user;
    let recipe;

    beforeEach(() =>{
        user = new User(
            {
              "name": "Brexye Quysh",
              "id": 1,
              "pantry": [
                {
                  "ingredient": 11297,
                  "amount": 4
                },
            ]
            }
        )
    })

    it('should be a function', () => {
        expect(User).to.be.a('function');
    })

    it('user has a name', () => {
        expect(user.name).to.equal("Brexye Quysh")
    })

    it('user has am id', () => {
        expect(user.id).to.equal(1)
    })



})
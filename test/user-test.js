import { expect } from 'chai';
import user from '../src/classes/user';

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

    it('Should be a function', () => {
        expect(user).to.be.a('function');
      });

    it('user has a name', () => {
        expect(user.name).to.equal
    })



})
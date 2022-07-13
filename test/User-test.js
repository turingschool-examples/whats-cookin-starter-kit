import { expect } from 'chai'; 
import User from '../src/classes/User'; 

describe('User', () => {
    let user;
    let dataUser;

    beforeEach(() => {
        dataUser = 
            {
              "name": "Saige O'Kon",
              "id": 1,
              "pantry": [
                {
                  "ingredient": 11297,
                  "amount": 4
                },
                {
                  "ingredient": 1082047,
                  "amount": 10
                },
                {
                  "ingredient": 20081,
                  "amount": 5
                },
                {
                  "ingredient": 11215,
                  "amount": 5
                },
                {
                  "ingredient": 2047,
                  "amount": 6
                },
                {
                  "ingredient": 1123,
                  "amount": 8
                }
              ]
            }
        // ];
        
        user = new User( dataUser )
    });

    it( 'should be a function', () => {
        expect(User).to.be.a('function');
    });

    it( 'should be an instance of User', () => {
        expect(user).to.be.an.instanceOf(User)
    });

    it( 'should take in a user name', () => {
        expect(user.name).to.equal("Saige O'Kon")
    });

    it( 'should take in an user id', () => {
        expect(user.id).to.equal(1)
    });

    it( 'should take in a user pantry', () => {
        expect(user.pantry).to.deep.equal(
            [
                {
                  "ingredient": 11297,
                  "amount": 4
                },
                {
                  "ingredient": 1082047,
                  "amount": 10
                },
                {
                  "ingredient": 20081,
                  "amount": 5
                },
                {
                  "ingredient": 11215,
                  "amount": 5
                },
                {
                  "ingredient": 2047,
                  "amount": 6
                },
                {
                  "ingredient": 1123,
                  "amount": 8
                }
              ]
        )
    }); 

    it( 'should take in recipesToCook', () => {
        expect(user.recipesToCook).to.deep.equal( [] )
    }); 

    it( 'should take in favoriteRecipes', () => {
        expect(user.favoriteRecipes).to.deep.equal( [] )
    });
});
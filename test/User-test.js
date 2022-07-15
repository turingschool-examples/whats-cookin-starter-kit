import { expect } from 'chai'
import User from '../src/classes/User'


describe('User', () => {

    let usersData;
    let userData2;
    let user

    beforeEach( () => {

      const usersData = [
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
            }
          ]
        }
      ]

            userData2 = [
        {
           "name": "Ephraim Goyette",
           "id": 2,
           "pantry": [
        {
          "ingredient": 6150,
          "amount": 3
        },
        {
          "ingredient": 1032009,
          "amount": 7
        },
        {
          "ingredient": 1082047,
          "amount": 8
        }
      ]
    }
  ]

      user = new User()

    })

    it('should be a function', () => {
      expect(User).to.be.a('function');
      });

    it('should be an instance of User', () => {
      expect(user).to.be.instanceOf(User);
    });

    it('should have a name', () => {
      expect(user.name).to.equal()
    });

    it('should have an id', () => {
      expect(user.id).to.equal()
    });

    it('Should have a pantry', () => {
      expect(user.pantry).to.equal()
    });

    it('should allow a user to add a recipe to their recipesToCook list', () => {

      expect(user).to.equal()
    });

    it('should allow a user to delete a recipe to their recipesToCook list', () => {

      expect().to.equal()
    });

    it('Should filter recipes in recipesToCook by tag', () => {

      expect().to.equal()

    });





});

// Allow a user to add/remove a recipe to their recipesToCook list (add to my recipesToCook)
// Filter my recipesToCook by a tag. (Extension option: filter by multiple tags)
// Filter my recipesToCook by its name. (Extension option: filter by name or ingredients)

//#######################


//Options: 
//Should allow a user to add/remove to favorites
//Should not be able o add dupicates to wantTOCook ORRR favorites




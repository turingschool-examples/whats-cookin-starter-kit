import { expect } from 'chai'
import User from '../src/classes/User'


describe('User', () => {

    let usersData;
    let user;
    let usersData2;
    let user2;
    let recipeData;
    

    beforeEach( () => {

      usersData = 
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
      

      usersData2 = 
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
      
  
    recipeData = [
      {
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
          {
            "id": 20081,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
        ],
        "instructions": [
          {
            "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
            "number": 1
          },
        ],
        "name": "Dirty Steve's Original Wing Sauce",
        "tags": [
          "sauce"
        ]
      },

      {
        "id": 593432,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
          {
            "id": 20081,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
        ],
        "instructions": [
          {
            "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
            "number": 1
          },
        ],
        "name": "Dirty Pete's Original Wing Powder",
        "tags": [
          "sauce"
        ]
      }
    ]



     user = new User(usersData);
     user2 = new User(usersData2);

    })

    it('should be a function', () => {
      expect(User).to.be.a('function');
      });

    it('should be an instance of User', () => {
      expect(user).to.be.instanceOf(User);
    });

    it('should have a name', () => {
      expect(user.name).to.equal("Saige O'Kon");
      expect(user2.name).to.equal("Ephraim Goyette");
    });

    it('should have an id', () => {
      expect(user.id).to.equal(1);
      expect(user2.id).to.equal(2);
    });

    it('Should have a pantry', () => {
      expect(user.pantry.length).to.equal(3);
    });

    it('should allow a user to add a recipe to their recipesToCook list', () => {
      expect(user.recipesToCook.length).to.equal(0);
      user.addRecipeToCook(recipeData[0])
      expect(user.recipesToCook.length).to.equal(1);
    });

    it('should allow a user to delete a recipe to their recipesToCook list', () => {
        expect(user.recipesToCook.length).to.equal(0)
        user.addRecipeToCook(recipeData[0])
        expect(user.recipesToCook.length).to.equal(1)
        user.addRecipeToCook(recipeData[1])
        expect(user.recipesToCook.length).to.equal(2)
        user.removeRecipeToCook(recipeData[0])
        expect(user.recipesToCook.length).to.equal(1);
    });

    it('Should filter recipes in recipesToCook by tag', () => {

      expect().to.equal();

    });

    it('should filter recipes in recipesToCook by name', () => {

      expect().to.equal();
    })





});

// Allow a user to add/remove a recipe to their recipesToCook list (add to my recipesToCook)
// Filter my recipesToCook by a tag. (Extension option: filter by multiple tags)
// Filter my recipesToCook by its name. (Extension option: filter by name or ingredients)

//#######################


//Options: 
//Should allow a user to add/remove to favorites
//Should not be able to add dupicates to wantTOCook ORRR favorites




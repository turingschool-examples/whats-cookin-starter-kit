import { expect } from 'chai'
import User from '../src/classes/User'

describe('User', () => {
    let usersData;
    let user;
    let usersData2;
    let user2;
    let recipeData;
    
    beforeEach(() => {
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
      expect(user.pantry[0]).to.deep.equal({ ingredient: 11297, amount: 4 });
    });

    it('should allow a user to add a recipe to their recipesToCook list', () => {
      expect(user.recipesToCook).to.be.an('array');
      expect(user.recipesToCook[0]).to.deep.equal(undefined)
      user.addRecipeToCook(recipeData[0])
      expect(user.recipesToCook[0].id).to.deep.equal(595736);
    });

    it('should allow a user to delete a recipe to their recipesToCook list', () => {
        user.addRecipeToCook(recipeData[0]);
        expect(user.recipesToCook[0].id).to.deep.equal(595736);
        user.addRecipeToCook(recipeData[1]);
        expect(user.recipesToCook[1].id).to.deep.equal(593432);
        user.removeRecipeToCook(recipeData[0]);
        expect(user.recipesToCook[0].id).to.deep.equal(593432);
    });

    it('Should filter recipes in recipesToCook by tag', () => {
      expect(recipeData[0].tags[0]).to.deep.equal("sauce");
      user.addRecipeToCook(recipeData[0]);
      expect(user.listRecipeToCookByTag("sauce")[0].tags[0]).to.deep.equal("sauce")
    });

    it('should filter recipes in recipesToCook by name', () => {
      expect(recipeData[0].name).to.deep.equal("Dirty Steve's Original Wing Sauce");
      user.addRecipeToCook(recipeData[0]);
      expect(user.listRecipebyToCookName("Dirty Steve's Original Wing Sauce")[0].name).to.deep.equal("Dirty Steve's Original Wing Sauce");
    })
});






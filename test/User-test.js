import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import User from '../src/classes/User';
import usersData from '../src/data/users';

describe('User', function() {

  let user1, user2, testUserData, recipe1, recipe2, recipeRepository;

  beforeEach('define variables for test suite', function() {
   
    testUserData = [
      {
        "name": "Russell Wilson",
        "id": 1,
        "pantry": [
          {
          "ingredient": 11297,
          "amount": 4
          },
          {
          "ingredient": 1082047,
          "amount": 10
          }
        ]
      }, 
      {
        "name": "Josh Allen",
        "id": 2,
        "pantry": [
          {
          "ingredient": 11297,
          "amount": 2
          },
          {
          "ingredient": 1082047,
          "amount": 15
          }
        ]
      }
    ]
    user1 = new User('Melvin Gordon', 3, [{"ingredient": 11297, "amount": 7}]);
    user2 = new User();
    recipe1 = {
      "id": 222,
      "image": "",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        },
      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "antipasti"
      ]
    };
    recipe2 = {
      "id": 333,
      "image": "",
      "ingredients": [
        {
          "id": 1002030,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 8,
            "unit": "tablespoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
          "number": 1
        }
      ],
      "name": "Dirty Steve's Original Wing Sauce",
      "tags": [
        "sauce"
      ]
    };
    recipeRepository = {
      "recipes": [recipe1, recipe2]
    }
  });

  it('Should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('Should be an instance of User', function() {
    expect(user1).to.be.an.instanceOf(User);
  });

  it('Should have a name', function() {
    
    expect(user1.name).to.equal('Melvin Gordon');
    expect(user2).to.have.any.keys('name');
  });

  it('Should have an ID', function() {
    
    expect(user1.id).to.equal(3);
    expect(user2).to.have.any.keys('id');
  });

  it('Should have a pantry', function() {
    
    expect(user1.pantry).to.deep.equal([{"ingredient": 11297, "amount": 7}]);
    expect(user2).to.have.any.keys('pantry');
  });

  it('Should have a place to keep recipes', function() {
    
    expect(user1.recipesToCook).to.deep.equal([]);
    expect(user2.recipesToCook).to.deep.equal([]);
  });

  it('Should be able to generate a random user', function() { //how test its random lol
    // const user3 = new User()
    // user3.generateRandomUser(usersData)

    // expect(user1.recipesToCook).to.deep.equal([]);
    // expect(user2.recipesToCook).to.deep.equal([]);
  });

  it('Should be able to add recipes', function() {
    
    user1.addRecipe(222, recipeRepository);

    expect(user1.recipesToCook).to.deep.equal([recipe1]);

    user1.addRecipe(333, recipeRepository);

    expect(user1.recipesToCook).to.deep.equal([recipe1, recipe2]);
    expect(user1.recipesToCook.length).to.equal(2);
  });
})

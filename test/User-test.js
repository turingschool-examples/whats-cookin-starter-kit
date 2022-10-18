import { expect } from 'chai';
import User from '../src/classes/User';
import usersData from '../src/data/users';

describe('User', function() {

  let user1, user2, testUserData, recipe1, recipe2, recipeRepository;

  beforeEach('define variables for test suite', function() {
    // Should we make a separate file for this sample test data (from Flashcards project feedback)?
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
        "antipasti",
        "dessert"
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
        "sauce",
        "dessert"
      ]
    };
    recipeRepository = {
      listOfRecipes: [recipe1, recipe2]
    }
  });

  it('Should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('Should be an instance of User', function() {
    expect(user1).to.be.an.instanceOf(User);
  });

  it('Should be able to have a name', function() {
    expect(user1.name).to.equal('Melvin Gordon');
    expect(user1).to.have.any.keys('name');
    expect(user1.name).to.be.a('string');
    
    expect(user2.name).to.equal(undefined);
    expect(user2).to.have.any.keys('name');
  });

  it('Should be able to have an ID', function() {
    expect(user1.id).to.equal(3);
    expect(user1).to.have.any.keys('id');
    expect(user1.id).to.be.a('number')

    expect(user2.id).to.equal(undefined);
    expect(user2).to.have.any.keys('id');
  });

  it('Should be able to have a pantry', function() {
    expect(user1.pantry).to.deep.equal([{"ingredient": 11297, "amount": 7}]);
    expect(user1).to.have.any.keys('pantry');
    expect(user1.pantry).to.be.an('array');

    expect(user2).to.have.any.keys('pantry');
    expect(user2.pantry).to.equal(undefined);
  });

  it('Should have a place to keep recipes', function() {
    expect(user1.recipesToCook).to.deep.equal([]);
    expect(user1).to.have.any.keys('recipesToCook');

    expect(user2.recipesToCook).to.deep.equal([]);
    expect(user2).to.have.any.keys('recipesToCook');
  });

  it('Should be able to generate a random user', function() { 
    // 🚨❓ How test that it's random?
    expect(user2.name).to.equal(undefined);
    expect(user2.id).to.equal(undefined);
    expect(user2.pantry).to.equal(undefined);

    user2.generateRandomUser(usersData);
   
    expect(user2.name).to.be.a('string');
    expect(user2.id).to.be.a('number');
    expect(user2.pantry).to.be.an('array');

    const testUser = usersData.find(user => user["name"] === user2.name);

    expect(testUser["name"]).to.equal(user2.name);
  });

  it('Should be able to add recipes', function() {
    expect(user1.recipesToCook).to.deep.equal([]);
    expect(user1.recipesToCook.length).to.equal(0);

    user1.addRecipe(222, recipeRepository);

    expect(user1.recipesToCook).to.deep.equal([recipe1]);
    expect(user1.recipesToCook.length).to.equal(1);

    user1.addRecipe(333, recipeRepository);

    expect(user1.recipesToCook).to.deep.equal([recipe1, recipe2]);
    expect(user1.recipesToCook.length).to.equal(2);
  });

  it('Should be able to remove recipes', function() {
    user1.addRecipe(222, recipeRepository);
    user1.addRecipe(333, recipeRepository);

    expect(user1.recipesToCook).to.deep.equal([recipe1, recipe2]);
    expect(user1.recipesToCook.length).to.equal(2);

    user1.removeRecipe(222);
    
    expect(user1.recipesToCook).to.deep.equal([recipe2]);
    expect(user1.recipesToCook.length).to.equal(1);

    user1.removeRecipe(333);

    expect(user1.recipesToCook).to.deep.equal([]);
    expect(user1.recipesToCook.length).to.equal(0);
  });

  it('Should be able to filter recipes by tag', function() {
    user1.addRecipe(222, recipeRepository);
    user1.addRecipe(333, recipeRepository);
    const filteredList1 = user1.filterByTag('antipasti');
    const filteredList2 = user1.filterByTag('sauce');
    const filteredList3 = user1.filterByTag('dessert');
    const filteredList4 = user1.filterByTag('gabagool');

    expect(filteredList1).to.deep.equal([recipe1]);
    expect(filteredList2).to.deep.equal([recipe2]);
    expect(filteredList3).to.deep.equal([recipe1, recipe2]);
    expect(filteredList4).to.deep.equal([]);
  });

  it('Should be able to filter recipes by their name', function() {
    user1.addRecipe(222, recipeRepository);
    user1.addRecipe(333, recipeRepository);
    const filteredList = user1.filterByName("Loaded Chocolate Chip Pudding Cookie Cups");
    const filteredList2 = user1.filterByName("Dirty Steve's Original Wing Sauce");
    const filteredList3 = user1.filterByName("Microwaved Dinner");

    expect(filteredList).to.deep.equal([recipe1]);
    expect(filteredList2).to.deep.equal([recipe2]);
    expect(filteredList3).to.deep.equal([]);
  });
})

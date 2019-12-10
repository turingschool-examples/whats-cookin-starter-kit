const chai = require('chai');
const expect = chai.expect;

const User = require('../src/user.js');
const Recipe = require('../src/recipe.js');

describe('Users', function() {
  let user, recipe;
  beforeEach(() => {
    recipe = new Recipe(595736, 'Loaded Chocolate Chip Pudding Cups', 'https://spoonacular.com/recipeImages/595736-556x370.jpg', ['antipasti', 'starter', 'snack'], ['Add egg and vanilla and mix until combined.'],
    [{
      "name": "all purpose flour",
      "id": 20081,
      "quanitity": {
        "amount": 1,
        "unit": "cup"
      }
    }, {
      "name": "baking soda",
      "id": 18372,
      "quanitity": {
        "amount": 0.5,
        "unit": "tsp"
      }
    }]);
    user = new User(1,'Saige O\'Kon', [{'ingredient': 20081, 'amount': 2}, {'ingredient': 18372, 'amount': 2}], recipe);

    // recipe = new Recipe(541288, 'Sesame Cookies', 'https://spoonacular.com/recipeImages/541288-556x370.jpg', ['antipasti', 'starter', 'snack',], ['Place them on two baking sheets lined with parchment paper.'])
  });

    it('should be a function', function() {
      expect(User).to.be.a('function');
    });

    it('should instantiate a new user', function() {
      expect(user).to.be.an.instanceof(User);
    });

    describe('stored data', function() {
      it('should know the correct ID number', function() {
        expect(user.id).to.equal(1);
      });

      it('should know what it has in the pantry', function() {
        expect(user.pantry[0]).to.deep.equal({'ingredient': 20081, 'amount': 2});
      });

      it('should know the correct name', function() {
        expect(user.name).to.equal('Saige O\'Kon');
      });
    });

    it('should be able to search by tags', function() {
      let ing = [{
        "name": "all purpose flour",
        "id": 20081,
        "quanitity": {
          "amount": 1,
          "unit": "cup"
        }
      }, {
        "name": "baking soda",
        "id": 18372,
        "quanitity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      }];
      let recipe1 = new Recipe(541288, 'Sesame Cookies', 'https://spoonacular.com/recipeImages/541288-556x370.jpg', ['antipasti', 'starter', 'snack',], ['Place them on two baking sheets lined with parchment paper.'], ing);
      let recipe2 = new Recipe(595736, 'Loaded Chocolate Chip Pudding Cookie Cups', 'https://spoonacular.com/recipeImages/595736-556x370.jpg', ['antipasti', 'starter', 'snack',], ['Add egg and vanilla and mix until combined.'], ing);
      let recipe3 = new Recipe(741603, 'Elvis Pancakes', 'https://spoonacular.com/recipeImages/741603-556x370.jpeg', ['side dish',], ['Watch how to make this recipe.'], ing);
      let cookBook = [recipe1, recipe2, recipe3];
      expect(user.searchByTags('snack', cookBook)).to.deep.equal([recipe1, recipe2]);
    });

    it('should save favorite recipes', function() {
      expect(user.saveToFavorites(recipe)).to.deep.equal([recipe]);
    });

    it('should store favorite recipe by id numbers', function() {
      user.saveToFavorites(recipe);
      expect(user.favorites[0].id).to.equal(595736);
    });

    describe('should sort through available recipes', function() {
      let ing = [{
        "name": "all purpose flour",
        "id": 20081,
        "quanitity": {
          "amount": 1,
          "unit": "cup"
        }
      }, {
        "name": "baking soda",
        "id": 18372,
        "quanitity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      }];
      let ing2 = [{
        "name": "apple cider",
        "id": 1009016,
        "quanitity": {
          "amount": 1.5,
          "unit": "cups"
        }
      }, {
        "name": "apples",
        "id": 9003,
        "quanitity": {
          "amount": 2,
          "unit": ""
        }
      }];
      let recipe1 = new Recipe(541288, 'Sesame Cookies', 'https://spoonacular.com/recipeImages/541288-556x370.jpg', ['antipasti', 'starter', 'snack',], ['Place them on two baking sheets lined with parchment paper.'], ing2);
      let recipe2 = new Recipe(595736, 'Loaded Chocolate Chip Pudding Cookie Cups', 'https://spoonacular.com/recipeImages/595736-556x370.jpg', ['antipasti', 'starter', 'snack',], ['Add egg and vanilla and mix until combined.'], ing);
      let recipe3 = new Recipe(741603, 'Elvis Pancakes', 'https://spoonacular.com/recipeImages/741603-556x370.jpeg', ['side dish',], ['Watch how to make this recipe.'], ing);
      let recipe4 = new Recipe(678353, 'Maple Dijon Apple Cider Grilled Pork Chops', 'https://spoonacular.com/recipeImages/678353-556x370.jpg', ['lunch', 'main dish', 'dinner'], ['Season well and grill over medium heat'], ing)
      let cookBook = [recipe1, recipe2, recipe3, recipe4];

      it('should store pantry ingredients by id', function() {
        expect(user.condenseUserIngredientById(recipe)).to.deep.equal([20081, 18372]);
      });

      it('should store recipe ingredients by id', function() {
        expect(user.condenseRecipeIngredientById(cookBook)).to.deep.equal([1009016, 9003, 20081, 18372]);
      });

      it('should instantiate a new recipe', function() {
        let recipe2 = new Recipe(595736, 'Loaded Chocolate Chip Pudding Cookie Cups', 'https://spoonacular.com/recipeImages/595736-556x370.jpg', ['antipasti', 'starter', 'snack',], ['Add egg and vanilla and mix until combined.']);
        expect(recipe2).to.be.an.instanceof(Recipe);
      });

      it('should be able to find available recipes based on pantry', function() {
        user.recipesToCook(cookBook);
        expect(user.recipesToCook(cookBook)).to.deep.equal([recipe2, recipe3, recipe4])
      });
    });
});

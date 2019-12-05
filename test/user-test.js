const chai = require('chai');
const expect = chai.expect;

const User = require('../src/user.js');
const Recipe = require('../src/recipe.js');

describe('Users', function() {
  let user, recipe;
  beforeEach(() => {
    recipe = new Recipe(595736, 'Loaded Chocolate Chip Pudding Cups', 'https://spoonacular.com/recipeImages/595736-556x370.jpg', ['antipasti', 'starter', 'snack'], ['Add egg and vanilla and mix until combined.'])
    user = new User(1,'Saige O\'Kon', [{'ingredient': 20081, 'amount': 2}]);


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

      it.skip('should be able to sort by recipes can cook', function() {
        expect(user.recipesToCook()).to.deep.equal();
      });
    });

    it.skip('should be able to search by tags', function() {
      expect(user.searchByTags()).to.deep.equal();
    });

    it.skip('should know what it can cook', function() {
      expect(user.saveToFavorites()).to.equal();
    });

    it('should store favorite recipe by id numbers', function() {
      user.saveToFavorites();
      expect(user.favorites[0].id).to.equal(595736);
    });

    describe('should sort through available recipes', function() {

      it('should store pantry ingredients by id', function() {
        expect(user.condenseUserIngredientId()).to.deep.equal([20081]);
      });

      it('should store recipe ingredients by id', function() {
        expect(user.condenseRecipeIngredientId()).to.deep.equal([20081]);
      });

      it('should instantiate a new recipe', function() {
        let recipe2 = new Recipe(595736, 'Loaded Chocolate Chip Pudding Cookie Cups', 'https://spoonacular.com/recipeImages/595736-556x370.jpg', ['antipasti', 'starter', 'snack',], ['Add egg and vanilla and mix until combined.']);
        expect(recipe2).to.be.an.instanceof(Recipe);
      });

      it('should be able to find available recipes based on pantry', function() {
        let recipe1 = new Recipe(541288, 'Sesame Cookies', 'https://spoonacular.com/recipeImages/541288-556x370.jpg', ['antipasti', 'starter', 'snack',], ['Place them on two baking sheets lined with parchment paper.']);
        let recipe2 = new Recipe(595736, 'Loaded Chocolate Chip Pudding Cookie Cups', 'https://spoonacular.com/recipeImages/595736-556x370.jpg', ['antipasti', 'starter', 'snack',], ['Add egg and vanilla and mix until combined.']);
        let recipe3 = new Recipe(741603, 'Elvis Pancakes', 'https://spoonacular.com/recipeImages/741603-556x370.jpeg', ['side dish',], ['Watch how to make this recipe.']);
        user.recipesToCook();
        console.log(user.availableRecipes);

        expect(user.recipesToCook()).to.deep.equal([recipe3, recipe2, recipe1])
      });
    });
});

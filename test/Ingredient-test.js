const chai = require('chai');
const expect = chai.expect;

const RecipeRepo = require('../src/RecipeRepo');
const Recipe = require('../src/Recipe');
const User = require('../src/User');
const Ingredient = require('../src/Ingredient');

let recipeData = [{'id': 2021, 'image': 'https://i.pinimg.com/originals/ee/28/89/ee288996db69afeb8ec5cbf84f8c0d10.jpg',
                  'ingredients': [{'id': 23, 'quantity': {'amount': 42, 'unit': 'octoban'}}], 'instructions': [{
                    'instruction': 'Get a paddle and some marshmallows and peanut butter','number': 1}, {'instruction': 'Whip it good. With a Whisk. Whip it!', 'number': 2}],
                    'name': 'fluffer-nutter', 'tags': ['chocolate','cheese']}];

let userData = {
                  "name": "Bosphorous Immanuel",
                  "id": 42,
                  "pantry": [{"ingredient": 61, "amount": 6}, {"ingredient": 62, "amount": 6}]
                }

describe('Ingredient', () => {

  let recipeRepo;
  let recipe;
  let user;


  beforeEach('create a recipe repository', () => {
    recipeRepo = new RecipeRepo(recipeData);
    recipeNumberOne = recipeRepo.recipes[0];
    user = new User(userData);
    ingredient = new Ingredient({"id": 9999, "quantity": {"amount": 2, "unit": "tablespoons"}
    });
  });

  it('should instantiate an Ingredient', () => {

    expect(ingredient).to.be.an.instanceOf(Ingredient);
  });

  it('should have an id', () => {
    expect(ingredient.id).to.deep.equal(9999);
  });

  it('should have a quantity', () => {
    expect(ingredient.quantity).to.deep.equal({"amount": 2, "unit": "tablespoons"});
  });

  it('should have an amount', () => {
    expect(ingredient.amount).to.deep.equal(2);
  });

  it('should have a unit of measurement', () => {
    expect(ingredient.unit).to.deep.equal('tablespoons');
  });

})

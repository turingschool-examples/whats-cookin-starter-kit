const chai = require('chai');
const expect = chai.expect;

const RecipeRepo = require('../src/RecipeRepo');
const Recipe = require('../src/Recipe');

describe('RecipeRepo', () => {
  let recipeRepo;
  let recipe;
  let recipeData = [{'id': 2021, 'image': 'https://i.pinimg.com/originals/ee/28/89/ee288996db69afeb8ec5cbf84f8c0d10.jpg',
                      'ingredients': [{'id': 23, 'quantity': {'amount': 42, 'unit': 'octoban'}}], 'instructions': [{
                      'instruction': 'Get a paddle and some marshmallows and peanut butter','number': 1}, {'instruction': 'Whip it good. With a Whisk. Whip it!', 'number': 2}],
                      'name': 'fluffer-nutter', 'tags': ['chocolate','cheese']
                    },
                    {'id': 2011, 'image': 'https://i.pinimg.com/originals/ee/28/89/ee288996db69afeb8ec5cbf84f8c0d10.jpg',
                      'ingredients': [{'id': 24, 'quantity': {'amount': 56, 'unit': 'octoban'}}], 'instructions': [{
                      'instruction': 'Get a paddle and some marshmallows and peanut butter','number': 1}, {'instruction': 'Whip it good. With a Whisk. Whip it!', 'number': 2}],
                      'name': 'figgy pudding', 'tags': ['cheerios','cheez-its']
                    },
                    {'id': 3115, 'image': 'https://i.pinimg.com/originals/ee/28/89/ee288996db69afeb8ec5cbf84f8c0d10.jpg',
                      'ingredients': [{'id': 25, 'quantity': {'amount': 85, 'unit': 'octoban'}}], 'instructions': [{
                      'instruction': 'Get a paddle and some marshmallows and peanut butter','number': 1}, {'instruction': 'Whip it good. With a Whisk. Whip it!', 'number': 2}],
                      'name': 'gryndilow guts', 'tags': ['cheddar','cheetos']
                    },
                   ];
  beforeEach('create a recipe repository', () => {
    recipeRepo = new RecipeRepo(recipeData);
    recipeNumberOne = recipeRepo.recipes[0];
  });

  it('should instantiate a recipe repository', () => {

    expect(recipeRepo).to.be.an.instanceOf(RecipeRepo);
  });

  it('should have Recipe instances', () => {

    expect(recipeNumberOne).to.be.an.instanceOf(Recipe);
  });

  it('should have a name', () => {
    expect(recipeNumberOne.name).to.deep.equal(recipeData[0].name);
  });

  it('should fulfill the whole data set and have many Recipe ojects', () => {

    expect(recipeNumberOne.name).to.deep.equal(recipeData[0].name);
    expect(recipeRepo.recipes[1].name).to.deep.equal(recipeData[1].name);
    expect(recipeRepo.recipes[2].name).to.deep.equal(recipeData[2].name);
  });

  describe('filter by tag', () => {
    let tag = 'cheez-its';
    let ingredientId = 24;
    it('should filter recipes by tag', () => {

      recipeRepo.matchTag(tag);

      expect(recipeRepo.recipes[0].tags).to.deep.equal(recipeData[1].tags);
    });

    it.skip('should filter recipes by ingredient', () => {

      recipeRepo.matchIngredient(ingredientId);

      expect(recipeRepo.recipes[0].tags).to.deep.equal(recipeData[1].tags);
    });
  });



});

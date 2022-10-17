import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import sampleIngredientsData from '../src/data/sample-data';
import sampleUsersData from '../src/data/sample-data';
import samplesRecipeData from '../src/data/sample-data';



describe('RecipeRepo', () => {
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
})

//properties - parameter for recipe data
//methods - filtered list
//properties = id, image, incredients, recipe objects(parameter), cost, directions/instructions, ingredients

// A RecipeRepository should hold onto all Recipe objects.


// It should have methods to determine:
// A filtered list of recipes based on a tag. (Extension option: filtering by multiple tags)
// A filtered list of recipes based on its name. (Extension option: filtering by name or ingredients)
// A Recipe represents one recipe object. - instances of recipe



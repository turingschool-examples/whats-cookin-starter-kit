import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import recipeData from './data/recipes'
import ingredientsData from './data/ingredients'
import RecipeRepository from './classes/RecipeRepository';

let recipeRepo = new RecipeRepository()

recipeRepo.importRecipesFromFile(recipeData, ingredientsData)


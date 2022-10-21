import './styles.css';
import apiCalls from './apiCalls';
import MicroModal from 'micromodal';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import RecipeRepository from './classes/RecipeRepository'
import recipeData from "./data/recipes"
import ingredientsData from "./data/ingredients"
// import Recipe from "./Recipe"

MicroModal.init({
  onShow: modal => console.info(`${modal.id} is shown. Callback ftn to poppulate modal called here?`),
  onClose: modal => console.info(`${modal.id} is hidden`),
  openTrigger: 'data-micromodal-trigger',
  closeTrigger: 'data-custom-close',
  openClass: 'is-open',
  disableScroll: true,
  disableFocus: false,
  awaitOpenAnimation: false,
  awaitCloseAnimation: false,
  debugMode: true 
});

window.onload = function(){
  var newRecipeRepo = new RecipeRepository(recipeData, ingredientsData)
  // var newUser = new User()
  console.log("newRecipeRepo", newRecipeRepo)
  // console.log("newUser", newUser)
}

console.log('Hello world');

 
 
//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css';
import './images/turing-logo.png';
import './images/3.Nutritionist.svg';
import './images/favicon-32x32.png';
import './images/account_circle_48dp_47280B_FILL1_wght400_GRAD0_opsz48.svg';
import './images/search_16dp_47280B_FILL1_wght400_GRAD0_opsz20.svg';
import './images/bookmark_16dp_47280B_FILL0_wght400_GRAD0_opsz20.svg';
import './images/favorite_16dp_47280B_FILL0_wght400_GRAD0_opsz20.svg';
import './images/all_inclusive_16dp_47280B_FILL0_wght400_GRAD0_opsz20.svg';
import './images/arrow_back_16dp_47280B_FILL0_wght400_GRAD0_opsz20.svg';
import './images/close_16dp_47280B_FILL0_wght400_GRAD0_opsz20.svg';


// Below are examples of how you can import functions from either the recipes or domUpdates files.

/* import * as recipes from './recipes'; */
import * as data from './apiCalls';
import * as users from './users';
import * as domUpdates from './domUpdates';

window.addEventListener("load", () => {
  Promise.all([data.getUsers, data.getRecipes, data.getIngredients])
    .then(() => {
      setTimeout(() => {
        domUpdates.currentlyActive.user = users.getRandomUser(data.usersData);
        domUpdates.currentlyActive.list = data.recipeData;
        domUpdates.renderTagList();
        domUpdates.renderCurrentViewInfo();
        domUpdates.renderRecipes(data.recipeData);
      }, 500);
    })
    .catch(err => {
      console.log(`Sorry, the following error occured: ${err}`);
      domUpdates.recipeDisplay.textContent = `Sorry, the following error occured: ${err}`;
    });
});
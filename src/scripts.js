let allRecipes = [];



const instantiateRecipeCards = () => {
  recipeData.forEach(recipe => {
    let singleRecipe = new Recipe (
      recipeData.name,
      recipeData.id,
      recipeData.image,
      recipeData.ingredients,
      recipeData.instructions,
      recipeData.tags)
    allRecipes.push(recipe)
  })
  allRecipes.forEach(recipe => {
    document.querySelector('.recipe-card-area').insertAdjacentHTML('afterbegin', `
    <div class="recipe-container">
      <div class="image-container">
         <img src="https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg" class="image-container">
       </div>
       <div class="recipe-text">
         <h2>${recipe.name}</h2>
       </div>
       <div class="card-button-containter">
         <button type="button" class="card-buttons view-recipe">View Recipe</button>
         <button type="button" class="card-buttons add-to-menu">Add to Menu</button>
         <button type="button" class="card-buttons add-to-favorites">Add to Favorites</button>
       </div>
     </div>`);
  })
}

function genRanNum() {
  return Math.floor(Math.random() * 50)
}

let randomNum = genRanNum();

const instantiateUsers = () => {
  var selectedUser = users.find(person => {
    return person.id === randomNum;
  })
  let user = new User (
    selectedUser.id,
    selectedUser.name,
    selectedUser.pantry)  
}



const selectUser = () => {

}

// const selectUser = () => {
//   allUsers.forEach(person => {
//     if (allUsers[id].includes(genRanNum))
//     console.log('hi')
//   })
// }

// const instantiateNewPantry = () => {

//   })
// }

const getEvent = (event) => {
  if (event.target.classList.contains('add-to-menu')) {
    console.log(event)
    pantry.moveToSelectedRecipe();
  }
}

let addToMenuBtns = document.querySelectorAll('.add-to-menu');

addToMenuBtns.forEach(menuBtn => {
  addEventListener('click', getEvent)
});

instantiateRecipeCards();
instantiateUsers();
selectUser();

document.querySelector('.enter-button').addEventListener('click', loadDashboard);



function loadDashboard() {
  document.querySelector('.splash-container').classList.add('hidden');
  document.querySelector('.nav-bar').classList.remove('hidden');
  document.querySelector('.recipe-card-area').classList.remove('hidden');
  instantiateRecipeCards();
}

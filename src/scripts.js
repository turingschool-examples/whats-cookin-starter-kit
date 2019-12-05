let allRecipes = [];
let allUsers = [];



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
  console.log(allRecipes)
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

const instantiateUsers = () => {
  users.forEach(person => {
    let user = new User (
      users.id, 
      users.name, 
      users.pantry)
    allUsers.push(person)
  })
  // console.log(allUsers)
}
const selectUser = () => {
  allUsers.filter(person => {
    if (person.id === genRanNum()) {

    }
  })
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
// genRanNum();
// selectUser();
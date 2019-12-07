const recipeSection = document.querySelector('.recipes-section');
const nameDropdown = document.querySelector('.name-options');
const tagDropdown = document.querySelector('.tag-options');
const ingredientDropdown = document.querySelector('.ingredient-options');

populateCards();
namesDropdown();
ingredientsDropdown();
tagsDropdown();


function populateCards() {
  return recipeData.forEach(element => {
    let recipe = new Recipe(element.name, element.id, element.image, element.ingredients, element.instructions, element.tags)
    recipeSection.innerHTML += `
      <div class="recipe-card">
        <img class="recipe-img" src=${recipe.image}>
        <div class="recipe-card-bar">
          <p class="recipe-card-name">${recipe.name}</p>
          <div class='btns-container'>
            <button class="heart-btn"></button>
            <button class="cook-btn"></button>
          </div>
        </div>
      </div>`
  })
}

function namesDropdown() {
  let recipeNames = recipeData.map(recipe => recipe.name)
  let sortedRecipes = recipeNames.sort()
  return sortedRecipes.map(element => {
    let recipe = new Recipe(element)
    nameDropdown.innerHTML += `
      <option class="test" value="test">${recipe.name}</option>
      `
  })
}

function tagsDropdown() {
  let tagNames = recipeData.reduce((acc, recipe) => {
    let getTag = recipe.tags.forEach(tag => {
      if (!acc.includes(tag)) {
      acc.push(tag)
    }
    })
    return acc
  }, [])
  return tagNames.forEach(tag => {
    tagDropdown.innerHTML += `
    <option class="test" value="test">${tag}</option>`
  })
}

function ingredientsDropdown() {
  let ingredientNames = ingredientData.map(element => element.name)
  let sortedIngredients = ingredientNames.sort()
  return sortedIngredients.map(element => {
    ingredientDropdown.innerHTML += `
      <option class="test" value="test">${element}</option>
      `
  })
}

const recipeSection = document.querySelector('.recipes-section');

populateCards();

function populateCards() {
  return recipeData.forEach(element => {
    let recipe = new Recipe(element.name, element.id, element.image, element.ingredients, element.instructions, element.tags)
    recipeSection.innerHTML += `
      <div class="recipe-card">
        <div class="recipe-img"></div>
        <div class="recipe-card-bar">
          <p class="recipe-card-name">${recipe.name}</p>
          <div class='btns-container'>
            <button class="heart-btn"></button>
            <button class="cook-btn"></button>
          </div>
        </div>
      </div>`
  }
  )
}

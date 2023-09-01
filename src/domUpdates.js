//NOTE: Your DOM manipulation will occur in this file

//Here are 2 example functions just to demonstrate one way you can export/import between the two js files. You'll want to delete these once you get your own code going.



const recipesContainer = document.querySelector('.recipe-container');


const renderRecipes = (recipeData) => {

  recipesContainer.innerHTML = '';

  for (let i = 0; i < recipeData.length; i++) {
    recipesContainer.innerHTML += `
    <div class="recipe-card"id="${recipeData[i].id}">
      <p class ="recipe-name">${recipeData[i].name}</p>
      <img class="image-styling" src="${recipeData[i].image}">
      </div>
    `
  }
}

const displayRecipes = (event, recipeData, searchField) => {
  recipesContainer.innerHTML = '';

  const filteredRecipes = recipeData.filter(recipe => recipe.name === searchField.value);
  console.log({searchField})
  if (event.key === 'Enter') {
    filteredRecipes.map(recipe => {
      recipesContainer.innerHTML += `
        <div class="recipe-card"id="${recipe.id}">
          <p class="recipe-name">${recipe.name}</p>
          <img class="image-styling" src="${recipe.image}">
        </div>
      `;
    });
    return filteredRecipes;
  }
};



// `
//     <div class="popup-overlay">
//       <div class="popup-content">
//         <h2>${recipe.name}</h2>
//         <img src="${recipe.image}" alt="${recipe.name}">
//         <h3>Ingredients:</h3>
//         <p>${ingredientsList}</p>
//         <h3>Instructions:</h3>
//         <p>${instructionsList}</p>
//         <button class="close-popup">Close</button>
//       </div>
//     </div>
//   `



export  {
  renderRecipes,
  displayRecipes
}

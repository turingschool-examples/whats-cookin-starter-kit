
const currentRecipeContainer = document.querySelector('.current-recipe-container');
const currentRecipeIngredients = currentRecipeContainer.querySelector('.current-recipe-ingredients');
const currentRecipeInstructions = currentRecipeContainer.querySelector('.current-recipe-instructions')
const currentRecipeTitle = currentRecipeContainer.querySelector('.current-recipe-title')
const recipeList = document.querySelector('.recipe-list');
const tagContainer = document.querySelector('.tag-container');
const buttonContainer = document.querySelector('.button-container');
const nextPageArrow = recipeList.querySelector('.right');
const prevPageArrow = recipeList.querySelector('.left');
const recipeRepo = new RecipeRepo(recipeData, usersData, ingredientsData);
let currentFilters = [];
let currentRecipes = recipeRepo.recipes;


recipeList.addEventListener('click', clickRecipeCard);
window.addEventListener('load', openPage);
nextPageArrow.addEventListener('click', showNextPage);
prevPageArrow.addEventListener('click', showPrevPage);
tagContainer.addEventListener('click', clickTagFilter);

function openPage() {
  generateRecipeCards(currentRecipes, 0);
}

function clickRecipeCard(e) {
  const currentRecipeCard = e.target.closest('.recipe-card');
  const currentRecipeTitle = currentRecipeCard.querySelector('.recipe-title').innerText;
  if (currentRecipeContainer.classList.contains('vis-hidden')) {
    showFeaturedRecipe(currentRecipeTitle);
  } else {
    removeFeaturedRecipe();
    showFeaturedRecipe(currentRecipeTitle);
  }
};

function clickTagFilter(e) {
  const currentTagBtn = e.target.previousElementSibling;
  const currentTagName = currentTagBtn.id.replace('-', ' ')
  if (currentFilters.includes(currentTagName)) {
    currentTagBtn.labels[0].classList.remove('tag-label-checked');
    currentFilters.splice(currentFilters.indexOf(currentTagName));
  } else if (currentTagName) {
    currentFilters.push(currentTagName);
    console.log(currentTagBtn)
    currentTagBtn.labels[0].classList.add('tag-label-checked');
  }
  const tags = recipeRepo.matchTags(currentFilters);
  const uniqueTags = tags.filter((tag, index) => tags.indexOf(tag) === index);
  generateRecipeCards(uniqueTags, 0);
}

function showFeaturedRecipe (recipeTitle) {
  currentRecipeContainer.classList.remove('vis-hidden');
  currentRecipeTitle.classList.remove('vis-hidden');
  const featuredRecipe = currentRecipes.find(recipe => recipe.name === recipeTitle);
  currentRecipeTitle.style.backgroundImage = `url(${featuredRecipe.image})`;
  featuredRecipe.instructions.forEach(instruction => {
    currentRecipeInstructions.innerHTML += `<p class="recipe-instruction">
    ${instruction.number}: ${instruction.instruction}</p>`;
  })
  currentRecipeTitle.innerText = recipeTitle;
  const ingredientObjList = featuredRecipe.getIngredients();
  ingredientObjList.forEach(ingredientObj => {
    currentRecipeIngredients.innerText += 
    ` ${ingredientObj.nameObj.name}: ${ingredientObj.quantity.amount.toFixed(2)}${ingredientObj.quantity.unit}.`;
  })
}

function removeFeaturedRecipe() {
  currentRecipeTitle.innerText = "";
  currentRecipeContainer.classList.add('vis-hidden');
  buttonContainer.style.backgroundImage = 'none';
  currentRecipeIngredients.innerHTML = 'Ingredients: ';
  currentRecipeInstructions.innerHTML = '';
}

function generateRecipeCards(newRecipes, iterationCounter) {  
  const recipeCards = recipeList.querySelectorAll('.recipe-card');
  let iterationCount = iterationCounter;
  if (newRecipes.length <= recipeCards.length) {
    generateLimitedCards(newRecipes);
  // } else if (newRecipes.length - iterationCounter < 3) {
  //   const smallDeck = newRecipes.splice(iterationCounter);
  //   newRecipes.push(...smallDeck);
  //   generateLimitedCards(smallDeck);
  // } 
  } else if (currentRecipes.length - iterationCount > 4 && iterationCount > -1) {
    currentRecipes = newRecipes;
    recipeCards.forEach(recipeCard => {
      const currentRecipe = newRecipes[iterationCount];
      iterationCount ++;
      createCardContents(recipeCard, currentRecipe, true);
    }
    )
  } else {
    nextPageArrow.classList.add('vis-hidden');
  }
}

function createCardContents (cardLi, recipe, booleanDecision = false) {
  cardLi.querySelector('.recipe-title').innerText = recipe.name;
  cardLi.querySelector('.recipe-img').src = recipe.image;
  randomizeCardColor(cardLi.querySelector('.recipe'));
  cardLi.querySelector('.recipe-cost').innerText = `$${recipe.getCost()}`;
  cardLi.classList.remove('vis-hidden');
  if (booleanDecision) {
    nextPageArrow.classList.remove('vis-hidden');
  }
}

function generateLimitedCards(recipeArr) {
  const recipeCards = recipeList.querySelectorAll('.recipe-card');
  recipeArr.forEach(recipe => {
    let currentRecipeCard = recipeCards[recipeArr.indexOf(recipe)];
    createCardContents(currentRecipeCard, recipe, true);
  })
  let cardNumber = recipeArr.length;
  recipeCards.forEach(recipeCard => {
    if (Array.from(recipeCards).indexOf(recipeCard) >= cardNumber) {
      recipeCard.classList.add('vis-hidden');
      nextPageArrow.classList.add('vis-hidden');
    }
  })
}


function showNextPage() {
  tagContainer.classList.add('vis-hidden');
  prevPageArrow.classList.remove('vis-hidden');
  const recipeCards = recipeList.querySelectorAll('.recipe-card');
  const lastRecipeCard = recipeCards[4];
  const lastRecipeTitle = lastRecipeCard.querySelector('.recipe-title').innerText;
  const lastRecipe = currentRecipes.find(recipe => recipe.name === lastRecipeTitle);
  const nextRecipe = currentRecipes[(currentRecipes.indexOf(lastRecipe)) + 1]
  if (currentRecipes.indexOf(nextRecipe) >= 4) {
    generateRecipeCards(currentRecipes, currentRecipes.indexOf(nextRecipe));
  } else if (currentRecipes.indexOf(nextRecipe) <= 4) {
    generateRecipeCards(currentRecipes, -1, false);
  }
}

function showPrevPage() {
  const recipeCards = recipeList.querySelectorAll('.recipe-card');
  const firstRecipeCard = recipeCards[0];
  const firstRecipeTitle = firstRecipeCard.querySelector('.recipe-title').innerText;
  const firstRecipe = currentRecipes.find(recipe => recipe.name === firstRecipeTitle);
  const firstRecipeIndex = currentRecipes.indexOf(firstRecipe)
  generateRecipeCards(currentRecipes, firstRecipeIndex - 5);
  if (recipeList.querySelector('.recipe-title').innerText === currentRecipes[0].name) {
    tagContainer.classList.remove('vis-hidden');
    prevPageArrow.classList.add('vis-hidden');
  }
}

function randomizeCardColor(recipeCard) {
  const colorArr = ['green-card', 'blue-card', 'orange-card', 'pink-card', 'cyan-card'];
  var color = colorArr[Math.floor(Math.random() * colorArr.length)];
  recipeCard.classList = `recipe ${color}`;

}


function shuffle(usersData) {
  var userLength = array.length, t, i;
  while (userLength) {
    i = Math.floor(Math.random() * userLength--);
    t = array[userLength];
    array[userLength] = array[i];
    array[i] = t;
  }
  return usersData;
}
//when calling RecipeRepo class
// shuffle usersData first,
// new RecipeRepo > send usersData[0]

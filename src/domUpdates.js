import recipeData from "./data/recipes";
import { findRecipeIngredients } from "./recipes";

let currentPage = 0;
const recipesPerPage = 5; 
const mainContainer = document.querySelector('.recipes');

function renderRecipeCard(recipe) {
  const article = document.createElement('article');
  article.classList.add('recipe-card');

  const imageDiv = document.createElement('div');
  imageDiv.classList.add('recipe-image');
  const img = document.createElement('img');
  img.src = recipe.image;
  img.alt = recipe.name;
  imageDiv.appendChild(img);

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('recipe-info');

  const tagsAndHeartDiv = document.createElement('div');
  tagsAndHeartDiv.classList.add('tags-and-heart');
  const tagsElement = document.createElement('h3');
  tagsElement.classList.add('recipe-tags');
  tagsElement.innerText = recipe.tags.join(', ');

  const heart = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  heart.classList.add('heart');
  heart.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  heart.setAttribute('viewBox', '0 0 24 24');
  heart.setAttribute('style', 'fill: rgba(157, 150, 139, 1); transform: scaleX(-1); msFilter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z');
  heart.appendChild(path);

  tagsAndHeartDiv.appendChild(tagsElement);
  tagsAndHeartDiv.appendChild(heart);

  infoDiv.appendChild(tagsAndHeartDiv);

  const nameElement = document.createElement('h2');
  nameElement.classList.add('recipe-name');
  nameElement.innerText = recipe.name;
  infoDiv.appendChild(nameElement);

  const ingredientsLabel = document.createElement('span');
  ingredientsLabel.classList.add('label');
  ingredientsLabel.innerText = 'ingredients';
  const ingredients = document.createElement('h3');
  ingredients.classList.add('recipe-ingredients');
  ingredients.innerText = findRecipeIngredients(recipe);

  infoDiv.appendChild(ingredientsLabel);
  infoDiv.appendChild(ingredients);
  article.appendChild(imageDiv);
  article.appendChild(infoDiv);
  mainContainer.appendChild(article);
}

function loadMoreRecipes() {
  const startIndex = currentPage * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const recipesToRender = recipeData.slice(startIndex, endIndex);
  recipesToRender.forEach(renderRecipeCard);

  currentPage++;

  const sentinel = document.querySelector('.sentinel');
  if (sentinel) {
    sentinel.remove();
  }

  const newSentinel = document.createElement('div');
  newSentinel.classList.add('sentinel');
  mainContainer.appendChild(newSentinel);
}

function isSentinelInView() {
  const sentinel = document.querySelector('.sentinel');
  if (!sentinel) return false;
  const rect = sentinel.getBoundingClientRect();
  return rect.top <= window.innerHeight;
}

mainContainer.addEventListener('scroll', function() {
  if (isSentinelInView()) {
    loadMoreRecipes();
  }
});

loadMoreRecipes();


export {
  renderRecipeCard,
  isSentinelInView,
  loadMoreRecipes
};
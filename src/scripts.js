//query selectors
const recipeCard = document.querySelector(".main-page");
const username = document.querySelector(".username");
let cookbook;
let user;

//event listeners
window.onload = loadPage();

//event handlers
function loadPage() {
  generateRandomUser();
  generateCookbook();
  displayAllRecipes();
};

//other functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateRandomUser() {
  let index = getRandomIndex(usersData);
  user = new User(usersData[index], ingredientsData);
  displayUsername();
};

function generateCookbook() {
  cookbook = new Cookbook(recipeData, ingredientsData);
};

//DOM manipulation
function displayUsername() {
  username.innerText = `Username: ${user.name}`;
};

function displayAllRecipes() {
  cookbook.allRecipes.forEach(recipe => {
    recipeCard.innerHTML += `
    <article class="recipe-card">
      <section class="recipe-graphics recipe-image">
        <div>
          <input type="image" src="../assets/heart.png" class="icon">
        </div>
        <div>
          <input type="image" src="../assets/frying-pan.png" class="icon">
        </div>
      </section>
      <h4>${recipe.name}</h4>
    </article>
    `
  })
};
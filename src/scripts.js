//query selectors
const username = document.querySelector(".username");
let user;

//event listeners
window.onload = loadPage();

//event handlers
function loadPage() {
  generateRandomUser();
  // generateCookbook();
  // displayRandomRecipes();
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

};

function displayRandomRecipes() {

};

//DOM manipulation
function displayUsername() {
  username.innerText = `Username: ${user.name}`;
};
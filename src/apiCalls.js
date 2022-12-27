//--> fetchy fetch stuff:
const usersURL = "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users";
const ingredientsURL = "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients";
const recipesURL = "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes";
// const URLArray = [usersURL, ingredientsURL, recipesURL];




const fetchUsersUrl = (usersURL) => {
    fetch(usersURL);
}

const fetchIngredientsURL = (ingredientsURL) => {
    fetch(ingredientsURL);
}

const fetchRecipesURL = (recipesURL) => {
    fetch(recipesURL);
}

Promise.all([fetchUsersUrl, fetchIngredientsURL, fetchRecipesURL]).then((values) => {
    console.log(values);
});
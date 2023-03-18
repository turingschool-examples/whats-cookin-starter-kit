//--> fetchy fetch stuff:
const usersURL = "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users";
const ingredientsURL = "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients";
const recipesURL = "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes";
// const URLArray = [usersURL, ingredientsURL, recipesURL];
// - Optional: How could you refactor your 3 fetch functions into just one, dynamic function?
    // - Hint: what if there was an argument of the type of data you want such as ‘hydration’ or ‘users’



const fetchUsersUrl = () => fetch(usersURL);

const fetchIngredientsURL = () => fetch(ingredientsURL);

const fetchRecipesURL = () => fetch(recipesURL);

function apiCalls() {
    Promise.all([fetchUsersUrl, fetchIngredientsURL, fetchRecipesURL])
    .then(res => res.json());
}

export {apiCalls};
let userData, recipeData, ingredientsData;

const userApi =
    fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        userData = data.usersData;
        console.log(userData);
    })
    .catch(err => console.log(err));

    const recipeApi =
    fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        recipeData = data.recipeData;
        console.log(recipeData);
    })
    .catch(err => console.log(err));

    const ingredientApi =
    fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        ingredientsData = data.ingredientsData;
        console.log(ingredientsData);
    })
    .catch(err => console.log(err));

// function fetchApiData() {
//     return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
// };

console.log('I will be a fetch request!');


//module.exports = testFetch;
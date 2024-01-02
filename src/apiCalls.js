export const getUsers = () => { 
    const users = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
        .then(response => response.json())
        .then(data => data.users)
        return users;
    }
    
export const getIngredients = () => { 
    const ingredients = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients')
        .then(response => response.json())
        .then(data => data.ingredients);
        return ingredients;
    }

export const getRecipes = () => {
    const recipes = fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
        .then(response => response.json())
        .then(data => data.recipes);
        return recipes;
    }

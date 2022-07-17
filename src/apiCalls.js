export const apiCalls = {
    fetchData() {
        const result = Promise.all(apiCalls.getAllData())
            .then(responses => {
                return responses
            });
            return result;
    },

    getAllData() {
        return [apiCalls.getRecipeData(), apiCalls.getAllIngredientsData(), apiCalls.getAllUserData()];
    },

    getRecipeData() {
        return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
            .then(response => response.json());
    },

    getAllIngredientsData() {
        return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients')
            .then(response => response.json());
    },

    getAllUserData() {
        return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
            .then(response => response.json());
    },
}

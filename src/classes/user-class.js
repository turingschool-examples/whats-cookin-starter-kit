import RecipeRepository from './RecipeRepository';

class User {
    constructor(users) {
        this.name = users.name;
        this.id = users.id;
        this.pantry = users.pantry;
        this.recipesToCook = [];
    }

    addRecipeToCook(recipe) {
        this.recipesToCook.push(recipe)
    }

    removeRecipeToCook(recipe) {
        let index = this.recipesToCook.indexOf(recipe)
        this.recipesToCook.splice(index, 1)
    }

    userFilterTags(tag) {
            let filteredByTag = this.recipesToCook.filter(recipe => {
              if (recipe.tags.includes(tag)) {
              return recipe
            }
            });
              return filteredByTag
    }

    userFilterNames(name) {
            let filteredByName = this.recipesToCook.filter(recipe => {
              if (recipe.name.toLowerCase().includes(name.toLowerCase())) {
              return recipe
            }
            });
              return filteredByName
          }
    }


export default User
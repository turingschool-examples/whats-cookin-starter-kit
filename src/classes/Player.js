import Recipe from "./Recipe";

class Player {
    constructor(playerData) {
        this.name = playerData.name;
        this.id = playerData.id;
        this.pantry = playerData.pantry;
        this.toCookList = [];
    }

    addToCookList(recipeId) {
        this.toCookList.push(recipeId);
        this.toCookList.sort((a, b) => a - b);
        // console.log("Cooklist? ", this.toCookList);
    }

    removeIdFromToCookList(recipeId) {
        const idIndex = this.toCookList.indexOf(recipeId);
        if (idIndex > -1) {
            this.toCookList.splice(idIndex, 1);
        }
    }

    filterMyRecipeTags(tag) {
        let recipeInstances = this.toCookList.map(recipeId => new Recipe(recipeData))
        //how do I make a new Recipe from all the data based on a given id? Do I need to call for the the way I did with Ingredients

    }

    filterMyRecipeNames(name) {

    }
}
export default Player;
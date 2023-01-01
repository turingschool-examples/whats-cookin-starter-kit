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

    fillRecipeBox(bigRecipeData) {
        // console.log(bigRecipeData);
        let filteredObjects = bigRecipeData.reduce((acc, currObj) => {
            this.toCookList.forEach(id => {
                if (id === currObj.id) {
                    currObj = new Recipe(currObj)
                    acc.push(currObj);
                }
            });
            return acc;
        }, []);
        // console.log(filteredObjects);
        return filteredObjects;
    }

    filterMyRecipeTags(tag, bigRecipeData) {
        // console.log("tag: ", tag);
        let recipeInstances = this.fillRecipeBox(bigRecipeData);
        // console.log("recipeInstances: ", recipeInstances);
        let taggedObject = recipeInstances.reduce((acc, curr) => {
            let tagCheck = curr.checkRecipeTags(tag);
            if (tagCheck !== undefined) {
                acc.push(curr);
            }
            return acc;
        }, []);
        // console.log("taggedObject: ", taggedObject);
        return taggedObject;
    }

    filterMyRecipeNames(name, bigRecipeData) {
        let recipeInstances = this.fillRecipeBox(bigRecipeData);
        let foundRecipe = recipeInstances.find(element => element.name === name);
        // console.log(foundRecipe);
        return foundRecipe;
    }
}
export default Player;
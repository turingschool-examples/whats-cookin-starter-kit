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
}
export default Player;
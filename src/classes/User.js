class User {
    constructor(user) {
        this.name = user.name;
        this.id = user.id;
        this.pantry = user.pantry || [];
        this.recipesToCook = [];
    };

    addToCookList(recipe) {
        this.recipesToCook.push(recipe);
    };

    filterByTag(tag) {
        return this.recipesToCook.filter(recipe => recipe.tags.includes(tag));
    };

    filterByName(name) {
        return this.recipesToCook.filter(recipe => recipe.name.includes(name));
    };

};

export default User
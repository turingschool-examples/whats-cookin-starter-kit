class User {
    constructor() {
        this.recipesToCook = [];
    };

    addToCookList(recipe) {
        this.recipesToCook.push(recipe);
    };

    filterByTag(tag) {
        //do an iterator 'if this.recipesToCook[i].tags has 'tag', return those recipesToCook 
    };

    filterByName(name) {
        //do an iterator 'if this.recipesToCook[i].name has 'name', return those recipesToCook 
    };

};

module.exports = User;
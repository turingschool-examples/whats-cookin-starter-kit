class UserList {
  constructor() {
    this.recipesToCook = [];
  }
  addRecipeToList(recipe) {
    this.recipesToCook.push(recipe);
  }

  removeRecipeFromList(id) {
    const itemIndex = this.recipesToCook.findIndex((item) => {
      return item.id === id;
    });
    this.recipesToCook.splice(itemIndex, 1);
  }

  filterByTag(tag) {
    const filteredByTag = this.recipesToCook.filter((item) => {
      return item.tags.includes(tag);
    });
    return filteredByTag;
  }

  filterByName(name) {
    const filteredByName = this.recipesToCook.filter((item) => {
      return item.name.toLowerCase().includes(name.toLowerCase());
    });
    return filteredByName;
  }
}

module.exports = UserList;

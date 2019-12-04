class Recipes {
  constructor(name, id, image, ingredients) {
    this.name = name;
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipes;
}

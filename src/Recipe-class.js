class Recipe {
  constructor(id, image, name) {
    this.id = id;
    this.image = image;
    this.ingredients = [];
    this.instructions = [];
    this.name = name;
    this.tags = [];
  }
}

module.exports = Recipe;

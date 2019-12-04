class Recipes {
  constructor(name, id, image, instructions, ingredients, tags) {
    this.name = name;
    this.id = id;
    this.image = image;
    this.instructions = instructions;
    this.ingredients = ingredients;
    this.tags = tags;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipes;
}

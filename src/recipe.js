class Recipe {
  constructor(name, id, image) {
    this.name = name;
    this.id = id;
    this.image = image; 
    this.ingredients = [];
    // this.type = type;
    // this.instructions = instructions;
    // this.totalCost = totalCost;

  }

  getTotalCost() {
    // ingredient cost * amount of ingredients needed = total cost returned
  }
}

module.exports = Recipe; 
class Recipe {
  constructor(dataSetObject) {
    this.id = dataSetObject.id;
    this.image = dataSetObject.image;
    this.ingredients = dataSetObject.ingredients;
    this.instructions = dataSetObject.instructions;
    this.name = dataSetObject.name;
    this.tags = dataSetObject.tags;
  }
  getIngredientNames(dataSet) {
   return this.ingredients.map(ingredient => {
    return dataSet.find(element => element.id === ingredient.id).name;
   })
  }
  //RETURNS AN ARRAY OF STRINGS OF THE INGREDIENT NAMES

  getDirections() {
    return this.instructions.map((item) => item.instruction);
  }
  //RETURNS INSTRUCTION STEPS IN AN ARRAY OF STRINGS

  getCosts(dataSet) {
   return this.ingredients.reduce((allCosts, ingred) => {
    let currentIngredient = dataSet.find(element => element.id === ingred.id);
    let totalCost = currentIngredient.costInCents * ingred.quantity.amount;
    let dollars = totalCost / 100;
    dollars = dollars.toFixed(2)
    allCosts.push(+dollars)
    return allCosts
    }, []);
  }
  //RETURNS AN ARRAY OF NUMBERS THAT ARE THE ESTIMATED COST IN CENTS
}

export default Recipe;

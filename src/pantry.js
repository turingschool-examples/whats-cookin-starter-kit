class Pantry {
  constructor(pantryDetails) {
    this.id = pantryDetails.id;
    this.name = pantryDetails.name;
    this.estimatedCostInCents = pantryDetails.estimatedCostInCents;

  }
}

module.exports = Pantry;
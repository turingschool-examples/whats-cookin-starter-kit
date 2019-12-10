class Cookbook {	class Cookbook {
  constructor(recipeData) {	  constructor() {
    this.cookbook = recipeData;	    this.cookbook = [];
  }	  }


  loadBook() {	  loadBook(recipeData) {
    this.cookbook.push();	    this.cookbook.push(recipeData);
  }	  }
}	}

if (typeof module !== 'undefined'){	
  module.exports = Cookbook;	
}

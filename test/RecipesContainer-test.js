import { expect } from 'chai';
import RecipesContainer from '../src/classes/RecipesContainer';

describe('Recipe', () => {
  let recipesContainer;
  let testData = [{
    "id": 595736,
    "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
    "ingredients": [
      {
        "id": 20081,
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      },
      {
        "id": 2050,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
      {
        "instruction": "Add egg and vanilla and mix until combined.",
        "number": 2
      },
    ],
    "name": "Loaded Chocolate Chip Pudding Cookie Cups",
    "tags": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ]
  },
  {
    "id": 678353,
    "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
    "ingredients": [
      {
        "id": 1009016,
        "quantity": {
          "amount": 1.5,
          "unit": "cups"
        }
      },
      {
        "id": 1016168,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
        "number": 1
      }
    ],
    "name": "Maple Dijon Apple Cider Grilled Pork Chops",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]
  },
  {
    "id": 412309,
    "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
    "ingredients": [
      {
        "id": 1002030,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      },
      {
        "id": 1042047,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
        "number": 1
      }
    ],
    "name": "Dirty Steve's Original Wing Sauce",
    "tags": [
      "sauce"
    ]
  },];

  beforeEach(function() {
    recipesContainer = new RecipesContainer(data);
  })
  it('Should be a function', () => {
    expect(RecipesContainer).to.be.a('function');
    expect(recipesContainer).to.be.an.instanceOf(RecipesContainer);
  });

  it('Should instantiate our good friend RecipesContainer')
  //expect(RecipesContainer.data).to.deep.equal(the data variable) -->or something about index position, like data[0].tags or whatever
  
  it('Should have a parameter to take in data and a property to refer to and access that data')
//expect(RecipesContainer.data).to.be.a.property;
//check if the data has a recipe name or tag
  it('Should have a method to filter recipe data by each recipe object\'s tags property')

  it('Should have a method to search recipes by name property')

  it('Should have a method to provide a recipe list, the name property from each recipe object')
})

import { expect } from 'chai';
import RecipesContainer from '../src/classes/RecipesContainer';

describe('Recipe', () => {
  let recipesContainer1;
  let testData;
  beforeEach(function() {
    recipesContainer1 = new RecipesContainer(testData);
    testData = [{
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
        "sauce",
        "snack"
      ]
    },];
  });

  it('Should be a function', () => {
    expect(RecipesContainer).to.be.a('function');
  });
  
  it('Should instantiate our good friend RecipesContainer', () => {
    expect(recipesContainer1).to.be.an.instanceOf(RecipesContainer);
  });
  
  it('Should have a parameter to take in data and a property to refer to and access that data', () => {
    expect(recipesContainer1.data).to.be.a.property;
    expect(recipesContainer1.data[0].id).to.be.equal(595736);
  });

  it('Should have a method to filter recipe data by each recipe object\'s tags property', () => {
    let tag = "snack";
    let method1 = recipesContainer1.tagRecipes(tag);
    let tagIds = [ 595736, 412309 ];
    expect(method1).to.have.deep.members(tagIds);
    //do we want the whole recipe objects returned or just a component? return the ids? (I didn't use reduce() in case i wanted to remove .map() to have access to the whole element later)
    //the order of tagIds array should not matter for this, do we need to test for this?
  });

  it('Should have a method to search recipes by name property', () => {
    const foodName = "Maple Dijon Apple Cider Grilled Pork Chops";
    let method2 = recipesContainer1.findRecipeByName(foodName);
    // console.log("method2.name: ", method2.name);
    //so what if there are multiple same-name recipes?
    expect(method2.name).to.equal(foodName);
  });

  it('Should have a method to provide a recipe list, the name property from each recipe object, in sorted order', () => {
    let method3 = recipesContainer1.listRecipes();
    expect(method3).to.have.deep.members(["Loaded Chocolate Chip Pudding Cookie Cups", "Maple Dijon Apple Cider Grilled Pork Chops", "Dirty Steve's Original Wing Sauce"]);
    //map all the recipes, include an alphabetical sort
    //a sad path would be, are there duplicates? we could just put in a Set, or add includes() and push
  });
})

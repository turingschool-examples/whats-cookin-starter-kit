const expect = require('chai').expect;

const recipeData = require('../data/recipes');
const scripts = require('../src/scripts.js');

const truncatedRecipes = [
  {
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
        "id": 18372,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      }
    ],
    "name": "Loaded Chocolate Chip Pudding Cookie Cups",
    "tags": [
      "antipasti",
      "starter"
    ]
  },
  {
    "id": 583502,
    "image": "https://spoonacular.com/recipeImages/583502-556x370.jpg",
    "ingredients": [
      {
        "id": 6150,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 19334,
        "quantity": {
          "amount": 2,
          "unit": "tbsp"
        }
      },
      {
        "id": 6194,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Combine 1 cup chicken broth, 1 cup BBQ sauce, 3 tbsp liquid smoke, 2 tbsp Worcestershire sauce, 3 pressed garlic cloves, 2 tbsp brown sugar and stir to combine.Generously sprinkle the pork roast with salt, pepper and paprika.Rub the seasoning into the pork shoulder.Chop 1 large onion and place it into the bottom of the slow cooker.",
        "number": 1
      }
    ],
    "name": "Pulled Pork",
    "tags": [
      "lunch"
    ]
  }
]

describe('searchByTag function', function() {

  it('should be a function', function() {
    expect(scripts.searchByTag).to.be.a('function');
  });

  it.only('should be able to search recipes by tag', function() {

    console.log("function call", scripts.searchByTag('antipasti', truncatedRecipes));
    console.log("result", [truncatedRecipes[0]]);

    expect(scripts.searchByTag('antipasti', truncatedRecipes)).to.deep.equal([truncatedRecipes[0]]);
  });
});

// it('should log an error message if a user inputs an invalid search term', function() {
//
//   user.searchByTag(8);
//
//   expect(user.searchByTag(8)).to.equal('This tag is not in our library');
// });

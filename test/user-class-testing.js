import { expect } from 'chai';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import usersData from '../src/data/users';

describe('User', () => {
  let user1 
  let user2
  let recipe1
  let recipe2
  beforeEach(() => {
    user1 = new User({
      "name": "Saige O'Kon",
      "id": 1,
      "pantry": [
        {
          "ingredient": 11297,
          "amount": 4
        },
        {
          "ingredient": 1082047,
          "amount": 10
        },
        {
          "ingredient": 20081,
          "amount": 5
        },
        {
          "ingredient": 11215,
          "amount": 5
        },
        {
          "ingredient": 2047,
          "amount": 6
        },
        {
          "ingredient": 1123,
          "amount": 8
        },
        {
          "ingredient": 11282,
          "amount": 4
        },
        {
          "ingredient": 6172,
          "amount": 2
        },
        {
          "ingredient": 2044,
          "amount": 2
        },
        {
          "ingredient": 2050,
          "amount": 4
        },
        {
          "ingredient": 1032009,
          "amount": 3
        },
        {
          "ingredient": 5114,
          "amount": 3
        },
        {
          "ingredient": 1017,
          "amount": 2
        },
        {
          "ingredient": 18371,
          "amount": 7
        },
        {
          "ingredient": 1001,
          "amount": 6
        },
        {
          "ingredient": 99223,
          "amount": 2
        },
        {
          "ingredient": 1230,
          "amount": 2
        },
        {
          "ingredient": 9152,
          "amount": 4
        },
        {
          "ingredient": 10611282,
          "amount": 2
        },
        {
          "ingredient": 93607,
          "amount": 2
        },
        {
          "ingredient": 14106,
          "amount": 4
        },
        {
          "ingredient": 1077,
          "amount": 4
        },
        {
          "ingredient": 6150,
          "amount": 2
        },
        {
          "ingredient": 1124,
          "amount": 2
        },
        {
          "ingredient": 10011693,
          "amount": 4
        },
        {
          "ingredient": 1102047,
          "amount": 2
        },
        {
          "ingredient": 19206,
          "amount": 2
        },
        {
          "ingredient": 1145,
          "amount": 4
        },
        {
          "ingredient": 1002030,
          "amount": 4
        },
        {
          "ingredient": 12061,
          "amount": 2
        },
        {
          "ingredient": 19335,
          "amount": 4
        },
        {
          "ingredient": 15152,
          "amount": 3
        },
        {
          "ingredient": 9003,
          "amount": 2
        },
        {
          "ingredient": 18372,
          "amount": 3
        },
        {
          "ingredient": 2027,
          "amount": 2
        }
      ]
    })
    user2 = new User({
      "name": "Ephraim Goyette",
      "id": 2,
      "pantry": [
        {
          "ingredient": 6150,
          "amount": 3
        },
        {
          "ingredient": 1032009,
          "amount": 7
        },
        {
          "ingredient": 1082047,
          "amount": 8
        },
        {
          "ingredient": 1034053,
          "amount": 6
        },
        {
          "ingredient": 2050,
          "amount": 10
        },
        {
          "ingredient": 19335,
          "amount": 13
        },
        {
          "ingredient": 1145,
          "amount": 5
        },
        {
          "ingredient": 18371,
          "amount": 8
        },
        {
          "ingredient": 19336,
          "amount": 4
        },
        {
          "ingredient": 11215,
          "amount": 12
        },
        {
          "ingredient": 9152,
          "amount": 3
        },
        {
          "ingredient": 11297,
          "amount": 4
        },
        {
          "ingredient": 1123,
          "amount": 17
        },
        {
          "ingredient": 16112,
          "amount": 2
        },
        {
          "ingredient": 4053,
          "amount": 11
        },
        {
          "ingredient": 10011693,
          "amount": 4
        },
        {
          "ingredient": 5114,
          "amount": 2
        },
        {
          "ingredient": 11529,
          "amount": 5
        },
        {
          "ingredient": 1001,
          "amount": 14
        },
        {
          "ingredient": 2027,
          "amount": 6
        },
        {
          "ingredient": 1002030,
          "amount": 9
        },
        {
          "ingredient": 20081,
          "amount": 10
        },
        {
          "ingredient": 1077,
          "amount": 5
        },
        {
          "ingredient": 14106,
          "amount": 7
        },
        {
          "ingredient": 2009,
          "amount": 5
        },
        {
          "ingredient": 16124,
          "amount": 4
        },
        {
          "ingredient": 2031,
          "amount": 3
        },
        {
          "ingredient": 2025,
          "amount": 5
        },
        {
          "ingredient": 11282,
          "amount": 8
        },
        {
          "ingredient": 20027,
          "amount": 2
        },
        {
          "ingredient": 11333,
          "amount": 3
        },
        {
          "ingredient": 19177,
          "amount": 2
        },
        {
          "ingredient": 11821,
          "amount": 3
        },
        {
          "ingredient": 18372,
          "amount": 9
        },
        {
          "ingredient": 1012047,
          "amount": 2
        },
        {
          "ingredient": 11291,
          "amount": 2
        },
        {
          "ingredient": 1102047,
          "amount": 4
        },
        {
          "ingredient": 6194,
          "amount": 5
        },
        {
          "ingredient": 19296,
          "amount": 5
        },
        {
          "ingredient": 11477,
          "amount": 3
        },
        {
          "ingredient": 2047,
          "amount": 12
        },
        {
          "ingredient": 93607,
          "amount": 6
        },
        {
          "ingredient": 12061,
          "amount": 8
        },
        {
          "ingredient": 11353,
          "amount": 3
        },
        {
          "ingredient": 6615,
          "amount": 2
        },
        {
          "ingredient": 9003,
          "amount": 2
        },
        {
          "ingredient": 19911,
          "amount": 2
        },
        {
          "ingredient": 1124,
          "amount": 3
        },
        {
          "ingredient": 11165,
          "amount": 2
        },
        {
          "ingredient": 1125,
          "amount": 3
        },
        {
          "ingredient": 1089003,
          "amount": 2
        },
        {
          "ingredient": 12120,
          "amount": 2
        },
        {
          "ingredient": 10511282,
          "amount": 2
        },
        {
          "ingredient": 1019,
          "amount": 2
        },
        {
          "ingredient": 9302,
          "amount": 2
        },
        {
          "ingredient": 1011256,
          "amount": 2
        },
        {
          "ingredient": 9019,
          "amount": 4
        },
        {
          "ingredient": 11206,
          "amount": 2
        },
        {
          "ingredient": 19350,
          "amount": 2
        },
        {
          "ingredient": 9099,
          "amount": 18
        },
        {
          "ingredient": 14412,
          "amount": 3
        }
      ]
    })
    recipe1 = {
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
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 19206,
          "quantity": {
            "amount": 3,
            "unit": "Tbsp"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 1012047,
          "quantity": {
            "amount": 24,
            "unit": "servings"
          }
        },
        {
          "id": 10019903,
          "quantity": {
            "amount": 2,
            "unit": "c"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 0.5,
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
        {
          "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
          "number": 3
        },
        {
          "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
          "number": 4
        },
        {
          "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
          "number": 5
        },
        {
          "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
          "number": 6
        }
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
    }
    recipe2 = {
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
          "id": 9003,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 20027,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1002046,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 1,
            "unit": "clove"
          }
        },
        {
          "id": 1012046,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 19911,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 16112,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 10010062,
          "quantity": {
            "amount": 24,
            "unit": "ounce"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 16124,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
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
    }
  })

  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('Should be a new instance of User', () => {
    expect(user1).to.be.an.instanceof(User);
  });

  it('Should have a name', () => {
    expect(user1.name).to.equal("Saige O'Kon");
  });

  it('Should have anv id', () => {
    expect(user1.id).to.equal(1);
  });

  it('Should have a pantry', () => {
    expect(user1.pantry).to.deep.equal(usersData[0].pantry);
  });

  it('Should have a favorites array', () => {
    expect(user1.favorites).to.deep.equal([]);
  });

  it('Should have a method to add recipe to favorites array', () => {
    expect(user1.addToFavorites).to.be.a('function');
  });

  it('Should return the array with added recipe', () => {
    expect(user1.addToFavorites(recipe1)).to.deep.equal([recipe1]);
    expect(user1.favorites[0]).to.deep.equal(recipe1)
    expect(user1.addToFavorites(recipe2)).to.deep.equal([recipe1, recipe2])
    expect(user1.favorites[1]).to.deep.equal(recipe2)
  });

  it('Should have a method to remove recipe favorites array', () => {
    expect(user1.removeFromFavorites).to.be.a('function');
  });

  it('Should return favorites array without removed recipe', () => {
    user1.addToFavorites(recipe1)
    user1.addToFavorites(recipe2)
    user1.removeFromFavorites(recipe1)
    expect(user1.favorites).to.deep.equal([recipe2])
  });

  it('Should have a method that filters by tag', () => {
    expect(user1.filterFavsByTag).to.be.a('function');
  });

  it('Should return all the recipes in favorites array that match the filter tag', () => {
    user1.addToFavorites(recipe1)
    user1.addToFavorites(recipe2)
    expect(user1.filterFavsByTag('snack')).to.deep.equal([recipe1]);
  });

  it('Should have a method that filters by name', () => {
    expect(user1.filterFavsByName).to.be.a('function');
  });

  it('Should return all the recipes in favorites array that match the filter name', () => {
    user1.addToFavorites(recipe1)
    user1.addToFavorites(recipe2)
    expect(user1.filterFavsByName('Maple Dijon Apple Cider Grilled Pork Chops')).to.deep.equal([recipe2]);
  });

})
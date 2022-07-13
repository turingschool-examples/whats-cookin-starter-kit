import { expect } from 'chai'; 
import User from '../src/classes/User'; 

describe('User', () => {
    let user;
    let dataUser;
    let dataRecipe;

    beforeEach(() => {
        dataUser = 
            {
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
                }
              ]
            };

            dataRecipe =  {
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
                  }
                ],
                "name": "Loaded Chocolate Chip Pudding Cookie Cups",
                "tags": [
                  "antipasti",
                  "starter",
                  "snack",
                ]
              };
        
        
        user = new User( dataUser )
    });

    it( 'should be a function', () => {
        expect(User).to.be.a('function');
    });

    it( 'should be an instance of User', () => {
        expect(user).to.be.an.instanceOf(User)
    });

    it( 'should take in a user name', () => {
        expect(user.name).to.equal("Saige O'Kon")
    });

    it( 'should take in an user id', () => {
        expect(user.id).to.equal(1)
    });

    it( 'should take in a user pantry', () => {
        expect(user.pantry).to.deep.equal(
            [
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
                }
              ]
        )
    }); 

    it( 'should take in recipesToCook', () => {
        expect(user.favoriteRecipes).to.be.a("array")
        expect(user.recipesToCook).to.deep.equal( [] )
    }); 

    it( 'should take in favoriteRecipes', () => {
        expect(user.favoriteRecipes).to.be.a("array")
        expect(user.favoriteRecipes).to.deep.equal( [] )
    });

    it( 'should save a recipe in recipesToCook array', () => {
        user.addRecipeToRecipesToCook( dataRecipe )
        expect(user.recipesToCook.length).to.deep.equal( 1 )
        expect(user.recipesToCook).to.deep.equal(
            [
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
                      },
                      {
                        "id": 19335,
                        "quantity": {
                          "amount": 0.5,
                          "unit": "c"
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
                      }
                    ],
                    "name": "Loaded Chocolate Chip Pudding Cookie Cups",
                    "tags": [
                      "antipasti",
                      "starter",
                      "snack",
                    ]
                }
            ]
        )
    });

    it( 'should favorite recipe to favoriteRecipes', () => {
        user.addRecipeToFavorites( dataRecipe )
        expect(user.favoriteRecipes).to.be.a("array")
        expect(user.favoriteRecipes.length).to.equal( 1 )
        expect(user.favoriteRecipes).to.deep.equal( 
            [
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
                      },
                      {
                        "id": 19335,
                        "quantity": {
                          "amount": 0.5,
                          "unit": "c"
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
                      }
                    ],
                    "name": "Loaded Chocolate Chip Pudding Cookie Cups",
                    "tags": [
                      "antipasti",
                      "starter",
                      "snack",
                    ]
                }
            ]
         )
    });
});
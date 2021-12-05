
CookBook [
    Recipe1 {
        id: 0,
        img: "String",
        ingredientList: [
          {
            id: 'ingredient 1'
						quantity: {
								amt: 0,
								unit: 0,
						}
					}
          {
            id: 'ingredient 2'
            quantity: {
                amt: 1,
                unit: 1,
            }
          }
				]
        instructions(RecipeProperty): [
          {
            Step: 'instructions here',
            stepNnumber: 1,
          }
          {
            Step: 'instructions here',
            stepNumber: 2,
          }
          {
            Step: 'instructions here',
            stepNumber: 3,
          }
        ]
        recipeTitle (recipeProperty): 'string',
        tags (recipeProperty): [tag1, tag2, tag3]
      }
    ]


    //Instantiate Recipe
    //It should have id
    //It should have recipeImages
    //should have ingredientList
    //should have instructions
      //instructions should have step/single instruction
      //instructions should have number/step order
    //should have recipeTitle
    //it should have tags
    //it should be able to hold multiple tags
    //ingredient list should have an id
    //ingredient list should have quantity
      //quantity should have amount
      //quanity should have unit

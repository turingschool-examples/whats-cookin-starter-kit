
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

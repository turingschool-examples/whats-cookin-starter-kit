import { expect } from 'chai';
import { filterByTag, filterByName } from '../src/filters';
import { sampleIngredientsData, sampleRecipeData } from './sampleIngredients';

describe('filterByTag', () => {
  it('should filter recipe list by tag', () => {
    const tag1 = 'snack'
    const tag2 = 'DESSERT'
    const tag3 = 'concrete'
    expect(filterByTag(tag1, sampleRecipeData)).to.deep.equal([{
      id: 101,
      image: 'https://sallysbakingaddiction.com/wp-content/uploads/2021/02/french-macarons.jpg',
      ingredients: [
        {
          id: 1,
          quantity: {
            amount: 6,
            unit: 'large',
          },
        },
        {
          id: 7,
          quantity: {
            amount: 2,
            unit: 'cups',
          },
        },
        {
          id: 8,
          quantity: {
            amount: 2,
            unit: 'cups',
          },
        },
        {
          id: 9,
          quantity: {
            amount: 2,
            unit: 'cups',
          },
        },
        {
          id: 10,
          quantity: {
            amount: 0.5,
            unit: 'teaspoons',
          },
        },
      ],
      instructions: [
        {
          instruction: 'Separate yolks from egg-whites, you will only use the egg-whites.',
          number: 1,
        },
        {
          instruction: 'Mix Egg Whites with granulated sugar until meringue has stiff peaks, add vanilla',
          number: 2,
        },
        {
          instruction: 'Finish the Macarons',
          number: 3,
        },
      ],
      name: 'Macarons',
      tags: ['dessert', 'cookie', 'snack']
    },
    {
      id: 104,
      image: 'https://spoonacular.com/recipeImages/231951-556x370.jpg',
      ingredients: [
        {
          id: 1,
          quantity: {
            amount: 2,
            unit: 'tablespoons',
          },
        },
        {
          id: 2,
          quantity: {
            amount: 0.5,
            unit: 'cup',
          },
        },
        {
          id: 3,
          quantity: {
            amount: 0.5,
            unit: 'cup',
          },
        },
        {
          id: 4,
          quantity: {
            amount: 4,
            unit: 'servings',
          },
        },
        {
          id: 5,
          quantity: {
            amount: 2,
            unit: 'tablespoons',
          },
        },
        {
          id: 6,
          quantity: {
            amount: 1,
            unit: 'teaspoon',
          },
        },
        {
          id: 7,
          quantity: {
            amount: 1.5,
            unit: 'cups',
          },
        },
      ],
      instructions: [
        {
          instruction:
            'Whisk together brown sugar, cornstarch, and 1/4 teaspoon salt in a heavy medium saucepan, then whisk in milk and cream. Bring to a boil over medium heat, whisking frequently, then boil, whisking, 1 minute.',
          number: 1,
        },
        {
          instruction: 'Remove from heat and whisk in butter and vanilla.',
          number: 2,
        },
        {
          instruction:
            'Pour into a bowl, then cover surface with buttered wax paper and chill until cold, at least 1 1/2 hours.',
          number: 3,
        },
      ],
      name: 'Butterscotch Pudding',
      tags: ['side dish', 'dessert', 'pudding', 'snack'],
    },
    {
      id: 105,
      image: 'https://spoonacular.com/recipeImages/880108-556x370.jpg',
      ingredients: [
        {
          id: 3,
          quantity: {
            amount: 1,
            unit: 'large',
          },
        },
        {
          id: 4,
          quantity: {
            amount: 1,
            unit: 'bunch',
          },
        },
        {
          id: 5,
          quantity: {
            amount: 4,
            unit: 'cloves',
          },
        },
        {
          id: 6,
          quantity: {
            amount: 1,
            unit: 'large',
          },
        },
        {
          id: 7,
          quantity: {
            amount: 0.25,
            unit: 'cup',
          },
        },
        {
          id: 8,
          quantity: {
            amount: 1,
            unit: 'cup',
          },
        },
        {
          id: 9,
          quantity: {
            amount: 1,
            unit: 'tsp',
          },
        },
        {
          id: 10,
          quantity: {
            amount: 1,
            unit: 'large',
          },
        },
      ],
      instructions: [
        {
          instruction: 'Rinse the quinoa under cool running water.',
          number: 1,
        },
        {
          instruction:
            'Place the rinsed quinoa in a pot with 1.75 cups of water. Put a lid on top, bring it to a boil, then reduce the heat to low and let simmer for 15 minutes. After 15 minutes, turn off the heat. Allow the quinoa to cool before making the salad or else the heat will wilt the parsley and vegetables. To cool it faster, spread it out on a baking sheet and place in the refrigerator for 30 minutes.While the quinoa is cooling, prepare the rest of the salad.',
          number: 2,
        },
        {
          instruction:
            'Cut the tomato and cucumber into a small dice. Rinse the parsley well to remove sand and grit, then chop well.',
          number: 3,
        },
        {
          instruction:
            'Add the cucumber, tomato, and parsley to a bowl.To make the dressing, squeeze the juice from the lemon into a bowl (about  cup). Mince the garlic and add to the lemon juice along with the olive oil and salt.Once the quinoa is cooled, combine it with the chopped vegetables and the lemon dressing. Stir well and then serve!',
          number: 4,
        },
      ],
      name: 'quinoa tabbouleh',
      tags: ['side dish', 'snack'],
    },
    {
      id: 107,
      image: 'https://spoonacular.com/recipeImages/602311-556x370.jpg',
      ingredients: [
        {
          id: 7,
          quantity: {
            amount: 0.6666666666666666,
            unit: 'cup',
          },
        },
        {
          id: 6,
          quantity: {
            amount: 0.6666666666666666,
            unit: 'cup',
          },
        },
        {
          id: 5,
          quantity: {
            amount: 2,
            unit: 'envelopes',
          },
        },
        {
          id: 4,
          quantity: {
            amount: 1,
            unit: 'tbsp',
          },
        },
        {
          id: 3,
          quantity: {
            amount: 30,
            unit: 'servings',
          },
        },
        {
          id: 2,
          quantity: {
            amount: 0.6666666666666666,
            unit: 'cup',
          },
        },
        {
          id: 1,
          quantity: {
            amount: 30,
            unit: 'servings',
          },
        },
      ],
      instructions: [
        {
          instruction:
            'Lightly spray the mold with non-stick spray and wipe excess off with a paper towel. Don’t overdo it or the residue will affect the taste of the jello.',
          number: 1,
        },
        {
          instruction:
            'Pour the soda, juice, and cream into a medium saucepan and sprinkle the gelatin on top. Allow the gelatin to soak for 2-3 minutes, then begin to heat on low, stirring constantly until gelatin is fully dissolved (about 5 minutes).',
          number: 2,
        },
        {
          instruction: 'Remove saucepan from heat and add vodka and food coloring.',
          number: 3,
        },
        {
          instruction: 'Pour into molds and chill for several hours, or until set.',
          number: 4,
        },
        {
          instruction:
            'Remove from mold, top with whipped cream, and enjoy responsibly!*The original recipe suggests 2-3 envelopes, depending on how long your jello shots will be left out (more gelatin for more time). I opted for 3 because we were traveling an hour to get to the party, but I found them to be a little too firm , so I suggest you stick with 2 and plan accordingly for the best results!',
          number: 5,
        },
      ],
      name: 'Birthday Cake Jello Shots',
      tags: ['antipasti', 'starter', 'snack', 'appetizer', 'antipasto', "hor d'oeuvre"],
    },
    ])
    expect(filterByTag(tag2, sampleRecipeData)).to.deep.equal([
      {
        id: 101,
        image: 'https://sallysbakingaddiction.com/wp-content/uploads/2021/02/french-macarons.jpg',
        ingredients: [
          {
            id: 1,
            quantity: {
              amount: 6,
              unit: 'large',
            },
          },
          {
            id: 7,
            quantity: {
              amount: 2,
              unit: 'cups',
            },
          },
          {
            id: 8,
            quantity: {
              amount: 2,
              unit: 'cups',
            },
          },
          {
            id: 9,
            quantity: {
              amount: 2,
              unit: 'cups',
            },
          },
          {
            id: 10,
            quantity: {
              amount: 0.5,
              unit: 'teaspoons',
            },
          },
        ],
        instructions: [
          {
            instruction: 'Separate yolks from egg-whites, you will only use the egg-whites.',
            number: 1,
          },
          {
            instruction: 'Mix Egg Whites with granulated sugar until meringue has stiff peaks, add vanilla',
            number: 2,
          },
          {
            instruction: 'Finish the Macarons',
            number: 3,
          },
        ],
        name: 'Macarons',
        tags: ['dessert', 'cookie', 'snack']
      },
      {
        id: 103,
        image: 'https://spoonacular.com/recipeImages/623855-556x370.jpg',
        ingredients: [
          {
            id: 1,
            quantity: {
              amount: 1,
              unit: 'tsp',
            },
          },
          {
            id: 2,
            quantity: {
              amount: 0.25,
              unit: 'cup',
            },
          },
          {
            id: 3,
            quantity: {
              amount: 0.5,
              unit: 'cup',
            },
          },
          {
            id: 4,
            quantity: {
              amount: 0.3333333333333333,
              unit: 'cup',
            },
          },
          {
            id: 5,
            quantity: {
              amount: 1,
              unit: 'cup',
            },
          },
          {
            id: 6,
            quantity: {
              amount: 1,
              unit: '',
            },
          },
          {
            id: 7,
            quantity: {
              amount: 1.25,
              unit: 'cup',
            },
          },
          {
            id: 8,
            quantity: {
              amount: 0.5,
              unit: 'cup',
            },
          },
          {
            id: 9,
            quantity: {
              amount: 0.5,
              unit: 'cup',
            },
          },
          {
            id: 10,
            quantity: {
              amount: 2,
              unit: 'cups',
            },
          },
        ],
        instructions: [
          {
            instruction:
              'Preheat oven to 350F, Line a baking sheet with parchment, set aside.In bowl of stand mixer cream butter and peanut butter together until smooth.',
            number: 1,
          },
          {
            instruction: 'Add both sugars and beat for 2 minutes.',
            number: 2,
          },
          {
            instruction: 'Add in egg, vanilla, baking soda and salt.',
            number: 3,
          },
          {
            instruction:
              'Mix until combined.Turn mixer to low and add in flour.Portion out dough by in tablespoon amounts.',
            number: 4,
          },
          {
            instruction: 'Roll into a ball and then flatten to approximately  inch thick.',
            number: 5,
          },
          {
            instruction: 'Place on baking sheet about 2 inches apart.',
            number: 6,
          },
          {
            instruction: 'Bake for 8-9 minutes until golden at he edges.',
            number: 7,
          },
          {
            instruction:
              'Remove from oven and transfer cookies to a wire rack to cool completely.In microwave safe bowl combine chocolate chips, peanut butter and butter.',
            number: 8,
          },
          {
            instruction: 'Heat on high for 1 minute and then stir until smooth.',
            number: 9,
          },
          {
            instruction:
              "Place powdered sugar in bowl.Dip each cookie in chocolate and using a fork remove cookie, tapping off excess chocolate. You don't need a lot of chocolate coating on the cookies.Immediately dip the cookie into the powdered sugar and toss to coat completely.",
            number: 10,
          },
          {
            instruction:
              'Place back on cooling rack to until chocolate is set. Repeat for all cookies.',
            number: 11,
          },
        ],
        name: 'Puppy Chow Cookies',
        tags: ['side dish', 'dessert', 'cookie'],
      },
      {
        id: 104,
        image: 'https://spoonacular.com/recipeImages/231951-556x370.jpg',
        ingredients: [
          {
            id: 1,
            quantity: {
              amount: 2,
              unit: 'tablespoons',
            },
          },
          {
            id: 2,
            quantity: {
              amount: 0.5,
              unit: 'cup',
            },
          },
          {
            id: 3,
            quantity: {
              amount: 0.5,
              unit: 'cup',
            },
          },
          {
            id: 4,
            quantity: {
              amount: 4,
              unit: 'servings',
            },
          },
          {
            id: 5,
            quantity: {
              amount: 2,
              unit: 'tablespoons',
            },
          },
          {
            id: 6,
            quantity: {
              amount: 1,
              unit: 'teaspoon',
            },
          },
          {
            id: 7,
            quantity: {
              amount: 1.5,
              unit: 'cups',
            },
          },
        ],
        instructions: [
          {
            instruction:
              'Whisk together brown sugar, cornstarch, and 1/4 teaspoon salt in a heavy medium saucepan, then whisk in milk and cream. Bring to a boil over medium heat, whisking frequently, then boil, whisking, 1 minute.',
            number: 1,
          },
          {
            instruction: 'Remove from heat and whisk in butter and vanilla.',
            number: 2,
          },
          {
            instruction:
              'Pour into a bowl, then cover surface with buttered wax paper and chill until cold, at least 1 1/2 hours.',
            number: 3,
          },
        ],
        name: 'Butterscotch Pudding',
        tags: ['side dish', 'dessert', 'pudding', 'snack'],
      },
    ])
    expect(filterByTag(tag3, sampleRecipeData)).to.deep.equal('Sorry, there are no recipes with this tag!')
  })
})

describe('filterByName', () => {
  it('should filter recipe list by name', () => {
    const name1 = 'macarons'
    const name2 = 'PUPPY'
    const name3 = 'macaroni & cheese'
    console.log(filterByName(name1, sampleRecipeData))
    expect(filterByName(name1, sampleRecipeData)).to.deep.equal([{
      id: 101,
      image: 'https://sallysbakingaddiction.com/wp-content/uploads/2021/02/french-macarons.jpg',
      ingredients: [
        {
          id: 1,
          quantity: {
            amount: 6,
            unit: 'large',
          },
        },
        {
          id: 7,
          quantity: {
            amount: 2,
            unit: 'cups',
          },
        },
        {
          id: 8,
          quantity: {
            amount: 2,
            unit: 'cups',
          },
        },
        {
          id: 9,
          quantity: {
            amount: 2,
            unit: 'cups',
          },
        },
        {
          id: 10,
          quantity: {
            amount: 0.5,
            unit: 'teaspoons',
          },
        },
      ],
      instructions: [
        {
          instruction: 'Separate yolks from egg-whites, you will only use the egg-whites.',
          number: 1,
        },
        {
          instruction: 'Mix Egg Whites with granulated sugar until meringue has stiff peaks, add vanilla',
          number: 2,
        },
        {
          instruction: 'Finish the Macarons',
          number: 3,
        },
      ],
      name: 'Macarons',
      tags: ['dessert', 'cookie', 'snack']
    }])
    expect(filterByName(name2, sampleRecipeData)).to.deep.equal([{
      id: 103,
      image: 'https://spoonacular.com/recipeImages/623855-556x370.jpg',
      ingredients: [
        {
          id: 1,
          quantity: {
            amount: 1,
            unit: 'tsp',
          },
        },
        {
          id: 2,
          quantity: {
            amount: 0.25,
            unit: 'cup',
          },
        },
        {
          id: 3,
          quantity: {
            amount: 0.5,
            unit: 'cup',
          },
        },
        {
          id: 4,
          quantity: {
            amount: 0.3333333333333333,
            unit: 'cup',
          },
        },
        {
          id: 5,
          quantity: {
            amount: 1,
            unit: 'cup',
          },
        },
        {
          id: 6,
          quantity: {
            amount: 1,
            unit: '',
          },
        },
        {
          id: 7,
          quantity: {
            amount: 1.25,
            unit: 'cup',
          },
        },
        {
          id: 8,
          quantity: {
            amount: 0.5,
            unit: 'cup',
          },
        },
        {
          id: 9,
          quantity: {
            amount: 0.5,
            unit: 'cup',
          },
        },
        {
          id: 10,
          quantity: {
            amount: 2,
            unit: 'cups',
          },
        },
      ],
      instructions: [
        {
          instruction:
            'Preheat oven to 350F, Line a baking sheet with parchment, set aside.In bowl of stand mixer cream butter and peanut butter together until smooth.',
          number: 1,
        },
        {
          instruction: 'Add both sugars and beat for 2 minutes.',
          number: 2,
        },
        {
          instruction: 'Add in egg, vanilla, baking soda and salt.',
          number: 3,
        },
        {
          instruction:
            'Mix until combined.Turn mixer to low and add in flour.Portion out dough by in tablespoon amounts.',
          number: 4,
        },
        {
          instruction: 'Roll into a ball and then flatten to approximately  inch thick.',
          number: 5,
        },
        {
          instruction: 'Place on baking sheet about 2 inches apart.',
          number: 6,
        },
        {
          instruction: 'Bake for 8-9 minutes until golden at he edges.',
          number: 7,
        },
        {
          instruction:
            'Remove from oven and transfer cookies to a wire rack to cool completely.In microwave safe bowl combine chocolate chips, peanut butter and butter.',
          number: 8,
        },
        {
          instruction: 'Heat on high for 1 minute and then stir until smooth.',
          number: 9,
        },
        {
          instruction:
            "Place powdered sugar in bowl.Dip each cookie in chocolate and using a fork remove cookie, tapping off excess chocolate. You don't need a lot of chocolate coating on the cookies.Immediately dip the cookie into the powdered sugar and toss to coat completely.",
          number: 10,
        },
        {
          instruction:
            'Place back on cooling rack to until chocolate is set. Repeat for all cookies.',
          number: 11,
        },
      ],
      name: 'Puppy Chow Cookies',
      tags: ['side dish', 'dessert', 'cookie'],
    }])
    expect(filterByName(name3, sampleRecipeData)).to.deep.equal('Sorry, there are no recipes with this name!')
  })
})
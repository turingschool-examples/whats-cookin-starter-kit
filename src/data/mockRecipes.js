const recipeData = [
  {
    id: 1,
    image: 'url',
    ingredients: [
      {
        id: 101,
        quantity: {
          amount: 2,
          unit: 'c'
        }
      },
      {
        id: 102,
        quantity: {
          amount: 1.5,
          unit: 'tbsp'
        }
      },
      {
        id: 104,
        quantity: {
          amount: 2,
          unit: 'slice'
        }
      }
    ],
    instructions: [
      {
        instruction: 'This is instruction number 1',
        number: 1
      },
      {
        instruction: 'This is instruction number 2',
        number: 2
      },
      {
        instruction: 'This is instruction number 3',
        number: 3
      }
    ],
    name: 'Peanut Butter and Jelly',
    tags: ['lunch', 'snack']
  },
  {
    id: 2,
    image: 'url',
    ingredients: [
      {
        id: 103,
        quantity: {
          amount: 1,
          unit: 'one egg'
        }
      },
      {
        id: 105,
        quantity: {
          amount: 1,
          unit: 'cup'
        }
      },
      {
        id: 106,
        quantity: {
          amount: 2,
          unit: 'cup'
        }
      },
      {
        id: 110,
        quantity: {
          amount: 2,
          unit: 'tbsp'
        }
      },
      {
        id: 111,
        quantity: {
          amount: 1,
          unit: '1/8 cup'
        }
      }
    ],
    instructions: [
      {
        instruction: 'This is instruction number 1',
        number: 1
      },
      {
        instruction: 'This is instruction number 2',
        number: 2
      },
      {
        instruction: 'This is instruction number 3',
        number: 3
      }
    ],
    name: 'Waffles',
    tags: ['breakfast', 'desert', 'snack']
  },
  {
    id: 3,
    image: 'url',
    ingredients: [
      {
        id: 103,
        quantity: {
          amount: 1,
          unit: 'one egg'
        }
      },
      {
        id: 110,
        quantity: {
          amount: 1,
          unit: 'tbsp'
        }
      },
      {
        id: 118,
        quantity: {
          amount: 2,
          unit: 'slice'
        }
      }
    ],
    instructions: [
      {
        instruction: 'This is instruction number 1',
        number: 1
      },
      {
        instruction: 'This is instruction number 2',
        number: 2
      },
      {
        instruction: 'This is instruction number 3',
        number: 3
      }
    ],
    name: 'Bacon and Eggs',
    tags: ['breakfast']
  },
  {
    id: 4,
    image: 'url',
    ingredients: [
      {
        id: 104,
        quantity: {
          amount: 2,
          unit: 'slice'
        }
      },
      {
        id: 107,
        quantity: {
          amount: 3,
          unit: 'slice'
        }
      },
      {
        id: 108,
        quantity: {
          amount: 1,
          unit: 'slice'
        }
      },
      {
        id: 115,
        quantity: {
          amount: 1,
          unit: 'tbsp'
        }
      }
    ],
    instructions: [
      {
        instruction: 'This is instruction number 1',
        number: 1
      },
      {
        instruction: 'This is instruction number 2',
        number: 2
      },
      {
        instruction: 'This is instruction number 3',
        number: 3
      }
    ],
    name: 'Turkey and Swiss Sandwich',
    tags: ['lunch']
  },
  {
    id: 5,
    image: 'url',
    ingredients: [
      {
        id: 109,
        quantity: {
          amount: 1,
          unit: 'cup'
        }
      },
      {
        id: 112,
        quantity: {
          amount: 2,
          unit: 'cup'
        }
      },
      {
        id: 113,
        quantity: {
          amount: 1,
          unit: 'block'
        }
      },
      {
        id: 114,
        quantity: {
          amount: 2,
          unit: 'tbsp'
        }
      },
      {
        id: 116,
        quantity: {
          amount: 3,
          unit: 'clove'
        }
      },
      {
        id: 117,
        quantity: {
          amount: 2,
          unit: 'tbsp'
        }
      }
    ],
    instructions: [
      {
        instruction: 'This is instruction number 1',
        number: 1
      },
      {
        instruction: 'This is instruction number 2',
        number: 2
      },
      {
        instruction: 'This is instruction number 3',
        number: 3
      }
    ],
    name: 'Veggie Stir Fry',
    tags: ['lunch', 'dinner']
  }
];

export default recipeData;

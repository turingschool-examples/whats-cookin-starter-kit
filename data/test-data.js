let usersTestData = [
	{
		"name": "Nicole",
		"id": 1,
		"pantry": [
			{
				"ingredient": 11,
				"amount": 4
			},
			{
				"ingredient": 00,
				"amount": 4
			},
			{
				"ingredient": 1123,
				"amount": 10
			},
			{
				"ingredient": 44,
				"amount": 2
			},
			{
				"ingredient": 55,
				"amount": 2
			}
		]
	},
	{
		"name": "Erin",
		"id": 2,
		"pantry": [
			{
				"ingredient": 99,
				"amount": 3
			},
			{
				"ingredient": 22,
				"amount": 4
			},
			{
				"ingredient": 77,
				"amount": 10
			},
			{
				"ingredient": 66,
				"amount": 2
			},
			{
				"ingredient": 88,
				"amount": 2
			}
		]
	}
];


const recipeTestData = [
	{
		"id": 1111,
		"image": "image",
		"ingredients": [
			{
				"id": 11,
				"quantity": {
					"amount": 1.5,
					"unit": "c"
				}
			},
			{
				"id": 22,
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
				"id": 55,
				"quantity": {
					"amount": 1,
					"unit": "large"
				}
			},
			{
				"id": 66,
				"quantity": {
					"amount": 0.5,
					"unit": "c"
				}
			}
		],
		"instructions": [
			{
				"instruction": "Do the thing",
				"number": 1
			},
			{
				"instruction": "Then another thing",
				"number": 2
			},
			{
				"instruction": "Lastly, the thing",
				"number": 3
			},
		],
		"name": "Loaded Chocolate Chip Pudding Cookie Cups",
		"tags": [
			"lunch",
			"sauce",
			"main dish"
		]
	},
	{
		"id": 2222,
		"image": "image",
		"ingredients": [
			{
				"id": 66,
				"quantity": {
					"amount": 1.5,
					"unit": "cups"
				}
			},
			{
				"id": 77,
				"quantity": {
					"amount": 1,
					"unit": "tablespoon"
				}
			},
			{
				"id": 88,
				"quantity": {
					"amount": 0.25,
					"unit": "cup"
				}
			},
			{
				"id": 99,
				"quantity": {
					"amount": 1,
					"unit": "tablespoon"
				}
			}
		],
		"instructions": [
			{
				"instruction": "COOK STUFF",
				"number": 1
			},
			{
				"instruction": "cook some more stuff",
				"number": 2
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
		"id": 3333,
		"image": "image",
		"ingredients": [
			{
				"id": 00,
				"quantity": {
					"amount": 5,
					"unit": "teaspoons"
				}
			},
			{
				"id": 66,
				"quantity": {
					"amount": 8,
					"unit": "tablespoons"
				}
			}
		],
		"instructions": [
			{
				"instruction": "Do the thing",
				"number": 1
			}
		],
		"name": "Dirty Steve's Original Wing Sauce",
		"tags": [
			"sauce"
		]
	}
]

let ingredientsTestData = [
	{
		"id": 11,
		"name": "wheat flour",
		"estimatedCostInCents": 142
	},
	{
		"id": 22,
		"name": "bicarbonate of soda",
		"estimatedCostInCents": 582
	},
	{
		"id": 1123,
		"name": "eggs",
		"estimatedCostInCents": 472
	},
	{
		"id": 44,
		"name": "sucrose",
		"estimatedCostInCents": 902
	},
	{
		"id": 55,
		"name": "instant vanilla pudding",
		"estimatedCostInCents": 660
	},
	{
		"id": 66,
		"name": "brown sugar",
		"estimatedCostInCents": 559
	},
	{
		"id": 77,
		"name": "salt",
		"estimatedCostInCents": 280
	},
	{
		"id": 88,
		"name": "fine sea salt",
		"estimatedCostInCents": 528
	},
	{
		"id": 99,
		"name": "semi sweet chips",
		"estimatedCostInCents": 253
	},
	{
		"id": 00,
		"name": "unsalted butter",
		"estimatedCostInCents": 617
	},
	{
		"estimatedCostInCents": 926
	}
];

module.exports = {
	usersTestData,
	recipeTestData,
	ingredientsTestData
}
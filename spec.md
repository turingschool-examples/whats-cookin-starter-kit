# What's Cookin'?

## Goals and Objectives

- Follow the specification below to make a working application
- Implement ES6 classes that communicate to each other as needed
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD
- Use object and array prototype methods to perform data manipulation
- Display information on the page while maintaining ability to test class properties and mehtods
- Create a user interface that is easy to use and displays information in a clear way

In this project, you will be creating a recipe tracking / meal planning application that allows users to view their favorite recipes and plan shopping trips around them. The idea is similar to sites like <a href="https://www.allrecipes.com/" target="\__blank">All Recipes</a> or <a href="https://cooking.nytimes.com/" target="\__blank"> New York Times Cooking</a>. Users should be able to view a list of recipes, favorite their own recipes, and choose recipes to cook, and make a shopping list based off of these chosen recipes.

Feel free to use the above sites as inspiration for your UI, but note that there is NO COMP provided for this project. Flex those design muscles!

## Requirements

### Initial Setup

For this project, you will use a <a href="#" target="\__blank">starter-kit</a> repo. Follow the unstructions in the README for forking the repo and getting it set up. Once you have it set up, follow the instructions to ensure everything is working correctly.

### Testing

Aside from the necessary tooling (`mocha` and `chai`), you will need to set up all testing for this project yourselves. If you ran `npm install` as per the set up instructions, you should have your testing framework and assertion library installed.

You are __expected__ to test:
- __All instance methods__
- __All class methods__ (including any helper methods)

You are __not expected__ to test:
- DOM manipulation / DOM manipulating methods

### Data

The shape and structure of the data is outlined in the starter-kit repo. The data and values are all randomly generated -- don't read too much into why a certain user has certain data associated with them. A general overview of the data is:

```
users.js - a file with many users
recipes.js - a file with many recipes
ingredients.js - a file with many ingredients and their associated prices

Users will be associated with recipes, which will in turn be associated with ingredients, via IDs
```

## User Stories

### Users 
A `User` holds on to all of a user's data. As a user, I should be able to:
  - Favorite recipes (add to / remove from the user's `favoriteRecipes`)
  - Decide to cook a recipe that week (add to my recipesToCook)
  - Remove a recipes from my `recipesToCook`
  - Filter my `favoriteRecipes` or `recipesToCook` by type
  - Search any of my saved recipes by name or ingredient

### Recipes

Users should be able to view a list of recipes. Specifically:
- As a user, I should be able to filter recipes by type / tag
- As a user, I should be able to search recipes by ingredients

A recipe should hold on to all its information (provided in the data file). It should be able to:
- Get the cost of its ingredients
- Get its directions / instructions


### Pantries
Every User should have a pantry. A `Pantry` holds on to all the ingredients its owner has stocked, and the amount of each ingredient they have.
As a user, I should be able to:
- Determine whether my pantry has enough ingredients to cook a given meal
- Determine the amount of ingredients still needed to cook a given meal, based on what's in my pantry
- Remove the ingredients used for a given meal from my pantry, once that meal has been cooked


### Iteration 1

At the most basic level, the app should allow users to view recipes. This iteration should be focused on this behavior.

<section class="note">
The details outlined above are basic user stories. You may find it useful to create classes that relate to ehe stories, but are not speicifically outlined above. 
</section>

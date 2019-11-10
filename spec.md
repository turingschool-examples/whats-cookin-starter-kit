# What's Cookin'?

## Goals and Objectives 

- Follow the specification below to make a working application
- Implement ES6 classes that communicate to eachother as needed
- Write modular, resuable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD
- Use object and array prototype methods to perform data manipulation
- Display information on the page while maintaining ability to test class properties and mehtods 
- Create a user interface that is easy to use and displays information in a clear way

In this project, you will be creating a recipe tracking / meal planning application that allows users to view their favorite recipies and plan shopping trips around them. The idea is similar to sites like <a href="https://www.allrecipes.com/" target="\__blank">All Recipes</a> or <a href="https://cooking.nytimes.com/" target="\__blank"> New York Times Cooking</a>. Users should be able to view a list of recipies, favorite their own recipies, and choose recipies to cook, and make a shopping list based off of these chosen recipies. 

Feel free to use the above sites as inspiration for your UI, but note that there is NO COMP provided for this project. Flex those design muscles!

## Requirements

### Initial Setup

For this project, you will use a <a href="#" target="\__blank">starter-kit</a> repo. Follow the unstructions in the README for forking the repo and getting it set up. Once you have it set up, follow the instructions to ensure everything is working correctly.

### Testing Setup

Aside from the necessary tooling (`mocha` and `chai`), you will need to set up all testing for this project yourselves. If you ran `npm install` as per the set up instructions, you should have your testing framework and assertion library installed. 

### Data 

The shape and structure of the data is outlined in the starter-kit repo. The data and values are all randomly generated -- don't read too much into why a certain user has certain data associated with them. A general overview of the data is:

```
users.js - a file with many users 
recipies.js - a file with many recipies 
ingredients.js - a file with many ingredients and their associated prices 

Users will be associated with recipies, which will in turn be associated with ingredients, via IDs
```

## User Stories

### Epic - Users
- As a user, I should be able to view multiple recipies 
- As a user, I should be able to add recipies to a list of favorites
- As a user, I should be able to add recipies to a weekly meal list
- As a user, I should be able to add ingredients that I own to my "pantry"
- As a user, I should be able to generate a grocery list based off of the meal list
  - This grocery list should be able to exclude ingredients already held in my pantry


## Project Iterations

### Iteration 1 

At the most basic level, the app should allow users to view recipies. This iteration should be focused on this behavior.

#### Classes

Start out with the following class structure:

_User_ class

- A `User` holds on to all of a user's data
- It should have parameters to take in user data and a user's ID
- It should have methods to:
  - Determine a user's data given their ID

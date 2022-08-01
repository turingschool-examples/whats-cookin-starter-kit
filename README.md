# What's Cookin!
A web app for discovering and organizing all your favorite recipes in one place.

### Introduction

What's Cookin is our group project in Mod2 of Turing School of Software and Design (it is a group project). Students were instructed to work in small groups with two 10 day windows to accomplish the goal. The goal was to create a web app that uses multiple data sets including users, recipes, ingredients and pantry. Upon load, a user is able to view a repository of recipes, favoriting and unfavoriting them as they like, as well as adding them to a list of recipes they intend to cook in the future.<br>

### How to Run Locally
*Be sure you are not currently running a local server*
1. run `git@github.com:AnaBennett11/whats-cookin-group-project.git` in the terminal
2. run `npm install` in the terminal
3. run `npm start` in the terminal
4. go to `http://localhost:8080/` in the web browser

### Directions and Features

On load, the user will see a home screen which includes all the recipes available represented by individual recipe cards. The site can be navigated by the nav bar on the top of the page.

**Search**<br>By typing a recipe name or tag in their respective search box, a user will see their results after clicking the search button. Searches can include recipe names, recipe ingredients, or recipe tags.

**View Recipe Info**<br>When a user clicks on a recipe, a new page appears revealing the full recipe info including ingredients with amounts, instructions and total costs.

**Favorite Recipes**<br>When a user selects the "Favorites" button on a recipe card, the selected recipe will be added to the Favorite Recipes page. The user can navigate to the Favorite Recipes page by clicking on the "Favorite Recipes" button in the nav bar. The user can also search for and filter through their favorite recipes by name and tag while on the Favorite Recipe page.

**Back To Home**<br>When a user navigates away from the home page, they can easily get back to the home page by clicking the "Go Back Home" button in the nav bar

**My Pantry**<br>When a user clicks the "My Pantry" button, a new page appears revealing a list of the user's available ingredients and the amount of each ingredient. 

**Cook Recipe**<br>When a user clicks the "Cook Recipe" button, a message indicating whether or not a user has all the needed ingredients to cook that selected recipe will appear. If the user does not have enough ingredients, there will be an additional message indicating what ingredients the user needs and how much is needed by each ingredient.


### Gif

![What's Cookin App Gif](./src/images/whats-cookin.gif)

### Technologies Used

HTML, CSS, Vanilla JavaScript, WebPack, Mocha, Chai, Fetch API, NPM, Lighthouse(accessibility), Wave (accessibility)

### Contributors

* [Ana Bennett](https://github.com/AnaBennett11)

* [Anna Spitz](https://github.com/aspitz1)

* [Jeffrey Cook](https://github.com/JCookDev)


### Given more time these are the things we would have done:
* We want to spend more time DRYing up the code. 
* We want to be able to add and remove individual ingredients as opposed to chunks of ingredients. 
* We want to incorporate a DELETE request. 
* We want to allow users that ability to search using multiple tags. Right now we only allow one. 
* We want the user to be able to see the total price of the amount of ingredients that they have in their pantry. 
* We want the user to be able to rate their own recipes and post their own recipes.
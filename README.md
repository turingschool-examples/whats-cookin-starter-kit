# What's Cookin?

### Abstract
'What's Cookin?' is an app that lets a user view a bunch of recipes, search for some or filter them by different tag options, and save any recipes they would like to. Users can view a single-page screen that has a couple of navigation buttons, a search bar with non-matching search handling, a main side-scrollable view of recipe cards; which on the front show an image and brief info on them, and can be flipped to show the exact ingredients and directions on how to prepare them. Users will have access to a heart button on each recipe that will let them save (or remove from their saved) any number of recipes they'd like. At the bottom, a user will see quite a few different tags to filter recipes by, which both work on the home screen and on their saved recipes.

![Screen Recording 2023-02-13 at 6 23 00 PM](https://user-images.githubusercontent.com/114776048/218614112-622dae10-77db-442b-9fc6-2a8d2bb23b04.gif)

### Setup
1. Clone down the repo. `git clone [remote-address] [what you want to name the repo]`
1. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` to install project dependencies.
1. Run `npm start` in the terminal to see the HTML page. `Control + C` is the command to stop running the local server.  Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems, so remember to stop the server when you're done with it.
1. Do not run `npm audit fix --force`.  This will update to the latest version of packages.  We need to be using `webpack-dev-server@3.11.2` which is not the latest version.

### Learning Goals
- Implement ES6 classes that communicate to each other as needed
- Use object and array prototype methods to perform data manipulation
- Create a user interface that is easy to use and clearly displays information.
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD
- Make network requests to retrieve data

### Contributors
- Chrissy Cooper [GitHub](https://github.com/chrissycooper)
- Timothy Pendarvis [GitHub](https://github.com/Trpendarvis)
- Kelli Watkins [GitHub](https://github.com/klwats)
- Daniel Curtin [GitHub](https://github.com/danielcurtin)

### Challenges:
- All members of the group were new to API, fetching, and handling promises. The group was able to over come the challenge of learning about APIs and complexities while still being able to write classes, methods, and functions.
- Members were able to collaborate together to overcome challenges and setbacks within the code. 
- CSS and styling was able to be adjusted to fit the needs of UI/UX while giving way to functionally.
- The group was able to make sure that the accessibly of the site was a top priority.

### Issues: 
Current issues to be addressed are:
- Horizontal Scroll on cards is buggy and inconsistent

### Type of change/ Goals:
- [X] Project Part 1: Completed
- [ ] Project Part 2: Not Started
- [ ] Refactoring of code. 
- [ ] Needs to track down any future bugs and fix them after refactoring.
- [ ] CSS polishing and rework.
- [ ] Add in Charts.js for further improve UX/UI

### How Has This Been Tested?
Using Mocha/Chai testing run "npm test" all test for tested classes has been completed and are passing.
All test are complete and passing:

- [X] Test A: Ingredient-test.js
- [X] Test B: Recipe-test.js
- [X] Test C: RecipeRepository-test.js
- [X] Test D: User-test.js

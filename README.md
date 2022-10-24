# What's Cookin' Group Project
## Abstract:
This application is the first of a 2-part project. This part is a recipe tracking and meal planning application that allows users to browse, search, and filter recipes and save selected recipes to their profile. Recipe, ingredient, and user data are fetched from an API. 

<!-- ADD GIF (GIFS) OF APPLICATION IN USE -->

## Installation Instructions:
1. Go to [this repo](https://github.com/justenanderson-commits/whats-cookin) on Github
2. Click Fork > Create New Fork
3. Click Code
4. Copy the SSH url provided by GitHub
5. In the terminal, navigate to the new project repository
6. Type git clone and paste the URL
7. Run `cd whats-cookin`
8. Run `npm install`. Note: Do not run `npm audit fix --force`. This will update to the latest version of packages, which are not wanted. 
9. Run `npm start` to start the program. (`Ctrl + C` will stop it.)
10. In a browser window, navigate to `http://localhost:8080/`.
11. The app should now ready to browse and search for recipes.  

## Context:
The team followed a kanban-like workflow using a Trello board and held daily standups. Meetings started by checking in with group mates as humans. Then accomplishments from the day prior were discussed, what needed to be done that day and by whom, and then collaborative debugging help was provided (as needed). Some tasks were completed indivdually, others in pairs, and others as a whole group. The collective estimate is about 100 hours of work time invested over 9 days to create this application's functionality and test suite from scratch using Javascript, html, and css. The Mocha framework and Chai library were used for testing.

## Contributors:
- [Angie Staffieri](https://github.com/arstaffieri) 
- [Ryan Nagel](https://github.com/Nagel29)
- [Thomas Peterson](https://github.com/thomedpete)
- [Justen Anderson](https://github.com/justenanderson-commits)

## Learning Goals:
- Implement ES6 classes that communicate to each other as needed
- Use object and array prototype methods to perform data manipulation
- Create a user interface that is easy to use and clearly displays information.
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD
- Make network requests to retrieve data

## Tech Used:
- GitHub
- Terminal
- VS Code
- Chrome Browser/Dev tools
- Zoom
- JavaScript
- Slack
- Mocha
- Chai
- Webpack
- CodePen
- Google Font API
- GlideJS

## Wins and Challenges
- The group's willingness to support each member's learning was stellar. Any time there was confusion among one or more group members, the collective group would stop to help everyone understand. Pull request reviews became teachable moments to walk through the code, find opportunities for improvement, and plan next steps.

- The GitHub workflow was very successful. The group collectively made enormous strides in fluency with the GitHub workflow and communication tools. One example was when 2 group members worked on different parts of the same file at the same time. Then their branches were merged after resolving the conflicts. The merge branch was then able to be merged into main. 

- Win 3

- Challenge 1

- Challenge 2

### Additional Notes:
- The group opted to embed test data rather than importing it from a module because none of us had experience working with the text editor's ability to collapse code blocks amd wanted to practice using them. 

- GitHub Projects will be used (instead of Trello) to manage the workflow during part 2 of this project.



# What's Cookin'? Starter Kit

The details of this project are outlined in the <a href="https://frontend.turing.edu/projects/What%27sCookin-PartOne.html" target="\__blank">project spec</a>.

## Set Up

1. Within your group, decide on one person to have the project repository on their Github account. This person will *fork* this repository - on the top right corner of the page, click the fork button.
2. All group members should then clone down the forked repository (make sure that everyone is added as a collaborator as well). Since you don't want your project to be named "whats-cookin-starter-kit", add an optional argument after the repo url when cloning. The command should look like this: `git clone [remote-address] [what you want to name the repo]`.
3. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` or `npm i` to install project dependencies.
4. Run npm start in the terminal to see the HTML page (you should see some boilerplate HTML displayed on the page). `Control + C` is the command to stop running the local server. Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems. This command is not specific to Webpack; make note of it for future use.
5. Make sure both members of your team are collaborators on the forked repo.
6. Do not run `npm audit fix --force`. This will update to the latest version of packages. We need to be using `webpack-dev-server@3.11.2` which is not the latest version. If you start to run into Webpack errors, first check that all group members are using the correct version.

## Testing

Mocha and chai are already set up, with a boilerplate test for you.

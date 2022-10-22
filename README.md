# What's Cookin' Group Project
Be sure to include:
Abstract:
Installation Instructions:
Preview of App:
Context:
Contributors:
Learning Goals:
Wins + Challenges:
Working with collapsed code blocks to better navigate longer code bases.


## Abstract:
This is a flashcards game that will be run in the command line interface (CLI). It cycles through 30 multiple-choice questions that the user can answer, then a final score of correct answers is offered at the end. 

![Flashcards animated gif](https://user-images.githubusercontent.com/104015966/195744304-69703fa2-0e67-4b21-9698-67c57ab8c440.gif)

## Installation Instructions:
1. Go to [this repo](https://github.com/justenanderson-commits/cli-flashcards) on Github
2. Click Fork > Create New Fork
3. Click Code
4. Copy the SSH url provided by GitHub
5. In the terminal, navigate to the new project repository
6. Type git clone and paste the URL
7. `cd` into the it
8. Run `npm install`
9. Run `node index.js`
10. Play the game by typing the number of your guess and pressing `enter`. A score will print to the CLI when all 30 questions have been answered.

## Context:
Working independently in the 1st weeks of Mod2 classes at Turing, I invested at least 25 - 30 hours to create this application's functionality from scratch using  Javascript. The Mocha framework and chai Library were used for testing.

## Contributor:
- [Justen Anderson](https://github.com/justenanderson-commits)

## Learning Goals:
- Contribute code to an partially constructed object-oriented application
- Follow spec/prompts to make a working application
- Implement ES6 classes
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD

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

### Additional Notes:
- Trying to interpret the project spec was very difficult. Trying to figure out how to write a test for a function that wasn't yet written and whose description was hard to interpret was extremely challenging. I attempted to maintain fidelity of the testing first, writing the implementation code second throughout the entire project, but definitely hit a wall at the game.start() method.








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

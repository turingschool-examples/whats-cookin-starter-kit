# What's Cookin'? Starter Kit

The details of this project are outlined in the <a href="https://frontend.turing.io/projects/whats-cookin.html" target="\__blank">project spec</a>.

## Set Up

1. Within your group, decide on one person to have the project repository on their Github account. This person will *fork* this repository - on the top right corner of the page, click the fork button.
2. Both group members should then clone down the forked repository (make sure that everyone is added as a collaborator as well). Since you don't want your project to be named "whats-cookin-starter-kit", add an optional argument after the repo url when cloning. The command should look like this: `git clone [remote-address] [what you want to name the repo]`.
3. Once you have cloned the repo, change into the directory and install the project dependencies. Run npm install to install project dependencies.
4. Run open src/index.html in the terminal to see the HTML page (you should see some boilerplate HTML displayed on the page)
5. Make sure both members of your team are collaborators on the forked repo.

## Testing

There is no boilerplate for testing in this starter-kit repo. You will need to set this up yourself. However, if you ran npm install, then the tooling you need to start testing is already installed (mocha and chai).

## Linting Your Code

Run the command in your terminal npm run lint to run the linter on your JavaScript code. There will be errors and warnings right from the start in this starter kit, but that's ok - the linter is still running successfully.

Your linter will look only at the JavaScript files you have within the src and the test directories.


## Data Model
### Users
```js
{
  "id": [number],
  "name": [string],
  "pantry": [array of objects with amount and ingredient id properties]
},
```

### Recipes
```js
{
  "ingredients" [array of objects with ingredients ids(connection to ingredients), ingredient names, and quantity data],
  "instructions": [array of objects with instructions properties and numbered steps],
  "name": [string],
  "tags": [array of strings representing info about the recipes]
}
```

### Ingredients
```js
{
  "estimatedCostInCents": [number],
  "id": [number -- connection to users and recipes],
  "name": [string]
}
```

<!-- add dev-dependencies -->
<!-- npm i -g npm-check-updates
ncu -u
npm install -->

<!-- {
  "name": "webpack-starter-kit",
  "version": "1.0.0",
  "description": "Project starter kit using webpack, mocha, chai, and SCSS/SASS enabled",
  "main": "src/index.js",
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack",
    "test": "mochapack 'test/**/*.js'",
    "lint": "./node_modules/.bin/eslint 'src/**.js' 'test/**.js'"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/turingschool-examples/webpack-starter-kit.git"
  },
  "author": "Turing School of Software and Design",
  "license": "MIT",
  "devDependencies": {
    "chai": "^4.2.0",
    "chai-spies": "^1.0.0",
    "css-loader": "^2.1.0",
    "eslint": "^5.12.1",
    "file-loader": "^3.0.1",
    "html-webpack-plugin": "^3.2.0",
    "mocha": "^5.2.0",
    "mochapack": "^1.0.0",
    "node-sass": "^4.12.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.31.0",
    "webpack-cli": "^3.2.1",
    "webpack-dev-server": "^3.1.14"
  },
  "dependencies": {
    "jquery": "^3.4.1"
  }
} -->

<!-- http://www.fillmurray.com/g/700/500 --> 

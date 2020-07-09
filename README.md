This is for Testing

# Project Name (Think: Website/Game Name)

An image of the product logo.  
![logo](images/image.png)

# Brief Description (Ex: Uses, Game Rules, Overview)

> Here I put the what is this and the why.

# How to use (can call strategy or uses can sometimes be conbined with above)

Here I put the answers to How

## Built With

- ex: javascript
- ex: CSS
- ex: HTML

## SetUp

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

1. Fork this project to your own Github account
2. clone the repository to your local machine
3. cd into the project
4. run npm install to install the necessary dependencies

### How to see the product

Here should be the info on running index.html or other last step opeining locally
[Here should also be the link to the GitHub pages if necessary](https://google.com)

### Live version location if NEEDED

[Live Link](https://google.com)

## Authors

👤 **Name**

- Github: [gitHubHandle](link)
- other link info if needed

👤 **Name**

- Github: [gitHubHandle](link)
- other link info if needed

## ScreenShots of Functionality

![screenshot](images/image.png)

## Resources

[Original Project Link](link)

## Acknowledgements

Mentor mentions and why or other help outside the group

# What's Cookin'? Starter Kit

The details of this project are outlined in the <a href="https://frontend.turing.io/projects/whats-cookin.html" target="\__blank">project spec</a>.

## Set Up

1. Within your group, decide on one person to have the project repository on their Github account. This person will _fork_ this repository - on the top right corner of the page, click the fork button.
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

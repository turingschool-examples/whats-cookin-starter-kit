# What's Cooking?
​
## Part One
​
### Table of contents
* [Setting Up](#setup)
* [How To Use](#how)
* [Under The Hood](#under) 
* [Challenges](#challenges)
* [Reflections](#reflections)
* [Future Iterations](#future)
* [Technologies Used](#tech)
* [Contributors](#contributors)
​
### Setting Up: 
​
* On the top right corner of this page, click the **Fork** button to fork this repo.
* Clone down the forked repo by clicking the green **Code** button, and then copying the link under **SSH**.
* In your terminal, type in `git clone` and then paste the copied link.
* Once you have cloned the repo, change into the directory and install the project dependencies, by running `npm install`.
* Run `npm start` in the terminal, and copy the URL link (`http://localhost:8080/`) to see the HTML page 
* To stop running the server, use Control + C in the terminal. (Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems.)
* And now you're ready to get cookin'!
​
### How To Use: <a name="how"></a>
​
* On page load, you will see a list of recipes available to cook.  Browse through given recipes!  If you find one you like, you can click on the 'let's make it' button to get instructions and ingredients required.  If you love the recipe, you can add it to your cooking profile.  The user can view their cooking profile with a filtered list of favorited recipes.
* User can use the search bar to filter by name or the tag of the desired meal (i.e. lunch, antipasto, etc.).
​
* Good to include clips of the page working 
​
    * To format the video so GitHub can read it, I drap and drop my clips into a comment section in GitHub and it'll convert it and give you a link to past in.
​
<br>
​
### Under the Hood: <a name="under"></a>
​
<details>
<summary>Recipe Class</summary>
​
* Takes in an ID number, an image recipe, the ingredients list, a list of instructions, name, associated tags, and references against a master list of ingredients.
​
* `getIngredientsWithNames()` is a function that looks against a master list of ingredients, compares the recipe items to that master list, and then updates the recipe object to include names that were excluded in our data pull from the fetch request.
​
* `getCostOfIngredients()` is a function that takes each individual ingredient, and sums the total cost for reference by the user.
​
</details>
​
<details>
<summary>Recipe Repository Class</summary>
​
* This class takes in all of the recipes from the fetch request.
​
* `filterRecipeByTag()` and `filterRecipesName()` takes in a user's input, iterates through the repository, and filters a list of matching conditions.
​
</details>
​
<details>
<summary>Extension: Modal</summary>
​
* The modal was a cool extension that brought an interactive box over the main web page.  This posed challenges from install to project completion.
​
* The modal has the recipe's cost, ingredients, and instructions in it.  Iterator methods were used to run through the recipe's nested data to provide a readable view to the user.
​
</details>
​
<details>
<summary>DOM Manipulation Details</summary>
​
* `searchDisplayedRecipe()` is a function that looks for matching cases > 0 to eventually return recipes with matching identifiers.
​
* `displayAllRecipesOnPage()` does exactly what is named!  It iterates through every recipe in the recipe repository, and then adds a recipe "card" to the page.
​
* `saveRecipeToRecipesToCook` looks at the event target id of the button clicked.  In `displayAllRecipesOnPage()`, we assigned the html ID of each recipe card to be the recipe ID.  When iterating through all recipes on page, if the target ID matched, it would push the recipe to the User's `recipesToCook` array. This array is then iterated through downstream when the user interacts with their cooking profile.
​
</details><br>
​
### Challenges: <a name="challenges"></a>

* Andrew: One of the functions in our recipe class sought to pull the ingredient name from an upstream class.  The data in our fetch requests matched ingredients by their ID number, but the name was not included in recipes.  Figuring out how to iterate through the data, and then reassign the values of the downstream data to include the name in it.

* Maia: Class to class methods and interaction (I.e. invoking one function from user class into the scripts file for functionality) to add, delete, display recipes to the profile

* Jordan: ​Implement new practices ( API fetches, using the Promise.all( ) ), and also reflecting on functionality used in the past ( deleting items from a profile, filtering results, and creating pop-ups to display information ) to bring this project to completion. We all put our heads together to come up with solutions to the challenges we faced as a team, and, together, we conquered.

<br>
​
### Reflections: <a name="reflections"></a>

* Andrew: The importance of being flexible with a passing test needing to be revisited or refactored if its intended function changes down the line in a project.  It is okay to revisit a previously passing test, and writing a new one to fit the new requirements of the project.

* Jordan: Being on the completion-side of the project, it’s nice to look back on all the code we wrote, all the struggles we faced, and feel a sense of pride at what we have accomplished together as a team.
​
* Maia: This project was very challenging, and it was so exciting to dive deeper into code. I feel like I finally got through some big and frustrating pieces of code, and sticking through those uncomfortable spots to solve it.

* Maia: Working with this team was great, and I was able to learn a lot through asking questions as well as ‘just trying it out’.

* Maia: This is also the first time I’ve worked with a modal, and it was really cool to be able to explore more of CSS while adjusting this to reflect our desired user experience.

<br>
​
### Future Iterations: <a name="future"></a>

* It would be cool to create an option for a user to log in and store their favorites to local storage.

* Changing saved recipes view so that recipe cards populate in the middle of the page and then move outward instead of the opposite.

* Expand the filtering functionality to include multiple tags and search by name and ingredients.

* Implementing a rating system for a user, and the ability to leave reviews of a recipe.

* Adjusting the images styling to allow mobile app use.

* Dark mode/light mode options for the page.
​
<br>
​
### Technologies used:<br><a name="tech"></a>
JavaScript<br>
HTML<br>
CSS<br>
Fetch API<br>
Webpack<br>
Mocha<br>
Chai<br>
​
<br>
​
​
### Contributors: <a name="contributors"></a>
​
Jordan Farelli: [LinkedIn](https://www.linkedin.com/in/jordan-farelli/) | [GitHub](https://github.com/jfarelli/)
Maia Cochran: [LinkedIn](https://www.linkedin.com/in/maiaecochran/) | [GitHub](https://github.com/Maia-Cochran)
Andrew Miller: [LinkedIn](https://www.linkedin.com/in/andrew-miller-0393b448/) | [GitHub](https://github.com/andrewmiller45)
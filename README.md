README is formatted well and at a minimum contains:
** Project and Goals
Use DRY, reusable code, network requests, and test-driven development to create a web app that allows users to view, sort, save, delete, and extract information from a collection of recipes complete with instructions, ingredients and their cost, and tags that can be used to sort them. Using links users can get more detailed information from each of the recipes and switch between pages allowing them to view all of the recipes at once, saved recipes or recipes in certain categories. This will allow users to plan meals and shopping trips.

** Technologies used, Challenges, Wins
We used Webpack to switch from using data in local files to using network requests for our data model and DOM updates. Timing became an issue when we had to coordinate network requests with certain functions that needed to run to update the DOM on page load. This required the use of .then to make these functions essentially "wait" for our network requests to return data. We also had to refactor functions already written in order to add the additional functiality that would allow the user to sort recipes they had saved by category and name. These saved recipes also had to be deleteable.
Screenshots/gifs of your app
List of contributors

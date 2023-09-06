# Project and Goals
Use DRY, reusable code, network requests, and test-driven development to create a web app that allows users to view, sort, save, delete, and extract information from a collection of recipes complete with instructions, ingredients and their cost, and tags that can be used to sort them. Using links users can get more detailed information from each of the recipes and switch between pages allowing them to view all of the recipes at once, saved recipes or recipes in certain categories. This will allow users to plan meals and shopping trips.

# Technologies used, Challenges, Wins
We used Webpack to switch from using data in local files to using network requests for our data model and DOM updates. We had to figure out how to make the data from the fetch calls available to our functions. We assigned this data to global variables that would make the data accessible to our functions. Timing became an issue when we had to coordinate network requests with certain functions that needed to run to update the DOM on page load. This required the use of .then to make these functions essentially "wait" for our network requests to return data. We also had to refactor functions already written in order to add the additional functiality that would allow the user to sort recipes they had saved by category and name. These saved recipes also had to be deleteable.

<img width="1428" alt="Screenshot 2023-09-05 at 8 14 37 PM" src="https://github.com/alfonsojack/whats-cookin/assets/119368820/f992e319-1f13-4df3-80ce-7f99b89a6c32">

<img width="1423" alt="Screenshot 2023-09-05 at 8 53 23 PM" src="https://github.com/alfonsojack/whats-cookin/assets/119368820/f193e0dd-850a-4bfa-8970-aa0461136c0e">

<img width="1421" alt="Screenshot 2023-09-05 at 8 56 09 PM" src="https://github.com/alfonsojack/whats-cookin/assets/119368820/8ea42a87-2e37-40ae-9166-d4185bddfcfe">

** Contributors
Jack Alfonso
Zen McMillan

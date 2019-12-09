let randomInt = 0;
function getRandomInt(max) {
  return randomInt = Math.floor(Math.random() * Math.floor(max));

}
getRandomInt(49) // for random user

let userName, user, pantry, recipe, ingredients, cookBook;

userName = $('#user-login').val() || users[0].name;
pantry = new Pantry(users[randomInt].pantry);
user = new User(1, users[randomInt].name, users[randomInt].pantry);
// cookBook = new CookBook();
// cookBook.loadBook(recipeData);
recipe = new Recipe(595736,
  'Loaded Chocolate Chip Pudding Cookie Cups',
  '../recipe-images/choco-cookies.jpg',
  ['antipasti', 'starter', 'snack'],
  ["In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."],
  [{
      "name": "all purpose flour",
      "id": 20081,
      "quanitity": {
        "amount": 1.5,
        "unit": "c"
      }
    },
    {
      "name": "baking soda",
      "id": 18372,
      "quanitity": {
        "amount": 0.5,
        "unit": "tsp"
      }
    }
  ]);

  ingredient = new Ingredient(20081, "wheat flour", 142);

$( document ).ready(function() {
  // const User = import('./user.js');
  // const Pantry = import('./pantry.js');
  //  let recipe = new Recipe(595736, 'Loaded Chocolate Chip Pudding Cups', 'https://spoonacular.com/recipeImages/595736-556x370.jpg', ['antipasti', 'starter', 'snack'], ['Add egg and vanilla and mix until combined.'],
  // [{
  //   "name": "all purpose flour",
  //   "id": 20081,
  //   "quanitity": {
  //     "amount": 1,
  //     "unit": "cup"
  //   }
  // }, {
  //   "name": "baking soda",
  //   "id": 18372,
  //   "quanitity": {
  //     "amount": 0.5,
  //     "unit": "tsp"
  //   }
  // }]
  // );


// Instantiate User:
// let user = new User()

  $('.login').on( "click", function() {
    // let user1 = new User(1,'Saige O\'Kon', [{'ingredient': 20081, 'amount': 2}, {'ingredient': 18372, 'amount': 2}], recipe);

    window.location = 'index.html';
  });


  $('#user-name').html(user.name);

  $('.heart').on( "click", function() {
    console.log("heart")
  });

  $('.chef').on( "click", function() {
    console.log('chef')
  });

  $('.recipe-book').on( "click", function() {
    console.log("recipe book");
  });
// var featureRecipe ='<img id="recipe-image" src="recipe.image"><div class="recipe"><h1 class="recipe-header"></h1><li class="recipe-number"></li><p class="recipe-instructions"><p></div>'
  $('.recipe h1').html(recipe.name);
  $('.recipe li').html(recipe.image);
  $('.recipe p').html(recipe.instructions[0]);

  // $('.recipe-header').html(featureRecipe)
  // var large = '<div class="accordian_container"><a href="#" class="accordian_trigger"><h4>Co-Borrower Information</h4></a><hr/><div class="accordian_item" id="accord_item_2"><label> First Name</label><br/><input type="text"/><br/><label>Middle Name</label><br/><input type="text"/><br/><label>Last Name</label><br/><input type="text" /><br/><label>Home Number</label><br/><input type="text"/><br><label>Work Number</label><br/><input type="text"/><br><label>Cell Number</label><br/><input type="text"/><br></div></div>';
  //
  // $('#accordion_container').append(large);​
  $('#user-login').attr("value", user.name)

  $('#recipe-image').attr("src", recipe.image);
  $('#recipe-image').attr("alt", recipe.name);


  $('.favorites-one').attr("src", recipeData[0].image);
  $('.favorites-two').attr("src", recipeData[2].image);
  $('.favorites-three').attr("src", recipeData[11].image);

  $('.available-one').attr("src", recipeData[4].image);
  $('.available-two').attr("src", recipeData[5].image);
  $('.available-three').attr("src", recipeData[6].image);

  $('.all-recipes-one').attr("src", recipeData[7].image);
  $('.all-recipes-two').attr("src", recipeData[8].image);
  $('.all-recipes-three').attr("src", recipeData[9].image);




}); // end jQuery

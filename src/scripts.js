$( document ).ready(function() {

  $('.login').on( "click", function() {
    let userName = $('#user-login').val() || users[0].name;
    window.location = 'index.html';
  });


  $('#user-name').html(users[0].name);

  $('.heart').on( "click", function() {
    console.log("heart")
  });

  $('.chef').on( "click", function() {
    console.log('chef')
  });

  $('.recipe-book').on( "click", function() {
    console.log("recipe book");
  });
var featureRecipe ='<img id="recipe-image" src="https://spoonacular.com/recipeImages/721146-556x370.jpg"><div class="recipe"><h1 class="recipe-header"></h1><li class="recipe-number"></li><p class="recipe-instructions"><p></div>'
  $('.recipe h1').html(recipeData[3].name);
  $('.recipe li').html(recipeData[3].instructions[1].number);
  $('.recipe p').html(recipeData[3].instructions[1].instruction);

  // $('.recipe-header').html(featureRecipe)
  // var large = '<div class="accordian_container"><a href="#" class="accordian_trigger"><h4>Co-Borrower Information</h4></a><hr/><div class="accordian_item" id="accord_item_2"><label> First Name</label><br/><input type="text"/><br/><label>Middle Name</label><br/><input type="text"/><br/><label>Last Name</label><br/><input type="text" /><br/><label>Home Number</label><br/><input type="text"/><br><label>Work Number</label><br/><input type="text"/><br><label>Cell Number</label><br/><input type="text"/><br></div></div>';
  //
  // $('#accordion_container').append(large);​


  $('#recipe-image').attr("src", recipeData[3].image)

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

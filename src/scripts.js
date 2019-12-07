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

}); // end jQuery

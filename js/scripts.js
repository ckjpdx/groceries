$(document).ready(function(){
  $("#groceryForm").submit(function(event){
    event.preventDefault();
    var arrGroceries = [];
    for (var i = 0; i < $('.grocItemClass').length; i++) { // add variable length
      var grocery = "#groc" + (i + 1);
      if ($(grocery).val()) {
        arrGroceries.push($(grocery).val());
      }
    }
    arrGroceries = arrGroceries.sort();
    arrGroceries = arrGroceries.map(function(grocery){
      grocery = grocery.toUpperCase();
      return grocery;
    });
    arrGroceries.forEach(function(item){
      $("#groceryUl").append('<li>' + item + '</li>');
    });

    $("#groceryForm").hide();

  });
});

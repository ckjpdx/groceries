$(document).ready(function(){
  $("#groceryForm").submit(function(event){
    event.preventDefault();
    var arrGroceries = [];
    for (var i = 0; i < 6; i++) { // add variable length
      var grocery = "#groc" + (i + 1);
      if ($(grocery).val()) {
        arrGroceries[i] = $(grocery).val();
      }
    }
    arrGroceries = arrGroceries.sort();
    debugger;
    arrGroceries.forEach(function(item){
      $("#groceryUl").append('<li>' + item + '</li>');
    });

    $("#groceryForm").hide();

  });
});

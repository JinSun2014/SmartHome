$(document).ready(function(){
  $('#lamp').click(function(){
    if ($(this).text() == "On"){
      // close lamp
      $(this).attr('class', 'btn btn-danger col-md-4 col-md-offset-4');
      $(this).text("Off");
    }
    else{
      // open lamp
      $(this).attr('class', 'btn btn-success col-md-4 col-md-offset-4');
      $(this).text("On");
    }
  });
});


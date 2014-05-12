$(document).ready(function(){
  $('#lamp').click(function(){
    if ($(this).text() == "On"){
      // close lamp
      $(this).attr('class', 'btn btn-danger col-md-4 col-md-offset-4');
      //$(this).text("Off");
      sendCommand('lamp', 'Off', $(this), 'Off');
    }
    else{
      // open lamp
      $(this).attr('class', 'btn btn-success col-md-4 col-md-offset-4');
      //$(this).text("On");
      sendCommand('lamp', 'On', $(this), 'On');
    }
  });
});

function sendCommand(device, motion, selector, res){
  $.post('operate/' + device + '/' + motion, {
  }, function(response){
    if (response.success){
      selector.text(res)
    } else {
    }
  })
}

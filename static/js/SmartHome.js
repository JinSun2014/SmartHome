$(document).ready(function(){
  $('#lamp').click(function(){
    if ($(this).text() == "On"){
      // close lamp
      sendCommand('lamp', 'On', $(this));
    }
    else{
      // open lamp
      sendCommand('lamp', 'Off', $(this));
    }
  });
});

function sendCommand(device, motion, selector){
  $.post('operate/' + device + '/' + motion, {
  }, function(response){
    if (response.success){
      if (motion == "On"){
        selector.attr('class', 'btn btn-danger col-md-4 col-md-offset-4');
        selector.text("Off")
      }
      else{
        selector.attr('class', 'btn btn-success col-md-4 col-md-offset-4');
        selector.text("On")
      }
    } else {
    }
  })
}


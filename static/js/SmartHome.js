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
        selector.attr('class', 'btn btn-default active col-sm-offset-3');
        selector.text("Off")
      }
      else{
        selector.attr('class', 'btn btn-default col-sm-offset-3');
        selector.text("On")
      }
    } else {
    }
  })
}


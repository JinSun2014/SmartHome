$(document).ready(function(){
  $('#lamp').click(function(){
    if ($(this).text() == "On"){
      // close lamp
      sendCommand('lamp', 'Off', $(this));
    }
    else{
      // open lamp
      sendCommand('lamp', 'On', $(this));
    }
  });
});

function sendCommand(device, motion, selector){
  $.post('operate/' + device + '/' + motion, {
    'status': 'OK',
  }, function(response){
    if (response.success){
      $('#error_msg').text('');
      if (motion == "On"){
        selector.attr('class', 'btn btn-default active col-sm-offset-3');
        selector.text("On")
      }
      else{
        selector.attr('class', 'btn btn-default col-sm-offset-3');
        selector.text("Off")
      }
    } else {
        $('#error_msg').text(response.error_msg);
    }
  })
}


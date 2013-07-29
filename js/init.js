$(document).ready(function() {
	inputPrompt().autotype('Hello', {delay: 70});
	inputPrompt().focus();
});

$(document).keypress(function(e) {
  // if user presses 'enter' key
  if(e.which == 13) { 
  	var user_input = inputPrompt().val();
  	var response = processInput(user_input);
  	displayResponse(response);
    displayNextPrompt(); 
  }
});


$('.list li').mouseup(function() {
	command = $(this).html();
	inputPrompt().val('');
	inputPrompt().autotype(command, {delay: 50});
	inputPrompt().focus();
});
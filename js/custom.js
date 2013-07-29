
function processInput(input){
	if (quiz_flag) 
		return processQuizInput(input);
	else 
		return processTerminalInput(input);
}


function processTerminalInput(input) {
	var clean_input = $.trim(input.toLowerCase());

	if (clean_input in responses) {
		if (type(responses[clean_input]) == "String") 
			return responses[clean_input];
		else 
			return responses[clean_input]();
	} else {
		return responses.default;
	}

}





var points = 0;

function addPoint() {
	points += 1;
	if (points == 5) {
		alert('Woohoo! You got 5 points.');
	}
}





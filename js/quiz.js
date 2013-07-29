var quiz_flag = 0;
var quiz_index = 0;
var quiz_questions = [ajax_question, ame_question, food_question, sports_question, fogg_question,
											code_question];
var quiz_question_check = [0,0,0,0,0,0];


function nextQuizQuestion() {
	if ( $.inArray( 0, quiz_question_check ) > -1 ) {
		do {
			quiz_index = Math.floor(Math.random()*quiz_questions.length);
		} while (quiz_question_check[quiz_index] == 1);
		next_question = quiz_questions[quiz_index];
		return next_question;
	} else {
		quiz_flag = 0;
		removeStyleSheet('quiz');
		clearScreen();
		return "Woohoo! You answered every question. <br/> \
								Back to Terminal Mode :) <br/>"

	}
}

function startQuiz() {
	quiz_flag = 1;
	updateStyleSheet('quiz');
	clearScreen();
	return quiz_response;
}

function exitQuiz() {
	quiz_flag = 0;
	removeStyleSheet('quiz');
	clearScreen();
	response = "Back to Terminal Mode :)<br/>";
	return response;
}


/************************/
// TODO: REFACTOR THIS!!
/************************/

function processQuizInput(input) {
	input = $.trim(input.toLowerCase())
	if (input == 'exit') {
		response = exitQuiz();
		return response;
	}
	if (input == 'next') {
		response = nextQuizQuestion();
		return response;
	}
	if (input == 'clear') {
		return clearScreen();
	}
	if (quiz_question_check[quiz_index] == 1) {
		response = "<strong>next</strong> for the next question";
		return response;
	}

	switch(quiz_index) {
		case 0: /* Ajax */
			if (input == 'ajax') {
				response = "Yup! He is the best. +1!";
				addPoint();
			} else {
				response = "Whaaaat? How do you not know Ajax?"
			}
			break;

		case 1: /* AME */
			response = "That is good! Now go set that up on <a href='http://www.askmeevery.com' target='_blank'>AskMeEvery</a>. \
				 				It only takes 10 seconds.<br/>I'll just wait right here... <br/> \
				 				[twiddling thumbs]<br/><br/> \
				 				Want a recommended question? Check out the <a href='http://www.businessinsider.com/one-question-that-boosts-2013-6' target='_blank'> \
				 				one question that dramatically boosts happiness</a>.";
			break;

		case 2: /* food */
			if (input == 'chipotle') {
				response = "ARE YOU READING MY MIND?!?! +1";
				addPoint();
			} else {
				response = "WRONG! The correct answer is chipotle."
			}
			break;

		case 3: /* sports */
			if (input == 'ping pong' || input == 'table tennis') {
				response = "Good work! If you want to see a graph of my ping pong battles, go to the very bottom of \
										<a href='http://www.experimentable.com' target='_blank'>Experimentable</a>. <br/> \
										+1";
				addPoint();
			} else {
				response = "No. Ping Pong is the answer."
			}
			break;

		case 4: /* fogg */
			if (input == 'trigger') {
				response = "Yep! +1";
				addPoint();
			} else {
				response = "The correct answer is 'trigger'."
			}
			break;

		case 5: /* code */
			if (input == 'javascript' || input == 'js') {
				response = "You got it! +1";
				addPoint();
			} else {
				response = "Not quite - this site was hacked together in javascript."
			}
			break;

	}
	quiz_question_check[quiz_index] = 1;
	response += "<br/><br/><i><strong>next</strong> for new question, <strong>exit</strong> to leave</i>"
	return response;
}
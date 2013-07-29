var responses = {
	'start': start_response,

	'help': help_response,
	'ls': help_response,

	'portfolio': portfolio_response,

	'portfolio -a': portfolio_all_response,
	'portfolio [-a]': portfolio_all_response,

	'experimentable': experimentable_response,

	'askmeevery': askmeevery_response,

	'askmeevery for coaches': askmeevery_coach_response,

	'rejectedtogether': rejectedtogether_response,
	'rejected together': rejectedtogether_response,

	'timefeather': timefeather_response,

	'crowdalog': crowdalog_response,

	'limitedg': limitedg_response,
	'limited g': limitedg_response,

	'questrial': questrial_response,

	'1face': oneface_response,
	'1facewatch': oneface_response,
	'1face watch': oneface_response,

	'qs': qs_response,
	'quantified self': qs_response,
	'chicago quantified self': qs_response,

	'startupfeelings': startupfeelings_response,
	'startup feelings': startupfeelings_response,

	'lrte': lrte_response,
	'long road to entrepreneurship': lrte_response,
	'it\'s a long road to entrepreneurship': lrte_response,
	'its a long road to entrepreneurship': lrte_response,
			

	'points': function() {
			response = "Points: " + points;
			if (points < 3) {
				response += "<br/><br/> \
										 Pretty good, but you still have work to do. Want to take a quiz? Try <strong>'quiz'</strong>."
			} 
			return response;
		},

	'writing': writing_response,

	'reverse job description': reverse_job_description_response,

	'resume': function(){
			window.open('https://dl.dropboxusercontent.com/u/36806092/resume.pdf');
			return "";
		},

	'email': email_response,

	'clear': function() {
		$('#Terminal').html("<div class='lead nomargin'>Welcome to <span class='highlight'>MarkMoschel.com</span>! Please enter a command (or type '<strong>help</strong>'):</div>");
		return "";
	},

	'dark': function() {
			updateStyleSheet('dark');
			$('.list li.color_mode').html('light')
			return "";
		},

	'light': function() {
			removeStyleSheet('dark')
			$('.list li.color_mode').html('dark')
			return "";
		},

	'mark': mark_response,

	'sports': sports_response,

	'hobbies': hobbies_response,

	'experiments': experiments_response,

	'picture': picture_response,
	'pic': picture_response,

	'picture -baby': picture_baby_response,
	'pic -baby': picture_baby_response,
	'picture -[baby]': picture_baby_response,
	'pic -[baby]': picture_baby_response,

	'hi': hello_response,
	'hello': hello_response,

	'pwd': linux_response,

	'home': chicago_response,

	'quiz': function() {
		return startQuiz();
	},

	'default': default_response
}
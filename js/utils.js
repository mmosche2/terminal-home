function inputPrompt() {
	return $('input[type="text"].input_field').last();
}

function displayResponse(response) {
	$('#Terminal').append('<div class="response">'+response+'</div>');
}

function displayNextPrompt(){
	// $('.input_field').not(":last").addClass('fade');
	fadeText('.input_field');
	fadeText('.input_symbol');
	$('#Terminal').append('<div class="row"><div class="span10"> \
													<span class="input_symbol"> > </span> <input type="text" \
    											name="input" class="input_field"> \
    											</div></div>');
  inputPrompt().focus();
  fadeText('.response');

}

function fadeText(class_field) {
	$(class_field).not(":last").addClass('fade');
}

function clearScreen() {
	$('#Terminal').html("<div class='lead nomargin'>Welcome to <span class='highlight'>MarkMoschel.com</span>! Please enter a command (or type '<strong>help</strong>'):</div>");
	return "";
}

function type(obj){
    return Object.prototype.toString.call(obj).match(/^\[object (.*)\]$/)[1]
}

function updateStyleSheet(filename) {
    newstylesheet = "css/style_" + filename + ".css";
    if ($("#dynamic_css").length == 0) {
        $("head").append("<link>")
        css = $("head").children(":last");
        css.attr({
          id: "dynamic_css",
          rel:  "stylesheet",
          type: "text/css",
          href: newstylesheet
        });
    } else {
        $("#dynamic_css").attr("href",newstylesheet);
    }
}

function removeStyleSheet(filename) {
	$("#dynamic_css").attr("href",'#');
}


/********************/
/* Text -- Terminal */
/********************/

var hello_response = "Hey! Glad you are here. You can learn about me and my projects by exploring different \
									commands. As you uncover new information, you might earn points. Earn 5 points and \
									I'll send you a special note :) \
									<br/><br/> \
									Ready to explore? Try <strong>'start'</strong>. ";

var start_response = "<div class='span3'> \
										<strong>portfolio [-a]</strong><br/> \
										<strong>reverse job description</strong><br/> \
										<strong>help</strong> \
									</div> \
									<div class='span3'> \
										- a list of my projects <br/> \
										- what I'm looking for <br/> \
										- list all commands \
									</div> <div class='clear'></div>"

var help_response = "<div class='span3'> \
										<strong>portfolio [-a]</strong><br/> \
										<strong>writing</strong><br/> \
										<strong>reverse job description</strong><br/> \
										<strong>resume</strong><br/> \
										<strong>email</strong><br/> \
										<strong>mark</strong><br/> \
										<strong>points</strong><br/> \
										<strong>clear</strong><br/> \
										<strong>dark / light</strong><br/> \
										and some surprise commands... :) <br/> \
									</div> \
									<div class='span4 hidden-phone'> \
										- a list of my projects <br/> \
										- a sample of articles I wrote <br/> \
										- what I'm looking for <br/> \
										- a more formal resume as a pdf <br/> \
										- send me a note! <br/> \
										- learn more about me <br/> \
										- check your point total <br/> \
										- clear the screen <br/> \
										- change the display <br/> \
									</div> <div class='clear'></div>"

var portfolio_response = "<p class='nomargin weighted'>Development & Startup Projects:</p> \
									<ul><li><a href='http://www.experimentable.com' target='_blank'>Experimentable</a></li> \
											<li><a href='http://www.askmeevery.com' target='_blank'>AskMeEvery</a></li> \
											<li><a href='http://www.askmeevery.com/coach' target='_blank'>AskMeEvery for Coaches</a></li> \
											<li><a href='http://www.rejectedtogether.com' target='_blank'>RejectedTogether</a></li> \
											<li><a href='http://www.timefeather.com' target='_blank'>TimeFeather</a></li> \
											<li><a href='http://www.crowdalog.com' target='_blank'>Crowdalog</a></li> \
											<li><a href='http://www.limitedg.com' target='_blank'>LimitedG</a></li> \
											<li><a href='http://www.questrial.com' target='_blank'>Questrial</a></li> \
									</ul><br/> \
									<p class='nomargin weighted'>Other Projects:</p> \
									<ul><li><a href='http://www.meetup.com/ChicagoQuantifiedSelf/' target='_blank'>Chicago Quantified Self</a></li> \
											<li><a href='http://www.indiegogo.com/1facewatch' target='_blank'>1Face</a></li> \
											<li><a href='http://startupfeelings.tumblr.com/' target='_blank'>Startup Feelings</a></li> \
									</ul><br/> \
									<p class='nomargin'>... enter the project name below to learn more about it</p> \
									<p class='nomargin'>or try 'portfolio -a'</p> \
									</ul>"

var portfolio_all_response = "<div class='span3'> \
										<p class='nomargin weighted'>Dev Projects:</p> \
										<a href='http://www.experimentable.com' target='_blank'>Experimentable</a><br/> \
										<a href='http://www.askmeevery.com' target='_blank'>AskMeEvery</a><br/> \
										<a href='http://www.askmeevery.com/coach' target='_blank'>AskMeEvery for Coaches</a><br/> \
										<a href='http://www.rejectedtogether.com' target='_blank'>RejectedTogether</a><br/> \
										<a href='http://www.crowdalog.com' target='_blank'>Crowdalog</a><br/> \
										<a href='http://www.limitedg.com' target='_blank'>LimitedG</a><br/> \
										<a href='http://www.questrial.com' target='_blank'>Questrial</a><br/> \
										<br/><p class='nomargin weighted'>Other Projects:</p> \
										<a href='http://www.meetup.com/ChicagoQuantifiedSelf/' target='_blank'>Chicago Quantified Self</a><br/> \
										<a href='http://www.indiegogo.com/1facewatch' target='_blank'>1Face</a><br/> \
										<a href='http://startupfeelings.tumblr.com/' target='_blank'>Startup Feelings</a><br/> \
									</div> \
									<div class='span4 visible-desktop'> \
										<br/> \
										- my startup <br/> \
										- simple self-tracking through email or text <br/> \
										- helping coaches keep clients accountable <br/> \
										- a social platform for Rejection Therapy <br/> \
										- newsletter for crowdfunding products <br/> \
										- an urban clothing line <br/> \
										- social self-improvement <br/> \
										<br/><br/> \
										- I organize the QS Meetup community <br/> \
										- an Indiegogo campaign to change the world <br/> \
										- our humorous entrepreneurship blog <br/> \
									</div> <div class='clear'></div> \
									<br/>... enter the project name below to learn more "									

var experimentable_response = "<div class='quote'> \
									<p class='italic nomargin'>\"All life is an experiment. The more experiments you make the better.\"</p> \
									<p class='nomargin'>- Ralph Waldo Emerson</p> \
									</div> \
									<p class='nomargin'>Experimentable was born from a passion for self-tracking, behavior design, and health. \
									My co-founder <a href='http://twitter.com/euggra'>Eugene</a> and I created Experimentable \
									as an exploration of these ideas. It is the brand that ties all of our projects together. \
									</p> \
									<a href='http://www.experimentable.com' target='_blank'>Experimentable</a>"

var askmeevery_response = "<p class='nomargin'> AskMeEvery is the simplest way to measure your daily behaviors, \
									emotions, and actions so you can optimize your health and happiness. You set questions \
									that are meaningful to you and we'll text or email them to you daily. As you reply \
									we store and graph your answers.</p> \
									<a href='http://www.askmeevery.com' target='_blank'>AskMeEvery</a>"

var askmeevery_coach_response = "<p class='nomargin'>AskMeEvery helps coaches stay present in their client's life \
									outside of sessions. We added functionality for coaches to sign up clients and \
									monitor their progress.</p> \
									<a href='http://www.askmeevery.com/coach' target='_blank'>AskMeEvery for Coaches</a>"

var rejectedtogether_response = "<p class='nomargin'>Inspired by a friend doing Rejection Therapy, I committed to trying \
									it for 30 days. I quickly realized I needed daily accountability and I really \
									wanted to be embedded within a community of people also doing it, so I built \
									a RejectedTogether. It also doubled as an opportunity to test the AskMeEvery \
									API as I was building it.</p> \
									<a href='http://www.rejectedtogether.com' target='_blank'>RejectedTogether</a> "

var timefeather_response = "<p class='nomargin'>TimeFeather was an attempt to solve the hassle of time \
									reports. We wanted to simplify the whole process by having employees just respond \
									to a daily email with their hours and tasks. </p> \
									<a href='http://www.timefeather.com' target='_blank'>TimeFeather</a> "

var crowdalog_response = "<p class='nomargin'>As crowdfunding started to \
									explode, we were having trouble keeping up with all the cool products being created. \
									We thought people would be interested in a weekly, curated email of the coolest \
									products available on the top crowdfunding sites. </p> \
									<a href='http://www.crowdalog.com' target='_blank'>Crowdalog</a> "

var limitedg_response = "<p class='nomargin'>LimitedG is an urban clothing line created and run by a friend of mine. \
									Its built on the BigCartel ecommerce platform. I worked with the lead designer to \
									customize the site's front end design. </p> \
									<a href='http://www.limitedg.com' target='_blank'>LimitedG</a> "

var questrial_response = "<p class='nomargin'>Questrial is a social self-improvement platform. Create a quest, \
									invite friends, track everyone's progress, and continue to develop yourself. I have \
									always been passionate about experimenting with new behaviors and skills, so Questrial \
									enabled me to document and share those experiments. It was also the first full web app \
									I ever built. It certainly doesn't look pretty, but I am proud of the more complex \
									backend functionality. Sadly, it is no longer being used.</p> \
									<a href='http://www.questrial.com' target='_blank'>Questrial</a> "

var oneface_response = "<p class='nomargin'>I joined the 1Face Watch campaign as the Director of Operations. \
									1Face is a social good that launched on Indiegogo. During our 50-day campaign, we \
									raised $357,983, making us the 2nd most successful fashion crowdfunding project ever \
									(behind only Ministry of Supply). From just those initial contributions, \
									we impacted over 57,000 lives. Equally important, we brought awareness of our 6 \
									global causes to over 200,000 people and there are now 10,000 people who, when they \
									check the time, are reminded of their own potential to change the world.</p> \
									<a href='http://www.indiegogo.com/1facewatch' target='_blank'>1Face</a> "

var qs_response = "<p class='nomargin'>I co-organize the Chicago QS meetups. I love it. I am pretty \
									sure you would too. Have you checked it out? </p> \
									<a href='http://www.meetup.com/ChicagoQuantifiedSelf/' target='_blank'>Chicago Quantified Self</a><br /> \
									or check out my beginner's guide... \
									<a href='http://technori.com/2013/04/4281-the-beginners-guide-to-quantified-self-plus-a-list-of-the-best-personal-data-tools-out-there/' \
									target='_blank'>The Beginners Guide to Quantified Self</a>"

var startupfeelings_response = "<p class='nomargin'>Our humorous and often nonsensical documentation of the \
									entrepreneur's struggle</p> \
									<a href='http://startupfeelings.tumblr.com/' target='_blank'>Startup Feelings</a> ";

var lrte_response = function() {
		addPoint();
		return "<p class='nomargin'>How'd you know about this? Very clever... +1 points \
									for you :) </p>";
}

var writing_response = "<ul><li><a href='http://technori.com/2013/04/4281-the-beginners-guide-to-quantified-self-plus-a-list-of-the-best-personal-data-tools-out-there/' target='_blank'>The Beginners Guide to Quantified Self</a></li> \
											<li><a href='http://technori.com/2012/12/2950-1face-watch-how-we-raised-357983-in-50-days/' target='_blank'>How Your Startup Can Change the World: The 5 Keys to Social Entrepreneurship</a></li> \
											<li><a href='http://askmeevery.com/blog/january-2013-tracking-review.html' target='_blank'>AskMeEvery Blog - Tracking Review: Jan 2013</a></li> \
									</ul>";

var reverse_job_description_response = "<strong>What I'm looking for:</strong> \
									<ul><li>Short-term contract work (< 3 months), full or part-time</li> \
											<li>coding in Ruby, Rails, Javascript, HTML, CSS</li> \
											<li>with a team that has an entrepreneurial mindset</li> \
											<li>working on a project related to Quantified Self, health, data, behavior design, or anything interesting.</li> \
									</ul>"

var email_response = "Woohoo! I'd love to hear from you. Send me an email \
											<a href='mailto:mark.moschel@gmail.com'>here</a>.";

var mark_response = "Hey! What would you like to know? Try one of these commands: <br/> \
									<strong>sports</strong><br/> \
									<strong>hobbies</strong><br/> \
									<strong>experiments</strong><br/> \
									<strong>picture</strong><br/>";

var sports_response = "Huge basketball fan. I prefer pro sports to college. Hockey and soccer have \
									grown on me in recent years. Baseball is still boring.";

var hobbies_response = "Playing basketball. Doing crossfit-style workouts. Hanging out \
									with friends. Traveling. Anything related to startups. Building cool things.";

var experiments_response = "<ol><li><strong>Dunk Challenge</strong> - I'm currently on a quest to dunk \
											a basketball. It has always been an impossible dream. I think that is why \
											I find it so exciting now. I am doing a lot of squat and plyo workouts. \
											Ask me on Aug 31 if I was successful.</li> \
											<li><strong>Rejection Therapy</strong> - Learn about it <a href='http://rejectiontherapy.com/rules/' target='_blank'> \
											here</a> and then search google for the TED talk about it. It's great. \
											It got me a free Withings scale!</li> \
											<li>[past] <strong>Vegetarian</strong> - I ate vegetarian for 30 days. Ended up \
											losing 7 lbs, hence the next experiment...</li> \
											<li>[past] <strong>Gain 17 lbs in 6 weeks</strong> - Missed it by 1 lb. I wrote about it \
											<a href='http://guitarin30.com/post/17662892452/gain-17-pounds-in-6-weeks-lessons-learned' target='_blank'>here</a>.</li> \
											<li>[past] <strong>Meditation</strong> - Built a meditation habit by committing \
											to it for 30 days.</li> \
											<li>... ask me about others - <a href='mailto:mark.moschel@gmail.com'>email</a></li> \
									</ol>";

var picture_response = "<img src='img/headshot.jpg' alt='Mark Headshot' height='200' width='200'> <br/> \
									That's me! There is another much younger photo as well. Try appending \
									a tag to the command like <strong>'picture -[tag]'</strong> <br/> \
									(hint: the correct tag rhymes with 'maybe')";

var picture_baby_response = function(){
		addPoint();
		return "<img src='img/babypic2.jpg' alt='Mark Headshot' height='200' width='200'> <br/> \
									Whoa, nice one!! Now you know how adorable I was as a little kid... +1! <br/> \
									(quick tip: type <strong>'points'</strong> to check your current point total).";
}

var linux_response = "this isn't linux!";

var chicago_response = "Chicago";

var quiz_response = "Welcome to Quiz Mode!<br/> \
							commands: <br/> \
							<strong>next</strong> - show next question<br/> \
							<strong>exit</strong> - leave quiz mode<br/><br/> \
							Got it? <strong>'next'</strong> to start.";

var default_response = "not a valid input. Try <strong>help</strong>.";



/****************/
/* Text -- Quiz */
/****************/

var ajax_question = "name of my dog? (hint: it is also the name of a cleaning detergent, a greek \
											warrior, and a programming language)";
var ame_question = "if you could ask yourself a question every day, what would it be?";
var food_question = "subway or potbelly?";
var sports_question = "what tiny tennis-like game do all entrepreneurs enjoy?";
var fogg_question = "To perform a desired behavior, BJ Fogg says you need 3 elements to converge: \
											Motivation, Ability, and a _____?";
var code_question = "what language is this site mostly built in?";
var qs_question = "";


/*************************/
/* OLD -- no longer user */
/*************************/
	// switch() {	
	// 	case 'start':
	// 		response = start_response;
	// 		break;

	// 	case 'help':
	// 		response = help_response;
	// 		break;

	// 	case 'portfolio':
	// 		response = portfolio_response;
	// 		break;

	// 	case 'portfolio -a':
	// 	case 'portfolio [-a]':
	// 		response = portfolio_all_response;
	// 		break;

	// 	case 'experimentable':
	// 		response = experimentable_response;
	// 		break;

	// 	case 'askmeevery':
	// 		response = askmeevery_response;
	// 		break;

	// 	case 'askmeevery for coaches':
	// 		response = askmeevery_coach_response;
	// 		break;

	// 	case 'rejectedtogether':
	// 	case 'rejected together':
	// 		response = rejectedtogether_response;
	// 		break;

	// 	case 'timefeather':
	// 		response = timefeather_response;
	// 		break;

	// 	case 'crowdalog':
	// 		response = crowdalog_response;
	// 		break;

	// 	case 'limitedg':
	// 	case 'limited g':
	// 		response = limitedg_response;
	// 		break;

	// 	case 'questrial':
	// 		response = questrial_response;
	// 		break;

	// 	case '1face':
	// 	case '1facewatch':
	// 	case '1face watch':
	// 		response = 1face_response;
	// 		break;

	// 	case 'qs':
	// 	case 'quantified self':
	// 	case 'chicago quantified self':
	// 		response = qs_response;
	// 		break;

	// 	case 'startupfeelings':
	// 	case 'startup feelings':
	// 		response = startupfeelings_response;
	// 		break;

	// 	case 'lrte':
	// 	case 'long road to entrepreneurship':
	// 	case 'it\'s a long road to entrepreneurship':
	// 	case 'its a long road to entrepreneurship':
	// 		response = lrte_response;
	// 		addPoint();
	// 		break;

	// 	case 'points':
	// 		response = "Points: " + points;
	// 		if (points < 3) {
	// 			response += "<br/><br/> \
	// 									 Pretty good, but you still have work to do. Want to take a quiz? Try <strong>'quiz'</strong>."
	// 		} 
	// 		break;

	// 	case 'writing':
	// 		response = writing_response;
	// 		break;

	// 	case 'reverse job description':
	// 		response = reverse_job_description_response;
	// 		break;

	// 	case 'resume':
	// 		window.open('https://dl.dropboxusercontent.com/u/36806092/resume.pdf');
	// 		response = "";
	// 		break;

	// 	case 'email':
	// 		response = email_response;
	// 		break;

	// 	case 'clear':
	// 		response = "";
	// 		$('#Terminal').html("<div>Welcome to <span class='highlight'>MarkMoschel.com</span>! Please enter a command (or type '<strong>help</strong>'):</div>");
	// 		break;

	// 	case 'dark':
	// 		updateStyleSheet('dark');
	// 		response = "";
	// 		break;

	// 	case 'light':
	// 		removeStyleSheet('dark')
	// 		response = "";
	// 		break;

	// 	case 'mark':
	// 		response = mark_response;
	// 		break;

	// 	case 'sports':
	// 		response = sports_response;
	// 		break;

	// 	case 'hobbies':
	// 		response = hobbies_response;
	// 		break;

	// 	case 'experiments':
	// 		response = experiments_response;
	// 		break;

	// 	case 'picture':
	// 	case 'pic':
	// 		response = picture_response;
	// 		break;

	// 	case 'picture -baby':
	// 	case 'pic -baby':
	// 	case 'picture -[baby]':
	// 	case 'pic -[baby]':
	// 		response = picture_baby_response;
	// 		addPoint();
	// 		break;

	// 	case 'quiz':
	// 		startQuiz();
	// 		break;

	// 	case 'hi':
	// 	case 'hello':
	// 		response = hello_response;
	// 		break;

	// 	case 'ls':
	// 	case 'pwd':
	// 		response = linux_response;
	// 		break;

	// 	case 'home':
	// 		response = chicago_response;
	// 		break;

	// 	default:
	// 		response = default_response;
	// }
	// return response;
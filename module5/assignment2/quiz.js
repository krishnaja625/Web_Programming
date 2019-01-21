var quiz = {
	"questions" : [{
	"question" : "Who is the present president of India?",
	"option" : [
	{
	text : "APJ Abdul Kalam",
	isCorrect : false,
	feedback : "Incorrect"
    },
	{
	text : "Ram Nath Kovind",
	isCorrect : true,
	feedback : "Correct"
    },
    {
	text : "Pratibha Patil",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	text : "Pranab Mukherjee",
	isCorrect : false,
	feedback : "Incorrect"
    }
	],
	"hint" : "Starts with a god's name",
},
{
	"question" : "Who killed Bahubali?",
	"option" : [
	{
	text : "Kattapa",
	isCorrect : false,
	feedback : "Incorrect"
    },
	{
	text : "Siva gami",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	text : "Balala deva",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	text : "Bijala deva",
	isCorrect : true,
	feedback : "Correct. As Bijala deva is the main person planned it."
    }
	],
	"hint" : "It's a trick question.. Think big",
},
{
	"question" : "What is the capital of Telangana",
	"option" : [
	{
	text : "Amaravathi",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	text : "Hyderabad",
	isCorrect : true,
	feedback : "Correct"
    },
	{
	text : "Vishakapatnam",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	text : "Guntur",
	isCorrect : false,
	feedback : "Incorrect"
    }
	],
	"hint" : "The answer is in the question itselves"
},
{
	"question" : "Which is the Rank 1 ODI Cricket team in 2018?",
	"option" : [
	{
	text : "Australia",
	isCorrect : false,
	feedback : "Incorrect"
    },
	{
	text : "South Africa",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	text : "New Zealand",
	isCorrect : false,
	feedback : "Incorrect"
    },
    {
	text : "India",
	isCorrect : true,
	feedback : "Correct"
    }
	],
	"hint" : "Mera Bharath Mahan...!!!!"
}
]
}
var i = 0
var j = 0
window.onload = function display() {
	document.getElementById('question 1').innerHTML = quiz.questions[i].question
	document.getElementById('hint 1').innerHTML = quiz.questions[i].hint
	document.getElementById('blah').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick="radioclicked('+i+','+j+')">' + quiz.questions[i].option[j].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 2" onclick="radioclicked('+i+','+j+1+')">' + quiz.questions[i].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 3" onclick="radioclicked('+i+','+j+2+')">' + quiz.questions[i].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 4" onclick="radioclicked('+i+','+j+3+')">' + quiz.questions[i].option[j+3].text + '<br>'
	document.getElementById('question 2').innerHTML = quiz.questions[i+1].question
	document.getElementById('hint 2').innerHTML = quiz.questions[i+1].hint
	document.getElementById('blah2').innerHTML = '<input type = "radio" name = "q2" value = "option 1" onclick="radioclicked1('+i+1+','+j+')">' + quiz.questions[i+1].option[j].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 2" onclick="radioclicked1('+i+1+','+j+1+')">' + quiz.questions[i+1].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 3" onclick="radioclicked1('+i+1+','+j+2+')">' + quiz.questions[i+1].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 4" onclick="radioclicked1('+i+1+','+j+3+')">' + quiz.questions[i+1].option[j+3].text + '<br>'
    hideButton('Prev')
};
function radioclicked(i,j) {
	if (quiz.questions[i].option[j].isCorrect) {
		code=''
		code += '<div class="alert alert-success alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-ok"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback 1').innerHTML = code
	} else {
		code=''
		code += '<div class="alert alert-warning alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-remove"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback 1').innerHTML = code
	}
}
function radioclicked1(i,j) {
    if (quiz.questions[i].option[j].isCorrect) {
		code=''
		code += '<div class="alert alert-success alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-ok"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback 2').innerHTML = code
	} else {
		code=''
		code += '<div class="alert alert-warning alert-dismissible">'
		code += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
		code += '<span class="glyphicon glyphicon-remove"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback 2').innerHTML = code
	}	
}
function prev() {
	i=i-1;
	if (i < 0) {
		i = 0;
		hidebutton('Prev')
		return;
	}
	showButton('Prev')
	showButton('Next')
	document.getElementById('question 1').innerHTML = quiz.questions[i].question
	document.getElementById('hint 1').innerHTML = quiz.questions[i].hint
	document.getElementById('blah').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick="radioclicked('+i+','+j+')">' + quiz.questions[i].option[j].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 2" onclick="radioclicked('+i+','+j+1+')">' + quiz.questions[i].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 3" onclick="radioclicked('+i+','+j+2+')">' + quiz.questions[i].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 4" onclick="radioclicked('+i+','+j+3+')">' + quiz.questions[i].option[j+3].text + '<br>'
	document.getElementById('question 2').innerHTML = quiz.questions[i+1].question
	document.getElementById('hint 2').innerHTML = quiz.questions[i+1].hint
	document.getElementById('blah2').innerHTML = '<input type = "radio" name = "q2" value = "option 1" onclick="radioclicked1('+i+1+','+j+')">' + quiz.questions[i+1].option[j].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 2" onclick="radioclicked1('+i+1+','+j+1+')">' + quiz.questions[i+1].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 3" onclick="radioclicked1('+i+1+','+j+2+')">' + quiz.questions[i+1].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 4" onclick="radioclicked1('+i+1+','+j+3+')">' + quiz.questions[i+1].option[j+3].text + '<br>'
    if (i == 0) hideButton('Prev')
}
function next() {
	i=i+1
	if (i > quiz.questions.length - 1) {
		i = quiz.questions.length - 1
		hideButton('Next')
		return
	}
	showButton('Next')
	showButton('Prev')
	document.getElementById('question 1').innerHTML = quiz.questions[i].question
	document.getElementById('hint 1').innerHTML = quiz.questions[i].hint
	document.getElementById('blah').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick="radioclicked('+i+','+j+')">' + quiz.questions[i].option[j].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 2" onclick="radioclicked('+i+','+j+1+')">' + quiz.questions[i].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 3" onclick="radioclicked('+i+','+j+2+')">' + quiz.questions[i].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q1" value = "option 4" onclick="radioclicked('+i+','+j+3+')">' + quiz.questions[i].option[j+3].text + '<br>'
	document.getElementById('question 2').innerHTML = quiz.questions[i+1].question
	document.getElementById('hint 2').innerHTML = quiz.questions[i+1].hint
	document.getElementById('blah2').innerHTML = '<input type = "radio" name = "q2" value = "option 1" onclick="radioclicked1('+i+1+','+j+')">' + quiz.questions[i+1].option[j].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 2" onclick="radioclicked1('+i+1+','+j+1+')">' + quiz.questions[i+1].option[j+1].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 3" onclick="radioclicked1('+i+1+','+j+2+')">' + quiz.questions[i+1].option[j+2].text + '<br>'
												+'<input type = "radio" name = "q2" value = "option 4" onclick="radioclicked1('+i+1+','+j+3+')">' + quiz.questions[i+1].option[j+3].text + '<br>'
    if (i == quiz.questions.length - 2) hideButton('Next')
}
function hideButton(id) {
	console.log(document.getElementById(id).style.visibility)
	document.getElementById(id).style.visibility = 'hidden'
}
function showButton(id) {
	console.log(document.getElementById(id).style.visibility)
	document.getElementById(id).style.visibility = 'visible'
}
function reset() {
	location.reload()
}







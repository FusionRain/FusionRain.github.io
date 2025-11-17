//this is the listener so the submit button
document.getElementById("turnin").addEventListener("click",score())

//this is the scoring function
function score()
{
	//this call in the answers and assigns them variables
	const a1=document.querySelectorAll('input[name="Q1"]:checked')[0].value;
	const a2=document.querySelectorAll('input[name="Q2"]:checked')[0].value;
	const a3=document.querySelectorAll('input[name="Q3"]:checked')[0].value;
	const a4=document.querySelectorAll('input[name="Q4"]:checked')[0].value;
	const a5=document.getElementById("useranswer")[0].value;
	const score=0;
	//This evaulates the answers and adds to the score if correct
	if (a1==HTML,CSS,javascript){
		score++
	}
	if (a2=="1990"){
		score++;
	}
	if (a3=="Mosaic"){
		score++;
	}
	if (a4=="Internet Explorer"){
		score++;
	}
	if (a5=="Tim Berners-Lee"){
		score++;
	}
	//This will send the results to be displayed in HTML
	let html="<p>Your score is"+score+"out of 5<br>The correct answers were:<br>HTML,CSS,Javascript<br>1990<br>Mosaic<br>Internet Explorer<br>Tim Berners-Lee<br>";
	document.getElementById("results").innerHTML=html;
	//This section will change the color of the text based off of score
	if (score>=4){
	document.getElementById("p2").style.color = "green";
	} else{
	document.getElementById("p2").style.color = "red";
	}
}
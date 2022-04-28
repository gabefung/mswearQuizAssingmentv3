let currentQuestion = 0;
let score = 0;
let hints = 0;	 // counter for ints shown
let maxHints = 3; // max hints
let questions = [
   {
	"question": "Who made Fallout New Vegas?",
	"a": "Obsidian Entertainment",
	"b": "Mobius Digital",
	"c": "Heart Machine",
	"d": "2k Games",
	"image":"quizimages/q1.jpg",
	"hints":"They made the first 2 Fallout games",
	"incorrect":"You have 2 hints left",
	"answer": "a"
   },
   {
	"question": "How long did it take to make Fallout New Vegas",
	"a": "3 years",
	"b": "5 years",
	"c": "18 months",
	"d": "3 months",
	"image":"quizimages/q2.jpg",
	"hints":"They had less than 5 years.",
	"answer": "c"
   },
   {
	"question": "What is the unique card game you can play in Fallout New Vegas?",
	"a": "Blackjack",
	"b": "Poker",
	"c": "Uno",
	"d": "Caravan",
	"image":"quizimages/q3.jpg",
	"hints":"It is not blackjack",
	"answer": "d"
   },
   {
   "question": "What celeberty are The Kings impersonating",
	"a": "Frank Sinatra",
	"b": "Elvis Presley",
	"c": "Dean Martin",
	"d": "Johnny Bond",
	"image":"quizimages/q4.jpg",
	"hints":"King of Rock 'n' Roll",
	"answer": "b"
	},
	{
   "question": "What is the area surronding New Vegas called?",
	"a": "Mojave Wasteland",
	"b": "The Dessert",
	"c": "The Commonwealth",
	"d": "Appalachia",
	"image":"quizimages/q5.jpg",
	"hints":"It's a nuclear wasteland",
	"answer": "a"
	},
	{
   "question": "What faction is the most bloodthirsty",
	"a": "The NCR",
	"b": "The Legion",
	"c": "The Brotherhood of Steel",
	"d": "The Boomers",
	"image":"quizimages/q6.jpg",
	"hints":"The leader is Ceaser",
	"answer": "b"
	},
	{
   "question": "What faction stands for old world values like democracy",
	"a": "The NCR",
	"b": "The Legion",
	"c": "The Brotherhood of Steel",
	"d": "The Boomers",
	"image":"quizimages/q7.jpg",
	"hints":"They are the New California Republic",
	"answer": "a"
	},
	{
   "question": "What beverage only appears in Fallout New Vegas?",
	"a": "Sunset Sarsaparilla",
	"b": "Nuka Cola",
	"c": "Bobby's Moonshine",
	"d": "Whisky",
	"image":"quizimages/q8.jpg",
	"hints":"They taste like the sun",
	"answer": "a"
	},
	{
   "question": "What is the name of the mian character in Fallout New Vegas?",
	"a": "The Wasteland Wanderer",
	"b": "The Gunslinger",
	"c": "The Mysterius Stranger",
	"d": "The Courier",
	"image":"quizimages/q9.jpg",
	"hints":"They carry packages",
	"answer": "d"
	},
	{
   "question": "What item plays an important part in the story of Fallout New Vegas",
	"a": "The Golden Bill",
	"b": "The Diamond Cap",
	"c": "The Platnium Chip",
	"d": "The Antidote",
	"image":"quizimages/q10.jpg",
	"hints":"You use to play poker",
	"answer": "a"
	},
 ];
 
 window.onload = function () {
	
	
 };
 function start (){
 timer();
	 loadQuestion();	
		document.getElementById("start").style.display = "none";
 }
 // show hint for current question if max not reached
 let getHintF = function() {
	 document.getElementById("hintButton").onclick = null;
	 console.log("hint button clicked");
	 // When next question display how many hints left
	
	 // if max hints not reached
	 if (hints < maxHints){
		 
	 // get hint for current question
	 let currentHint = questions[currentQuestion].hints;
	 // show in page
	 document.getElementById("hint").innerHTML = currentHint;
	 // increment hints shown
	 hints++;
	 }else{
		 // show message that there are no hints left
		 document.getElementById("hint").innerHTML = "You have no more hints!";
			
	 }
 };
 
 
 function loadQuestion() {
     document.getElementById("hintButton").onclick = getHintF;
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     // When load next question show how many hints left
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "70vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
	
	// document. getElementById("hint").innerHTML = "You have " + ()
 } // loadQuestion
 
 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}    
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
       message = "You can do better :< Your score is " + score + " / " + questions.length; 
    } // else
	
	
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       if (score > 5){
		   message = "Good job you passed";
	   }else{
		   message = "You failed try again";
	   }
	   
	   
	// add ability ro restart quiz
	   message += "<div id='restart' onclick='restartQuiz()'>Restart Quiz</div>";
	   
    } else {
       loadQuestion();
	   
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function restartQuiz(){
	 location.reload();
 }
 
 
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox
 
 function timer () {
	 // let message1 = "";
	 var countdownDate = 60000;
	 var x = setInterval (function(){
	
	
		countdownDate = countdownDate - 10;
		document.getElementById("timer").innerHTML = countdownDate;
	 if (countdownDate < 0){
		 document.getElementById("timer").innerHTML = "You ran out of time";
	     document.getElementById("lightbox").style.display = "block";
		 document.getElementById("message").style.display = "You Lose please restart";
		 
		clearInterval(x);
		
  
	 }
		
	 }, 10);
 }
 
 
           
 
 
 
 
 
 
 
   
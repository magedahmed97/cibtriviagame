to change questions you should script.js and change them manualy 
take care to change num of question variables after finishing writing questions 

this lines in js file should be change to actual questions num - 1 

--> while (shuffledQuestions.length <= 22) //here we have 23 questions for our game

--> if (indexNumber <= 22) //here we have 23 questions for our game

--> function handleEndGame() // you can modify this function to change the score msgs and related grades to it 
				
				also you should change this line to actual number of questions 
				-->  const playerGrade = (playerScore / 23) * 100 // here put num of question without -1


use this funtction to disable right click and hold on touch screens if not included 

		--> // Disable both right-click and touch-and-hold context menus
			document.addEventListener('contextmenu', function (e) {
  			  e.preventDefault();
						});

		--> // Disable text selection on double click
		document.addEventListener('selectstart', function (e) {
 		   e.preventDefault();
					});

review comments on last project vodafone trivia and also use Chat Gpt to help you if you want to change something.


for HTML File These lines should be changed too 

--> <p>Attempts : 23</p> // change it to actual num of questions

-->     <div class="game-details-container">
                <h1>Score : <span id="player-score"></span> / 23</h1>
                <h1> Question : <span id="question-number"></span> / 23</h1>
            </div>
			 // change it to actual num of questions




	For CSS File you Just change the images withe the new branded one and change theirs name in css file
		 and begin to calibrate them and adjust their locations on page and size to fit 

const questions = [
    {
        question: " من فودافون؟ SMS امتى تم اطلاق خدمة ",
        optionA: "1999",
        optionB: "2001",
        optionC: "2002",
        optionD: "2003",
        correctOption: "optionA"
    },

    {
        question: "تفتكر إمتى تم تأسيس مؤسسة ڤودافون مصر لتنمية المجتمع؟",
        optionA: "2002",
        optionB: "2009",
        optionC: "2003",
        optionD: "2010",
        correctOption: "optionC"
    },

    {
        question: "كام عدد المحافظ علي ڤودافون كاش حاليا؟",
        optionA: "15 M",
        optionB: "20 M",
        optionC: "3 M",
        optionD: "18 M",
        correctOption: "optionD"
    },

    {
        question: "ماهو حجم استثمارات ڤودافون مصر في الشبكة لحد دلوقتي؟",
        optionA: "90 B",
        optionB: "20 B",
        optionC: "100 B",
        optionD: "50 B",
        correctOption: "optionA"
    },

    {
        question: "كام عدد المستفيدين من منصة تعليمي التي أطلقتها مؤسسة ڤودافون مصر لتنمية المجتمع ؟",
        optionA: "3 M",
        optionB: "2.5 M",
        optionC: "1 M",
        optionD: "1.5 M",
        correctOption: "optionB"
    },

    {
        question: "إمتى بدأت محفظة ڤودافون كاش في مصر؟",
        optionA: "2015",
        optionB: "2000",
        optionC: "2014",
        optionD: "2013",
        correctOption: "optionD"
    },

    {
        question: "كم عدد المستفيدين من تطوير مشروع التأمين الصحي الشامل عن طريق ڤودافون؟",
        optionA: "8 M",
        optionB: "9 M",
        optionC: "5 M",
        optionD: "2 M",
        correctOption: "optionC"
    },

    {
        question: "إمتى أصدرت ڤودافون أخر خبر صحفي؟",
        optionA: "شهر مارس",
        optionB: "شهر فبراير الماضي",
        optionC: "منتصف شهر فبرايرالماضي",
        optionD: "يناير الماضي",
        correctOption: "optionA"
    },

    {
        question: "تطبيق أنا ڤودافون أتعمل سنة كام؟",
        optionA: "2015",
        optionB: "2011",
        optionC: "2017",
        optionD: "2000",
        correctOption: "optionB"
    },

   {
        question: "كام مرة ڤودافون مصر أصدرت تقرير الاستدامة؟",
        optionA: "5",
        optionB: "7",
        optionC: "4",
        optionD: "1",
        correctOption: "optionA"
    },
	   {
        question: "إعلان ڤودافون مصر لرمضان 2024 بيتكلم عن إيه؟",
        optionA: "اللمة الحلوة",
        optionB: "الكلمة الحلوة",
        optionC: "الناس الحلوة",
        optionD: "شكرا من هنا لبكرة",
        correctOption: "optionB"
    },

    {
        question: "جمع حبايبك يلا نبقا قريبين ده' إعلان ڤودافون رمضان سنه كام؟'",
        optionA: "2020",
        optionB: "2018",
        optionC: "2019",
        optionD: "2000",
        correctOption: "optionC"
    },

    {
        question: "مين العائلة المشهورة اللي ظهرت في إعلان ڤودافون رمضان سنه 2023؟",
        optionA: "MO Salah",
        optionB: "Amr Diab",
        optionC: "Yasmine Abdel Aziz",
        optionD: "Mola",
        correctOption: "optionA"
    },

    {
        question: "مين بطلة إعلان ڤودافون رمضان 2021؟",
        optionA: "ياسمين عبد العزيز",
        optionB: "شيرين عبد الوهاب",
        optionC: "شيريهان",
        optionD: "مني زكي",
        correctOption: "optionC"
    },

    {
        question: "فاكر كان امتى ؟ Conference call فودافون كانت أول شركة تعمل ",
        optionA: "2006",
        optionB: "2001",
        optionC: "2000",
        optionD: "2019",
        correctOption: "optionB"
    },

    {
        question: "ڤودافون  كانت أول شركة تقدم خدمة “كلمني شكرا”، فاكر إمتى؟",
        optionA: "2008",
        optionB: "2005",
        optionC: "2004",
        optionD: "2000",
        correctOption: "optionC"
    }

   
]
let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 5 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 4) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "Green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "black"
            document.getElementById(correctOption).style.backgroundColor = "Green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer();
    unCheckRadioButtons();
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber < shuffledQuestions.length) {
            NextQuestion(indexNumber);
        } else {
            handleEndGame();
        }
        resetOptionBackground();
    }, 1000);
}


//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore == 5) {
        remark = "Congrats! You won a giveaway"
        remarkColor = "white"
    }
	
    else if (playerScore < 5 ) {
        remark = "Hard Luck You Can Try again"
        remarkColor = "white"
    }
	/*
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }*/
    const playerGrade = playerScore;

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
   /* document.getElementById('grade-percentage').innerHTML = playerGrade*/
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}
document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.querySelector('.next-button');
    const modalButton = document.querySelector('.modal-button');

    nextButton.addEventListener('click', function() {
        nextButton.classList.toggle('checked');
    });

    modalButton.addEventListener('click', function() {
        modalButton.classList.toggle('checked');
    });
});
//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

// Disable both right-click and touch-and-hold context menus
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable text selection on double click
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});

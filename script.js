const questions = [
    {
        question: "تفتكر بنك CIB اتاسس سنة كام؟",
        optionA: "1989",
        optionB: "1975",
        optionC: "1960",
        optionD: "1955",
        correctOption: "optionB"
    },

    {
        question: "CIB عنده كام فرع على مستوى مصر؟ ",
        optionA: "50+ ",
        optionB: "100+ ",
        optionC: "150+ ",
        optionD: "200+ ",
        correctOption: "optionD"
    },

    {
        question: "تعرف أول اسم لبنك CIB؟ ",
        optionA: "Chase National Bank ",
        optionB: "البنك الأهلي التجاري ",
        optionC: "بنك Chase الدولي ",
        optionD: "البنك التجاري Chase ",
        correctOption: "optionA"
    },

    {
        question: "تفتكر عدد الAtms CIB كام ؟",
        optionA: "أكتر من 1000 ",
        optionB: "أكتر من 1400 ",
        optionC: "أكتر من 1600 ",
        optionD: "أكتر من 1800 ",
        correctOption: "optionB"
    },

    {
        question: "تفتكر أعلى limit للتحويل الفوري من CIB Mobile Banking app بيكون قد إيه؟",
        optionA: "5 M",
        optionB: "10 M",
        optionC: "15 M",
        optionD: "20 M",
        correctOption: "optionD"
    },

    {
        question: "CIB  موجود فين بره مصر؟ ",
        optionA: "أمريكا ",
        optionB: "السعودية ",
        optionC: "تونس ",
        optionD: "كينيا  ",
        correctOption: "optionD"
    },

    {
        question: "رقم الـCall Center  بتاع CIB  أيه؟  ",
        optionA: "19666 ",
        optionB: "19555 ",
        optionC: "19444 ",
        optionD: "19333 ",
        correctOption: "optionA"
    },

    {
        question: "تقدر تفتح حساب myCIB لو عندك كام سنة؟  ",
        optionA: "12 ",
        optionB: "15 ",
        optionC: "18 ",
        optionD: "21 ",
        correctOption: "optionB"
    },

    {
        question: "تقدر تقدم على بطاقة ائتمانية أساسية لو عندك كام سنة؟ ",
        optionA: "16 ",
        optionB: "18 ",
        optionC: "20 ",
        optionD: "21 ",
        correctOption: "optionD"
    },

    {
        question: "إيه الـMinimum Balance علشان العميل يكون في قطاع Plus؟ ",
        optionA: "100,000 ",
        optionB: "200,000 ",
        optionC: "300,000 ",
        optionD: "500,000 ",
        correctOption: "optionC"
    },
    {
        question: "إيه الـMinimum Balance علشان العميل يكون في قطاع Wealth؟ ",
        optionA: "500,000 ",
        optionB: "1,000,000 ",
        optionC: "1,500,000 ",
        optionD: "2,000,000 ",
        correctOption: "optionC"
    },

    {
        question: "إيه الـMinimum Balance علشان العميل يكون في قطاع Private؟ ",
        optionA: "10,000,000 ",
        optionB: "12,000,000 ",
        optionC: "15,000,000 ",
        optionD: "20,000,000 ",
        correctOption: "optionD"
    },

    {
        question: "إيه الـCredit Card  اللي عملاء CIB Private بس يقدروا يطلعوه؟ ",
        optionA: "World Card ",
        optionB: "Platinum Card ",
        optionC: "Titanium Card ",
        optionD: "Metal Card ",
        correctOption: "optionD"
    },

    {
        question: "محتاج إيه علشان تفتح حساب myCIB؟ ",
        optionA: "البطاقة بس ",
        optionB: "البطاقة وإثبات دخل ",
        optionC: "البطاقة وجواز السفر ",
        optionD: "البطاقة وشهادة دراسية ",
        correctOption: "optionA"
    },

    {
        question: "بطاقة CIB World Elite بتدي كام BONUS Point على كل جنيه بتدفعه بيها جوه مصر؟ ",
        optionA: "1 BONUS Points ",
        optionB: "2 BONUS Points ",
        optionC: "3 BONUS Points ",
        optionD: "4 BONUS Points ",
        correctOption: "optionD"
    },

    {
        question: "إيه من الخدمات دي ممكن تنجزها من CIB Mobile Banking App؟ ",
        optionA: "تربط شهادات أو ودائع ",
        optionB: "تسدد مستحقات الـCredit Card ",
        optionC: "تقدم على قرض أو كريديت كارد ",
        optionD: "كله وخدمات تانية كتير 😉 ",
        correctOption: "optionD"
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

    else if (playerScore < 5) {
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
document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.querySelector('.next-button');
    const modalButton = document.querySelector('.modal-button');

    nextButton.addEventListener('click', function () {
        nextButton.classList.toggle('checked');
    });

    modalButton.addEventListener('click', function () {
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

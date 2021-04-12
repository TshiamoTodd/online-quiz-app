//Initialization
function _(x) {
	return document.getElementById(x);
}

//Variable declaration
const numOfQuestions = 6;
const parentQDiv = document.getElementById("questions_Page1");

//Create a memo object to keep track of the correct and incorrect answers from the user
const memoObj = {};
var pos = 0, q1, q2, q3, q4, q5, q6, question, choice, choices, chA, chB, chC, chD, correct = 0;

//Right Answers
var rightAnswers = [];
//Questions
var questions = [
    [
        "If a variable result is declaired as a reference variable in the function argument list, it is not necessary todeclair it as a local variable",
        "True",
        "False",
        "A"
    ],
    [
        "When a function is called without any referenced variables: ",
        "Changes made to the parameter inside the function have an effect onthe argument.",
        "Changes made to the parameter inside the function have no effect on the argument.",
        "Changes made to the parameter inside the function have on the related parameters.",
        "B"
    ],
    [
        "A void function returns a value.",
        "True",
        "False",
        "B"
    ],
    [
        "This function is valid | 'void maxNumber(int num1, int num2);'",
        "True",
        "False",
        "B"
    ],
    [
        "A function prototype is: ",
        "A variable declaration",
        "Variable initialization",
        "A function declaration",
        "B"
    ],
    [
        "What is wrong with this function call | 'void maxNumber(int num1, int num2);'",
        "Incorrect data type",
        "The keyword void is not required",
        "keyword void and parameter data types no required",
        "C"
    ],
];
console.log(questions[0].length);

//initilisation of page to load questions
function startProcess() {

     //Call function to load question to the page
     renderQuestion();

     //call function to load questions
     //loadQuestions();

     //disable button
     document.getElementById("startBtn").style.display = "none";
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function renderQuestion() {
    document.getElementById("questions_Page1").style.display = "block";
	test = _("test");
	if(pos >= questions.length) {
        test.style.display = "none";
        //test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
        _("test_status").style.display = "none";
        
        _("id01").style.display = "block";
        console.log(memoObj);
        //calculate percentage mark
        var percMark = correct / questions.length * 100;
        //Check if user has passed the test
        if(percMark >= 50) {
            //Display
            _("congratsBanner").innerHTML = "Congradulations";
            _("mark").innerHTML = parseInt(percMark)+"%";

            for(var h = 1; h <= 6; h++) {
                var pTag = document.createElement("p");
                pTag.innerHTML = ("Question"+h) + " " + memoObj["Question"+h];
                _("memo").appendChild(pTag);

                //Unhide score table
                _("scoreTable").style.display = "block";
                _("attempts").innerHTML = "Attempts";
                _("scores").innerHTML = "Scores";
                _("attempt1").innerHTML = "Attempt 1";
                _("score").innerHTML = parseInt(percMark);
            }
        } else {
            _("congratsBanner").innerHTML = "Unfortunately";
            _("mark").innerHTML = parseInt(percMark)+"%";

            for(var h = 1; h <= 6; h++) {
                var pTag = document.createElement("p");
                pTag.innerHTML = ("Question"+h) + " " + memoObj["Question"+h];
                _("memo").appendChild(pTag);
            }
        }
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	if (questions[pos].length == 4) {
        question = questions[pos][0];
        chA = questions[pos][1];
        chB = questions[pos][2];
        chD = questions[pos][3];
        test.innerHTML = "<h4>" + question + "</h4>"; //Displaying the question onto the test sheet
        test.innerHTML += "<input type='radio' name='choices' value='A'>"+chA+"<br>";
        test.innerHTML += "<input type='radio' name='choices' value='B'>"+chB+"<br><br/>";
        test.innerHTML += "<button class='btn btn-primary' onclick='checkAnswer()'>Submit Answer</button>";
    }

    if (questions[pos].length == 5) {
        question = questions[pos][0];
        chA = questions[pos][1];
        chB = questions[pos][2];
        chC = questions[pos][3];
        chD = questions[pos][4];
        test.innerHTML = "<h4>" + question + "</h4>"; //Displaying the question onto the test sheet
        test.innerHTML += "<input type='radio' name='choices' value='A'>"+chA+"<br>";
        test.innerHTML += "<input type='radio' name='choices' value='B'>"+chB+"<br>";
        test.innerHTML += "<input type='radio' name='choices' value='C'>"+chC+"<br><br>";
        test.innerHTML += "<button class='btn btn-primary' onclick='checkAnswer()'>Submit Answer</button>";
    }
}

function checkAnswer() {
    console.log("Checking answer..");
	choices = document.getElementsByName('choices');
	for(var i=0; i<choices.length; i++){
	    if(choices[i].checked){
	        choice = choices[i].value;
	    }
	}
	if(questions[pos].length == 4) {
        if(choice == questions[pos][3]) {
            memoObj["Question"+(pos+1)] = "Correct";
            correct++;
            console.log("Question"+ 1 +": They are equal");
        } else if(choice != questions[pos][3]) {
            memoObj["Question"+(pos+1)] = "Incorrect";
        }
    } else if(questions[pos].length == 5) {
        if(choice == questions[pos][4]) {
            memoObj["Question"+(pos+1)] = "Correct";
            correct++;
            console.log("Question"+ 2 +": They are equal");
        } else if(choice != questions[pos][4]) {
            memoObj["Question"+(pos+1)] = "Incorrect";
        }
    }	
	pos++;
	renderQuestion();
}

//Function to load questions onto the page
// function loadQuestions() {

//     var rowStorage = new Array();
//     var parentDivChidList =  parentQDiv.childNodes;

//     console.log(parentDivChidList);

//     for(var m = 0; m <= questions.length - 1; m++) {
//         var tests = _("test"+m);
//         console.log(tests.childNodes.length);

//         //check the number of child nodes in the test div
//         if(tests.childNodes.length == 3) {
//             // reference the testDiv element for a specific question
//             test = _("test"+m).childNodes;

//             //Assign values from questions array to variables to display
//             question = questions[m][0];
//             chA = questions[m][1];
//             chB = questions[m][2];
//             chC = questions[m][3];

//             console.log(test);

//             //Display the question
//             test[0].innerHTML = "<h4>" + question + "</h4>";
//             test[1].innerHTML = "<input type='radio' name='choices' value='A'> " + chA + "<br/>";
//             test[2].innerHTML = "<input type='radio' name='choices' value='B'> " + chB + "<br/><br/>";

//         }
        
//         if(tests.childNodes.length == 4) {
//             // reference the testDiv element for a specific question
//             test = _("test"+m).childNodes;

//             //Assign values from questions array to variables to display
//             question = questions[m][0];
//             chA = questions[m][1];
//             chB = questions[m][2];
//             chC = questions[m][3]
//             chD = questions[m][4];

//             console.log(test);

//             //Display the question
//             test[0].innerHTML = "<h4>" + question + "</h4>";
//             test[1].innerHTML = "<input type='radio' name='choices' value='A'> " + chA + "<br/>";
//             test[2].innerHTML = "<input type='radio' name='choices' value='B'> " + chB + "<br/>";
//             test[3].innerHTML = "<input type='radio' name='choices' value='C'> " + chC + "<br/><br/>";

//             //create a btnto append to the test div
//             // var submitBtn = document.createElement("button");
//             // submitBtn.className = "btn btn-primary";
//             // submitBtn.onclick = 'checkAnswer()';
//             // submitBtn.innerHTML = "Submit Answer",
            
//             // tests.appendChild(submitBtn);
//         }
        
//     }
            
            
//             // console.log(testChildElementsArray);


// }

// function createQuestionContainers() {
//         var divRowForBtn = document.createElement("div");
//         divRowForBtn.className = "row";

//         var divColForBtn = document.createElement("div");
//         divColForBtn.className = "col-md-12";
//         divColForBtn.style.padding = "20px";

//         var pForBtn = document.createElement("p");
//         pForBtn.innerHTML = "<button style='float: right;' class='btn btn-primary' onclick='checkAnswer()'>Submit Answers</button></br>";

//         divColForBtn.appendChild(pForBtn);
//         divRowForBtn.appendChild(divColForBtn);

        

//         //Create a for loop to create number elements needed to be created
//         for(var k = 0; k <= questions.length - 1; k++) {
//             //Create required elements to append data
//             //create div with class (row)
//             var divRow = document.createElement("div");
//             divRow.className = "row";
//             divRow.id = "question_holder"+k;

//             //create div with class (col-md-12)
//             var divCol = document.createElement("div");
//             divCol.className = "col-md-12";
//             divCol.id = "column_"+k;
//             //append it to row div element
//             divRow.appendChild(divCol);

//             //create test div element
//             var divTest = document.createElement("div");
//             divTest.className = "test"
//             divTest.id = "test"+k;

//             //Create questoin number h3 banner
//             var questionNumBanner = document.createElement("h3");
//             questionNumBanner.innerHTML = "Question "+(k+1) + "<hr/>";
//             //Append it to the column div element
//             divCol.appendChild(questionNumBanner);


//             //Append it do the div column
//             divCol.appendChild(divTest);

//             console.log(questions[k].length);


//             //check length of array and create elements according to the length of the array
//             if(questions[k].length == 4) {
//                 //Create required elements
//                 var h4 = document.createElement("h4");
//                 var p1 = document.createElement("p");
//                 var p2 = document.createElement("p");

//                 //Append elements to the parent test div
//                 divTest.appendChild(h4);
//                 divTest.appendChild(p1);
//                 divTest.appendChild(p2);
//             } 
            
//             if (questions[k].length == 5) {
//                 //Create required elements
//                 var h4 = document.createElement("h4");
//                 var p1 = document.createElement("p");
//                 var p2 = document.createElement("p");
//                 var p3 = document.createElement("p");

//                 //Append elements to the parent test div
//                 divTest.appendChild(h4);
//                 divTest.appendChild(p1);
//                 divTest.appendChild(p2);
//                 divTest.appendChild(p3);
//             }

//             //append to parent div element
//             parentQDiv.appendChild(divRow);

//         }

//         parentQDiv.appendChild(divRowForBtn);

//         console.log(questions[0].length);



        
    
// }

// function checkAnswer() {
//     console.log("Checking answer...");
//     var choices = document.getElementsByName("choices");
    
//     for(var g = 0; g < questions.length; g++) {
//         testing = _("test"+g);
//         console.log(testing.childNodes[1].childNodes[0].value);
//         if(testing.childNodes[1].childNodes[0].checked == true){
//             console.log("It is checked");
//         }
//     }
//}


// for(var i = 1; i <= numOfQuestions; i++) {
    //     if(pos == 0) {
    //         //reference the testDiv element for a specific question
    //         test = _("test"+2);

    //         //Assign values from questions array to variables to display
    //         question = questions[pos][0];
    //         chA = questions[pos][1];
    //         chB = questions[pos][2];
    //         chD = questions[pos][3];

    //         //Display the question
    //         test.innerHTML = "<h3>" + question + "</h3>";
    //         test.innerHTML = "<input type='radio' name='choices' value='A'>" + chA + "<br/>";
    //         test.innerHTML = "<input type='radio' name='choices' value='B'>" + chB + "<br/><br/>";
    //         test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
    //         pos++;
    //     } else if(pos == 1) {
    //         //reference the testDiv element for a specific question
    //         test = _("test"+i);

    //         //Assign values from questions array to variables to display
    //         question = questions[pos][0];
    //         chA = questions[pos][1];
    //         chB = questions[pos][2];
    //         chC = questions[pos][3];
    //         chD = questions[pos][4];

    //         //Display the question
    //         test.innerHTML = "<h3>" + question + "</h3>";
    //         test.innerHTML = "<input type='radio' name='choices' value='A'>" + chA + "<br/>";
    //         test.innerHTML = "<input type='radio' name='choices' value='A'>" + chB + "<br/>";
    //         test.innerHTML = "<input type='radio' name='choices' value='B'>" + chC + "<br/><br/>";
    //         test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
    //         pos++;
    //     } else if(pos == 2) {
    //         //reference the testDiv element for a specific question
    //         test = _("test"+i);

    //         //Assign values from questions array to variables to display
    //         question = questions[pos][0];
    //         chA = questions[pos][1];
    //         chB = questions[pos][2];
    //         chD = questions[pos][3];

    //         //Display the question
    //         test.innerHTML = "<h3>" + question + "</h3>";
    //         test.innerHTML = "<input type='radio' name='choices' value='A'>" + chA + "<br/>";
    //         test.innerHTML = "<input type='radio' name='choices' value='B'>" + chB + "<br/><br/>";
    //         test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
    //         pos++;
    //     } else if(pos == 3) {
    //         //reference the testDiv element for a specific question
    //         test = _("test"+i);

    //         //Assign values from questions array to variables to display
    //         question = questions[pos][0];
    //         chA = questions[pos][1];
    //         chB = questions[pos][2];
    //         chD = questions[pos][3];

    //         //Display the question
    //         test.innerHTML = "<h3>" + question + "</h3>";
    //         test.innerHTML = "<input type='radio' name='choices' value='A'>" + chA + "<br/>";
    //         test.innerHTML = "<input type='radio' name='choices' value='B'>" + chB + "<br/><br/>";
    //         test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
    //         pos++;
    //     } else if(pos == 4) {
    //         //reference the testDiv element for a specific question
    //         test = _("test"+i);

    //         //Assign values from questions array to variables to display
    //         question = questions[pos][0];
    //         chA = questions[pos][1];
    //         chB = questions[pos][2];
    //         chC = questions[pos][3];
    //         chD = questions[pos][4];

    //         //Display the question
    //         test.innerHTML = "<h3>" + question + "</h3>";
    //         test.innerHTML = "<input type='radio' name='choices' value='A'>" + chA + "<br/>";
    //         test.innerHTML = "<input type='radio' name='choices' value='A'>" + chB + "<br/>";
    //         test.innerHTML = "<input type='radio' name='choices' value='B'>" + chC + "<br/><br/>";
    //         test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
    //         pos++;
    //     } else if(pos == 5) {
    //         //reference the testDiv element for a specific question
    //         test = _("test"+i);

    //         //Assign values from questions array to variables to display
    //         question = questions[pos][0];
    //         chA = questions[pos][1];
    //         chB = questions[pos][2];
    //         chC = questions[pos][3];
    //         chD = questions[pos][4];

    //         //Display the question
    //         test.innerHTML = "<h3>" + question + "</h3>";
    //         test.innerHTML = "<input type='radio' name='choices' value='A'>" + chA + "<br/>";
    //         test.innerHTML = "<input type='radio' name='choices' value='A'>" + chB + "<br/>";
    //         test.innerHTML = "<input type='radio' name='choices' value='B'>" + chC + "<br/><br/>";
    //         test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
    //         pos++;
    //     }
    // }
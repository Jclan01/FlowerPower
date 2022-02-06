window.onload = function() {
    var name = prompt("What is your adventurer name?");
    var title = document.getElementById("title");
    title.innerHTML = name + " The Adventurer";
    womantime();
}
var scoreVal = 0;
var adventurer = document.getElementById("adventurer");
//type of problem: 0 is basic addition, 1 is basic multiplication, 2 is derivatives, 3 is integrals
function womantime() {
    var optionArr = new Array(5);
    var type = 0;
    var valA = 0;
    var valB = 0;
    var question;
    type = Math.floor(Math.random() * 2);
    if (type == 0) {
        valA = -100 + Math.floor(Math.random() * 201);
        valB = -100 + Math.floor(Math.random() * 201);
        question = valA + " + " + valB;
        indexCorr = Math.floor(Math.random() * 5);
        optionArr[indexCorr] = valA + valB;
        for (let i = 0; i < optionArr.length; i++) {
            if (i != indexCorr) {
                optionArr[i] = optionArr[indexCorr] + -100 + Math.floor(Math.random() * 101);
            }
        }
    } else if (type == 1) {
        valA = -10 + Math.floor(Math.random() * 21);
        valB = -10 + Math.floor(Math.random() * 21);
        question = valA + " * " + valB;
        indexCorr = Math.floor(Math.random() * 5);
        optionArr[indexCorr] = valA * valB;
        for (let i = 0; i < optionArr.length; i++) {
            if (i != indexCorr) {
                optionArr[i] = optionArr[indexCorr] + -100 + Math.floor(Math.random() * 101);
            }
        }
    } else if (type == 2) {
        valA = 1 + Math.floor(Math.random() * 10);
        valB = 1 + Math.floor(Math.random() * 20);
        question = "Derivative of 1/" + valB + "*x^" + valA;
    } else {
        valA = 1 + Math.floor(Math.random() * 10);
        valB = 1 + Math.floor(Math.random() * 20);
        question = "Integral of 1/" + valB + "*x^" + valA;
    }

    var questionDisp = document.getElementById("question");
    questionDisp.innerHTML = question;
    var option1 = document.getElementById("option1");
    option1.innerHTML = optionArr[0];
    var option2 = document.getElementById("option2");
    option2.innerHTML = optionArr[1];
    var option3 = document.getElementById("option3");
    option3.innerHTML = optionArr[2];
    var option4 = document.getElementById("option4");
    option4.innerHTML = optionArr[3];
    var option5 = document.getElementById("option5");
    option5.innerHTML = optionArr[4];
    var score = document.getElementById("score");
    score.innerHTML = scoreVal;
}

function womantime1() {
    if (indexCorr == 0) {
        scoreVal++;
    }
    womantime();
}

function womantime2() {
    if (indexCorr == 1) {
        scoreVal++;
    }
    womantime();
}

function womantime3() {
    if (indexCorr == 2) {
        scoreVal++;
    }
    womantime();
}

function womantime4() {
    if (indexCorr == 3) {
        scoreVal++;
    }
    womantime();
}

function womantime5() {
    if (indexCorr == 4) {
        scoreVal++;
    }
    womantime();
}
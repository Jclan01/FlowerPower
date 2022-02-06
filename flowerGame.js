var count = 0;
var max_Time = 10;

function reseter() {
    count++;
    var countDisp = document.getElementById("count");
    countDisp.innerHTML = count;
    if (count >= max_Time) {
        flowertime();
        sad();
        score.innerHTML = "Game Over!"
        document.location.reload();
    }
}


window.onload = function() {
    var name = prompt("What is your adventurer name?");
    var title = document.getElementById("title");
    title.innerHTML = name + " the Adventurer";
    flowertime();
    var inter = setInterval(reseter, 1000);
}

var scoreVal = 0;
var adventurer = document.getElementById("adventurer");
var indexCorr = 0;
var a = Math.floor(Math.random() * 10) + 1;
var n = Math.floor(Math.random() * 10) + 1;
var backImg = ["segBack/row-1-column-1.jpg", "segBack/row-2-column-1.jpg", "segBack/row-3-column-1.jpg", "segBack/row-4-column-1.jpg", "segBack/row-5-column-1.jpg", "segBack/row-6-column-1.jpg", "segBack/row-7-column-1.jpg", "segBack/row-8-column-1.jpg", "segBack/row-9-column-1.jpg", "segBack/row-10-column-1.jpg", "segBack/row-11-column-1.jpg", "segBack/row-12-column-1.jpg", "segBack/row-13-column-1.jpg", "segBack/row-14-column-1.jpg", "segBack/row-15-column-1.jpg", "segBack/row-16-column-1.jpg", "segBack/row-17-column-1.jpg", "segBack/row-18-column-1.jpg", "segBack/row-19-column-1.jpg", "segBack/row-20-column-1.jpg", "segBack/row-21-column-1.jpg", "segBack/row-22-column-1.jpg", "segBack/row-23-column-1.jpg", "segBack/row-24-column-1.jpg", "segBack/row-25-column-1.jpg", "segBack/row-26-column-1.jpg", "segBack/row-27-column-1.jpg", "segBack/row-28-column-1.jpg", "segBack/row-29-column-1.jpg", "segBack/row-30-column-1.jpg", "segBack/row-31-column-1.jpg", "segBack/row-32-column-1.jpg", "segBack/row-33-column-1.jpg", "segBack/row-34-column-1.jpg", "segBack/row-35-column-1.jpg", "segBack/row-36-column-1.jpg", "segBack/row-37-column-1.jpg", "segBack/row-38-column-1.jpg", "segBack/row-39-column-1.jpg", "segBack/row-40-column-1.jpg", "segBack/row-41-column-1.jpg", "segBack/row-42-column-1.jpg", "segBack/row-43-column-1.jpg", "segBack/row-44-column-1.jpg", "segBack/row-45-column-1.jpg", "segBack/row-46-column-1.jpg", "segBack/row-47-column-1.jpg", "segBack/row-48-column-1.jpg", "segBack/row-49-column-1.jpg", "segBack/row-50-column-1.jpg"]




//type of problem: 0 is basic addition, 1 is basic multiplication, 2 is derivatives, 3 is integrals
function flowertime() {
    var derivativeVals = [
        [a + "x", a, 1, 2 * a],
        [a, 0, 1, a],
        [a + "x^" + n, (n * a) + 'x^' + (n - 1), n + 'x^' + (n + 1), a + 'x^' + (n - 1)],
        [a + 'sin(' + n + 'x)', (a * n) + 'cos(' + n + 'x)', (n) + 'cos(' + n + 'x)', (a * n) + 'sin(' + n + 'x)'],
        [a + 'cos(' + n + 'x)', (-1 * a * n) + 'sin(' + n + 'x)', (a * n) + 'sin(' + n + 'x)', (-1 * a * n) + 'cos(' + n + 'x)'],
        [a + 'tan(' + n + 'x)', (a * n) + 'sec^2(' + n + 'x)', (a * n) + 'tan^2(' + n + 'x)', (a * 2 * n) + 'sec^2(' + n + 'x)'],
        [a + 'sec(' + n + 'x)', (a * n) + 'sec(' + n + 'x)tan(' + n + 'x)', (a * n) + 'sec(x)tan(x)', 'sec(' + n + 'x)tan(' + n + 'x)'],
        [a + 'csc(' + n + 'x)', (-1 * a * n) + 'csc(' + n + 'x)cot(' + n + 'x)', (a * n) + 'csc(' + n + 'x)cot(' + n + 'x)', (-1 * a * n) + 'sec(' + n + 'x)cot(' + n + 'x)'],
        [a + 'cot(' + n + 'x)', (-1 * a * n) + 'csc^2(' + n + 'x)', (-1 * a * n) + 'sec^2(' + n + 'x)', (a * n) + 'csc^2(' + n + 'x)'],
        [n + '^(' + a + 'x)', a + ' * ' + n + '^(' + a + 'x) * ln(' + n + ')', (a * n) + '^(' + a + 'x) * ln(' + n + ')', n + ' * ' + a + '^(' + n + 'x) * ln(' + a + ')'],
        ['e^(' + a + 'x)', a + 'e^(' + a + 'x)', 'e^(' + a + 'x)', a + 'e^(x)'],
        ['log_' + n + '(' + a + 'x)', a + '/(xln' + n + ')', (2 * a) + '/(xln' + n + ')', n + '/(xln' + a + ')'],

    ];

    var optionArr = new Array(5);
    var type = 0;
    var valA = 0;
    var valB = 0;
    var question;
    var randDerivArr = 0;
    var randOne = 0;
    var randTwo = 0;
    type = Math.floor(Math.random() * 3);
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
        a = Math.floor(Math.random() * 10) + 1;
        n = Math.floor(Math.random() * 10) + 1;
        randDerivArr = Math.floor(Math.random() * 12);
        question = "Derivative of " + derivativeVals[randDerivArr][0];
        indexCorr = 1 + Math.floor(Math.random() * 4);
        optionArr[indexCorr] = derivativeVals[randDerivArr][1];
        randOne = 0;
        randTwo = indexCorr - 1;
        optionArr[randOne] = derivativeVals[randDerivArr][2];
        optionArr[randTwo] = derivativeVals[randDerivArr][3];
        for (let i = 0; i < optionArr.length; i++) {
            if (i != indexCorr && i != randOne && i != randTwo) {
                var randNum = Math.floor(Math.random() * 12);
                optionArr[i] = derivativeVals[randNum][2];
            }
        }

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

function happy() {
    var image = document.getElementById("adventurer");
    image.src = "happy.png";


}

function normal() {
    var image = document.getElementById("adventurer");
    image.src = "violetBuddy-clean.png";
}

function sad() {
    var image = document.getElementById("adventurer");
    image.src = "oops.png";
}


function flowertime1() {
    if (indexCorr == 0) {
        scoreVal++;
        happy();
    } else {
        sad();
    }
    flowertime();
    count = 0;
    clearInterval(inter);
    inter;
}

function flowertime2() {
    if (indexCorr == 1) {
        scoreVal++;
        happy();
    } else {
        sad();
    }
    flowertime();
    count = 0;
    clearInterval(inter);
    inter;
}

function flowertime3() {
    if (indexCorr == 2) {
        scoreVal++;
        happy();
    } else {
        sad();
    }
    flowertime();
    count = 0;
    clearInterval(inter);
    inter;
}

function flowertime4() {
    if (indexCorr == 3) {
        scoreVal++;
        happy();
    } else {
        sad();
    }
    flowertime();
    count = 0;
    clearInterval(inter);
    inter;
}

function flowertime5() {
    if (indexCorr == 4) {
        scoreVal++;
        happy();
    } else {
        sad();
    }
    flowertime();
    count = 0;
    clearInterval(inter);
    inter;
}
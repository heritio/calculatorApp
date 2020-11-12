let output = document.querySelector(".output");
let operand1Disp = document.querySelector(".operand1");
let operand2Disp = document.querySelector(".operand2");
let operatorDisp = document.querySelector(".operator");
let clearBtn = document.querySelector(".ac");
let numBtns = document.querySelector(".num");
let controls = document.getElementById("controlls");


let ourDisplayArr = [0,0];

clearBtn.addEventListener("click", () => {
    operand1Disp.textContent = ""
    operand2Disp.textContent = "";
    operatorDisp.textContent = "";
    output.textContent = "";
})

controls.addEventListener("click", (e) => {
    const isButton = e.target.classList.contains("num");
    if(!isButton){
        return;
    }
    ourDisplayArr[0] += e.target.id;
    operand1Disp.textContent = ourDisplayArr;


})

function add(a,b){
   return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator,a,b){
    return operator(a,b);
}

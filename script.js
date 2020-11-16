let output = document.querySelector(".output");
let operand1Disp = document.querySelector(".operand1");
let operatorDisp = document.querySelector(".operator");
let clearBtn = document.querySelector(".ac");
let numBtns = document.querySelector(".num");
let controls = document.getElementById("controlls");
let operatorsList = document.querySelectorAll(".operator");
let equals = document.querySelector(".equal");
let ourCalcArr = [];
let ourVal = 0;


clearBtn.addEventListener("click", (e) => {
    operand1Disp.textContent = "";
    operatorDisp.textContent = "";
    output.textContent = "";
    ourVal = 0;
   
})

controls.addEventListener("click", (e) => {
    const isButton = e.target.classList.contains("num");
    if(!isButton){
        return;
    }
    ourVal += e.target.id;
    operand1Disp.textContent = ourVal;
})

operatorsList.forEach((btn) => {
    btn.addEventListener("click", (e)=> {
      operatorDisp.textContent = e.target.textContent;
      if(operatorDisp.textContent != "" && operand1Disp.textContent != ""){
          if(operatorDisp.textContent == "+"){
            ourCalcArr[0] = +operand1Disp.textContent;
            ourVal = 0;
            operand1Disp.textContent = ourVal;
          }else if(operatorDisp.textContent == "-"){
            ourCalcArr[0] = +operand1Disp.textContent;
            ourVal = 0;
            operand1Disp.textContent = ourVal;
          }else if(operatorDisp.textContent == "*"){
            ourCalcArr[0] = +operand1Disp.textContent;
            ourVal = 0;
            operand1Disp.textContent = ourVal;
          }else if(operatorDisp.textContent == "/"){
            ourCalcArr[0] = +operand1Disp.textContent;
            ourVal = 0;
            operand1Disp.textContent = ourVal;
          }
          
      }
    })
})

equals.addEventListener("click", (e) =>{
    ourCalcArr[1] = +operand1Disp.textContent;
    
    if(operatorDisp.textContent == "+"){
        operator = add;
    }else if(operatorDisp.textContent == "-"){
        operator = subtract;
    }else if(operatorDisp.textContent == "/"){
        operator = divide;
    }else if(operatorDisp.textContent == "*"){
        operator = multiply;
    }
     
    var calcultion = operate(operator,+ourCalcArr[0],+ourCalcArr[1]);

    output.textContent = calcultion;
    operand1Disp.textContent = calcultion;
    ourVal += calcultion;
    
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
    if(b == 0){
        output.textContent = "ERROR";
        return;
    }
    return a / b;
}

function operate(operator,a,b){
    return operator(a,b);
}

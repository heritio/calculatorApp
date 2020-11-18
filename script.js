let output = document.querySelector(".output");
let operandDisp = document.querySelector(".operand1");
let operatorDisp = document.querySelector(".operatordisp");
let clearBtn = document.querySelector(".ac");
let numBtns = document.querySelector(".num");
let controls = document.getElementById("controlls");
let operatorsList = document.querySelectorAll(".operator");
let equals = document.querySelector(".equal");
let ourArr = [];
let ourVal = 0;
let ourOperator = "";
operandDisp.textContent = ourVal;
operatorDisp.textContent = ourOperator;

clearBtn.addEventListener("click", (e) => {
    ourOperator = "";    
    ourVal = 0;
    operandDisp.textContent = ourVal;
    operatorDisp.textContent = ourOperator;
    output.textContent = "";
    ourArr = [];
   
})

controls.addEventListener("click", (e) => {
    const isButton = e.target.classList.contains("num");
    if(!isButton){
        return;
    }
    ourVal += e.target.id;
    operandDisp.textContent = ourVal;
})

operatorsList.forEach((btn) => {
    btn.addEventListener("click", (e)=> {
    
       if(operatorDisp.textContent == ""){
           ourArr.push(+operandDisp.textContent);
           ourVal = 0;
           operatorDisp.textContent = e.target.textContent;
       }else{
            if(operatorDisp.textContent == "+"){
                operator = add;
            }else if(operatorDisp.textContent == "-"){
                operator = subtract;
            }else if(operatorDisp.textContent == "/"){
                operator = divide;
            }else if(operatorDisp.textContent == "*"){
                operator = multiply;
            }

            ourVal = operate(operator, +operandDisp.textContent, +ourArr[ourArr.length - 1]);
            ourArr.push(+ourVal);
            ourVal = 0;
            operandDisp.textContent = ourArr[ourArr.length - 1];
            operatorDisp.textContent = e.target.textContent;
       }
    })
})

equals.addEventListener("click", (e) =>{

    
    if(operatorDisp.textContent == "+"){
        operator = add;
    }else if(operatorDisp.textContent == "-"){
        operator = subtract;
    }else if(operatorDisp.textContent == "/"){
        operator = divide;
    }else if(operatorDisp.textContent == "*"){
        operator = multiply;
    }

    ourVal = operate(operator, +operandDisp.textContent, ourArr[ourArr.length - 1]);
    ourArr.push(ourVal);
    operandDisp.textContent = ourArr[ourArr.length -1];
    operatorDisp.textContent = "";
     
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

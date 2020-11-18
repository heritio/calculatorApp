let output = document.querySelector(".output");
let operandDisp = document.querySelector(".operand1");
let operatorDisp = document.querySelector(".operatordisp");
let clearBtn = document.querySelector(".ac");
let numBtns = document.querySelectorAll(".num");
let controls = document.getElementById("controlls");
let operatorsList = document.querySelectorAll(".operator");
let equals = document.querySelector(".equal");
let sign = document.querySelector(".sign");
let percent = document.querySelector(".percent");
let decimal = document.querySelector(".decimal");
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

percent.addEventListener("click", (e) => {
    ourVal = operandDisp.textContent;
    ourVal = (+ourVal / 1000);
    operandDisp.textContent = ourVal;
})

sign.addEventListener("click", (e) => {
    ourVal = operandDisp.textContent;

    if(ourVal < 0){
       ourVal = Math.abs(+ourVal);
    }else if(ourVal > 0){
        ourVal = -Math.abs(+ourVal);
    }

    operandDisp.textContent = ourVal;   
})



decimal.addEventListener("click",(e) => {
    ourVal = operandDisp.textContent;
    if(ourVal.includes(".")){
        return;
    }
    ourVal += e.target.textContent;
    operandDisp.textContent = ourVal;
})


numBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
    ourVal += e.target.id;
    operandDisp.textContent = ourVal;
    })
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

    ourVal = operate(operator,+ourArr[ourArr.length - 1], +operandDisp.textContent );
    ourArr.push(+ourVal);
    operandDisp.textContent = ourArr[ourArr.length -1];
    operatorDisp.textContent = "";
     
})


function add(a,b){
    
    return parseFloat(a) + parseFloat(b);
   
}

function subtract(a,b){
  return parseFloat(a) - parseFloat(b);
}

function multiply(a,b){
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b){
    return parseFloat(a) / parseFloat(b);
}

function operate(operator,a,b){
    return operator(a,b);
}

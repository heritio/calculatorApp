let controls = document.querySelector("#controlls");
let operators = document.querySelectorAll(".operator");
let sign = document.querySelector(".sign");
let percent = document.querySelector(".percent");
let decimal = document.querySelector(".decimal");
let equal = document.querySelector(".equal");
let ac = document.querySelector(".ac");
let dispIn = document.querySelector(".operand1");
let operatorDisp = document.querySelector(".operatordisp");
let dispOut = document.querySelector(".output");
let arr = [];
let val = "";
let result = document.querySelector(".result");

decimal.addEventListener("click", (e)=> {
    let str = dispIn.textContent;
    if(str.includes(".")){
        return;
    }else{
        val = dispIn.textContent
        val += e.target.textContent;
        dispIn.textContent = val;
    }
})

sign.addEventListener("click", () => {
    let val = +dispIn.textContent;

    if(val < 0){
       val = Math.abs(val);
    }else if(val > 0){
        val = -Math.abs(val);
    }

    dispIn.textContent = val;   
})

percent.addEventListener("click",() => {
    dispIn.textContent = +dispIn.textContent / 100;
})

ac.addEventListener("click", () => {
    dispIn.textContent = "";
    dispOut.textContent = "";
    operatorDisp.textContent = "";
    val = "";
    arr = [];
})

controls.addEventListener("click", (e) => {
    let isButton = e.target.classList.contains("num");
    if(!isButton){
        return;
    }
    val += e.target.textContent;
    dispIn.textContent = val;
})

operators.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(operatorDisp.textContent == "/"){
            operator = divide;
        }else if(operatorDisp.textContent == "*"){
            operator = multiply;
        }else if(operatorDisp.textContent == "-"){
            operator = subtract
        }else if(operatorDisp.textContent == "+"){
            operator = add;
        }

      if(arr.length <= 0 && operatorDisp.textContent == ""){
          arr.push(+dispIn.textContent);
          val = "";
          dispIn.textContent = val;
          operatorDisp.textContent = e.target.textContent;
      }else if(arr.length == 1){
          let calc = operate(operator, arr[0], +dispIn.textContent);
          arr.push(calc);
          dispOut.textContent = arr[arr.length - 1];
          val = "";
          dispIn.textContent = val;
          operatorDisp.textContent = e.target.textContent;
      }else{
        let calc = operate(operator, arr[arr.length - 1], +dispIn.textContent);
        arr.push(calc);
        dispOut.textContent = arr[arr.length - 1];
        val = "";
        dispIn.textContent = val;
        operatorDisp.textContent = e.target.textContent;
      }
    })
} )

equal.addEventListener("click", () =>{
    if(operatorDisp.textContent == "/"){
        operator = divide;
    }else if(operatorDisp.textContent == "*"){
        operator = multiply;
    }else if(operatorDisp.textContent == "-"){
        operator = subtract
    }else if(operatorDisp.textContent == "+"){
        operator = add;
    }

   if(arr.length <= 0){
       dispOut.textContent = dispIn.textContent;
   }else{
       let calc = operate(operator, arr[arr.length - 1], +dispIn.textContent);
       arr.push(calc);
       dispOut.textContent = arr[arr.length - 1];
       val = "";
       dispIn.textContent = val;
       operatorDisp.textContent = "";
   }

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
function divide(a,b){
    return a / b;
}

function operate(operator,a,b){
    return operator(a, b);
}

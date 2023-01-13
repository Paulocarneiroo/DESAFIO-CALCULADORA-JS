const inputNumber1 = document
                    .getElementById("number1"); 
const inputNumber2 = document
                    .getElementById("number2");
const btnPlus = document
                    .getElementById("btn-plus");
const btnTimes = document
                    .getElementById("btn-times");
const btnClear = document
                    .getElementById("btn-clear");
const result = document
                    .getElementById("result-box");


inputNumber1.addEventListener('keypress', handleKeyPress);
inputNumber2.addEventListener('keypress', handleKeyPress);


btnPlus.addEventListener('click', handleEmptyInput);
btnTimes.addEventListener('click', handleEmptyInput);

btnPlus.addEventListener('click', handleBtnPlusClick);
btnTimes.addEventListener('click', handleBtnTimesClick);
btnClear.addEventListener('click', handleBtnClearClick);




//Functions
function handleBtnPlusClick(){
    const plus = Number(inputNumber1.value) + Number(inputNumber2.value);
    result.innerHTML = plus;
    const resultPlus = result.innerHTML;

    if(isNaN(resultPlus)){
        resultPlus.innerHTML = 0;
    }
}

function handleBtnTimesClick(){
    const times = Number(inputNumber1.value) * Number(inputNumber2.value);
    result.innerHTML = times;
    const resultTimes = result.innerHTML;

    if(isNaN(resultTimes)){
        resultTimes.innerHTML = 0;
    }
}

function handleBtnClearClick(event){
    event.preventDefault();
    inputNumber1.value = ' ';
    inputNumber2.value = ' ';
    result.innerHTML = 0;
    inputNumber1.classList.remove('input-error')
    inputNumber2.classList.remove('input-error')
}

function handleKeyPress(event) {
    let theEvent = event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regex = /^-?\d*\.?\d*$/;
    if(!regex.test(key)){
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

function handleEmptyInput(){
    if(inputNumber1.value == ' ' && inputNumber2.value == ' '){
        inputNumber1.classList.add('input-error');
        inputNumber2.classList.add('input-error');
        result.innerHTML = 0;
    }
    else if(inputNumber1.value == ' '){
        inputNumber1.classList.add('input-error');
        inputNumber2.classList.remove('input-error');
        result.innerHTML = 0;
    }
    else if(inputNumber2.value == ' '){
        inputNumber2.classList.add('input-error');
        inputNumber1.classList.remove('input-error');
        result.innerHTML = 0;
    }
}
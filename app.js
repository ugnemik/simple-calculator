const display1El = document.querySelector('.display1');
const display2El = document.querySelector('.display2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');

let dis1Num = '',
    dis2Num = '',
    result = null,
    lastOperation = '',
    haveDot = false;

numbersEl.forEach(number => {
  number.addEventListener('click', (e)=> {
    if (e.target.innerText === '.' && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === '.' && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
  });
});

operationEl.forEach(operation => {
  operation.addEventListener('click', (e)=> {
    if(!dis2Num) result;
    haveDot = false;
    const operationName = e.target.innerText;
    if(dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    lastOperation = operationName;
    clearVar(operationName);
  });
});

function clearVar(name = '') {
  dis1Num += dis2Num+ ' ' + name + ' ';
  display1El.innerText = dis1Num;
  display2El.innerText = 0;
  dis2Num = '';
  tempResultEl.innerText = result;

}

function mathOperation() {
  if(lastOperation === 'x' ) {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === '/' ) {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === '-' ) {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === '+' ) {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === '%' ) {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}

equalEl.addEventListener('click', (e) => {
  if(!dis1Num || !dis2Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2El.innerText = result;
  tempResultEl.innerText = '';
  dis2Num = result;
  dis1Num = '';
});

clearAllEl.addEventListener('click', (e) => {
  display2El.innerText = 0;
  display1El.innerText = 0;
  tempResultEl.innerText = 0;
  dis2Num = '';
  dis1Num = '';
  result = '';
});

clearLastEl.addEventListener('click', (e) => {
  display2El.innerText = 0;
  dis2Num = '';
});

//keyboard funcionality 
window.addEventListener('keydown', (e)=> {
  if(
    e.key === '0' ||
    e.key === '1' ||
    e.key === '2' ||
    e.key === '3' ||
    e.key === '4' ||
    e.key === '5' ||
    e.key === '6' ||
    e.key === '7' ||
    e.key === '8' ||
    e.key === '9' ||
    e.key === '.' 
  ) {
    clickButtonEl(e.key);

  } else if (
    e.key === '/' ||
    e.key === '-' ||
    e.key === '+' ||
    e.key === '%' 
  ) {
    clickOperationEl(e.key);
  } else if (e.key == 'Enter' || e.key === '=') {
    clickEqual();
  } else if(e.key === '*') {
    clickOperationEl('x');
  }
});

function clickButtonEl(key) {
  numbersEl.forEach(button => {
    if(button.innerText === key) {
      button.click();
    }
  });
}
function clickOperationEl(key) {
  operationEl.forEach(operation => {
    if(operation.innerText === key) {
      operation.click();
    } 
  });
}

function clickEqual() {
  equalEl.click();
}





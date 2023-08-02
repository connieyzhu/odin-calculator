const display = document.getElementById('display');
const smallButtons = document.querySelectorAll('div.smallButtons button');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const equalBtn = document.getElementById('equal');
let displayArray = [];
let isSolution = false;

function changeDisplay(string){
    const lastElement = displayArray[displayArray.length - 1];
    if(!isNaN(string) || string == '.'){
        console.log('num')
        if(isSolution){
            display.textContent = string
            isSolution = false;
            displayArray = [];
        }else if(isNaN(lastElement) && lastElement !== '.'){
            display.textContent = string
            console.log('string')
        }else{
            display.textContent += string;
        }
    }else{
        if(isNaN(lastElement) && lastElement !== '.'){
            alert('Invalid! Type in another number.');
            return;
        }
        isSolution = false;
        console.log('not');
        if(displayArray.length == 0){
            displayArray.push('0');
        }
        evaluate(string);
    }
    displayArray.push(string);
    console.log(displayArray);
}

function clearDisplay(){
    display.textContent = '';
    displayArray = [];
}

function deleteDisplay(){
    const lastElement = displayArray[displayArray.length - 1];
    if(!isNaN(lastElement) || lastElement == '.'){
        display.textContent = display.textContent.slice(0, -1);
    }
    displayArray.pop();
}

function evaluate(lastElement){
    console.log('startEval');
    const secondLastElement = displayArray[displayArray.length - 1];
    if(secondLastElement == "/" && lastElement == 0){
        alert('Invalid! Cannot divide by 0.');
        clearDisplay();
    }else if(isNaN(secondLastElement) && secondLastElement !== '.'
                && isNaN(lastElement) && lastElement !== '.'){
        alert('Invalid! Type in another number.');
    }else{
        const value = Math.round((solveFunction(displayArray.join('')) + Number.EPSILON) * 100) / 100;
        display.textContent = value;
        displayArray = [value];
    }
    console.log(displayArray);
    console.log('endEval');
}

function solveFunction(fn){
    return new Function('return ' + fn)();
}

clearBtn.addEventListener('click', () => {
    clearDisplay();
})

deleteBtn.addEventListener('click', () => {
    deleteDisplay();
})

equalBtn.addEventListener('click', () => {
    evaluate(equalBtn.textContent);
    isSolution = true;
    console.log('equals', displayArray);
})

smallButtons.forEach(button => {
    if(button.textContent!== '='){
        button.addEventListener('click', () => {
            changeDisplay(button.textContent);
        });
    }
});
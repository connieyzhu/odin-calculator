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
    console.log(secondLastElement, lastElement);
    if(secondLastElement == "/" && lastElement == 0){
        alert('Invalid! Cannot divide by 0.');
        clearDisplay();
    }else if(isNaN(secondLastElement) && secondLastElement !== '.'
                && lastElement == '='){
        alert('Invalid! Type in another number.');
    }else{
        const value = eval(displayArray.join(''));
        display.textContent = value;
        displayArray = [value];
    }
    console.log(displayArray);
    console.log('endEval');
}

clearBtn.addEventListener('click', () => {
    clearDisplay();
})

deleteBtn.addEventListener('click', () => {
    deleteDisplay();
})

equalBtn.addEventListener('click', () => {
    evaluate(equalBtn.textContent);
    displayArray = [display.textContent];
    isSolution = true;
})

smallButtons.forEach(button => {
    if(button.textContent!== '='){
        button.addEventListener('click', () => {
            changeDisplay(button.textContent);
        });
    }
});
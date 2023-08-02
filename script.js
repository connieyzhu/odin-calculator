const display = document.getElementById('display');
const smallButtons = document.querySelectorAll('div.smallButtons button');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
let displayArray = [];

function changeDisplay(string){
    if(!isNaN(string) || string == '.'){
        display.textContent += string;
    }
    displayArray.push(string);
    console.log(displayArray)
}

function clearDisplay(){
    display.textContent = '';
}

function deleteDisplay(){
    const lastElement = displayArray[displayArray.length - 1];
    if(!isNaN(lastElement) || lastElement == '.'){
        display.textContent -= lastElement;
    }
    displayArray.pop();
}

clearBtn.addEventListener('click', () => {
    clearDisplay();
})

deleteBtn.addEventListener('click', () => {
    deleteDisplay();
})

smallButtons.forEach(button => {
    button.addEventListener('click', () => {
        changeDisplay(button.textContent);
        console.log(button.textContent);
    })
});
const display = document.getElementById('display');
const smallButtons = document.querySelectorAll('div.smallButtons button');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
let displayArray = [];

function changeDisplay(string){
    const lastElement = displayArray[displayArray.length - 1];
    if(!isNaN(string) || string == '.'){
        if(isNaN(lastElement) || lastElement !== '.'){
            display.textContent = string
        }else{
            display.textContent += string;
        }
    }
    displayArray.push(string);
    console.log(displayArray)
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
    console.log(displayArray);
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
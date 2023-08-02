const display = document.getElementById('display');
const numButtons = document.querySelectorAll('button');
const clear = document.getElementById('clear');
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

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        changeDisplay(button.textContent);
        console.log(button.textContent);
    })
});

clear.addEventListener('click', () => {
    clearDisplay();
})
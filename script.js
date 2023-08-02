const display = document.getElementById('display');
const numButtons = document.querySelectorAll('#num');
const clear = document.getElementById('clear');

function changeDisplay(string){
    display.textContent = string;
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
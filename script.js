const display = document.getElementById('display');
const numButtons = document.querySelectorAll('#num');

function changeDisplay(string){
    display.textContent = string;
}

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        changeDisplay(button.textContent);
        console.log(button.textContent);
    })
});
const inputs = document.querySelectorAll('.controls input');
const changeButton = document.querySelector('.change-button');
const body = document.querySelector('body');
const label = document.querySelectorAll('label');
const standartBody = 'rgb(3, 43, 67)';

let color = getComputedStyle(document.body);

let darkTheme = color.getPropertyValue('--darkInput');
let lightTheme = color.getPropertyValue('--whiteBackground')



inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}



function darkOrLight() {

    if (body.style.backgroundColor === standartBody) {
        body.style.setProperty('background-color', lightTheme);
        body.style.setProperty('color', darkTheme);
        changeButton.style.background = "url('moon.png') no-repeat 50px 12px";

    } else {
        body.style.setProperty('background-color', darkTheme);
        body.style.setProperty('color', lightTheme);
        changeButton.style.background = "url('sun.png') no-repeat 15px 15px";
    }
}

changeButton.addEventListener('click', darkOrLight);
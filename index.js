const inputs = document.querySelectorAll('.controls input');
const changeButton = document.querySelector('.change-button');
const body = document.querySelector('body');
const label = document.querySelectorAll('label');

let color = getComputedStyle(document.body);

let darkTheme = color.getPropertyValue('--darkInput');
let lightTheme = color.getPropertyValue('--whiteBackground')



inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    //console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}



function darkOrLight() {

    if (body.style.backgroundColor === 'rgb(3, 43, 67)') {
        body.style.setProperty('background-color', lightTheme);
        for (let i = 0; i < label.length; i++) {
            label[i].style.setProperty('color', darkTheme)
        }
    } else {
        body.style.setProperty('background-color', darkTheme);
        for (let i = 0; i < label.length; i++) {
            label[i].style.setProperty('color', lightTheme)
        }
    }
    console.log(body.style.backgroundColor)
}

changeButton.addEventListener('click', darkOrLight);
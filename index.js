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
    body.style.setProperty('background-color', darkTheme);
    for (let i = 0; i < label.length; i++) {
        label[i].style.setProperty('color', lightTheme)
    }
}



// function darkOrLight() {
//     body.classList.toggle('night');
//     if (body.classList.contains('night')) {
//         changeButton.style.background = "url('sun.png') no-repeat 15px 15px";
//     } else {
//         changeButton.style.background = "url('moon.png') no-repeat 50px 12px";
//     }
// }


changeButton.addEventListener('click', darkOrLight)
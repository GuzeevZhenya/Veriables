const inputs = document.querySelectorAll('.controls input');
const changeButton = document.querySelector('.change-button');
const body = document.querySelector('body');


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    //console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}



// function darkOrLight() {
//     body.classList.toggle('night');
//     if (body.classList.contains('night')) {
//         changeButton.style.background = "url('sun.png') no-repeat 15px 15px";
//     } else {
//         changeButton.style.background = "url('moon.png') no-repeat 50px 12px";
//     }

// }


function darkOrLight(themeName){
    localStorage.setItem('theme',themeName);
    document.documentElement.className = themeName;
}

function toggleTheme(){
    if(localStorage.getItem('theme')==='dark-theme'){
        darkOrLight('light-theme')
    }else{
        darkOrLight('dark-theme')
    }
}
changeButton.addEventListener('click', function(e){
    e.preventDefault();
    toggleTheme();
});

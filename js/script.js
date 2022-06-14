
const salsicha = document.querySelector('.salsicha')
const monster = document.querySelector('.monster')
const ResetButton = document.querySelector('#Reset-button')

function startStuff(){

    if (monster.style.animation = 'none') {

        monster.style.animation = 'monster-animation 1.5s infinite linear';
        monster.style.left = null;

        salsicha.style.animation = null;
        salsicha.style.bottom = `0px`

        salsicha.src = './Images/mario-gif.gif';

        ResetButton.style.opacity = 0;
    }

    monster.style.opacity = 1;
    salsicha.style.opacity = 1;
    ResetButton.style.opacity = 0;
    monster.style.animation = 'monster-animation 1.5s infinite linear';

const jump = () => {
    salsicha.classList.add('jump');

    setTimeout(() => {

        salsicha.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const monsterPosition = monster.offsetLeft;
    const salsichaPosition = +window.getComputedStyle(salsicha).bottom.replace('px', '');

    if (monsterPosition <= 120 && monsterPosition > 0 && salsichaPosition < 85) {

        monster.style.animation = 'none';
        monster.style.left = `${monsterPosition}px`

        salsicha.style.animation = 'none';
        salsicha.style.bottom = `${salsichaPosition}px`


        salsicha.src = './Images/Mario.png';
        salsicha.src.width = '0';
        salsicha.style.marginLeft = '28px';

        ResetButton.style.opacity = 1;

        clearInterval(loop);
    }
}, 10)

document.addEventListener('keydown', jump);

}

const salsicha = document.querySelector('.salsicha')
const monster = document.querySelector('.monster')


const jump = () => {
    salsicha.classList.add('jump');

    setTimeout(() => {

        salsicha.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() =>{

    

    const monsterPosition = monster.offsetLeft;
    const salsichaPosition = +window.getComputedStyle(salsicha).bottom.replace('px', '');

    console.log(salsichaPosition)

    if(monsterPosition <= 120 && monsterPosition > 0 && salsichaPosition < 85){

        monster.style.animation = 'none';
        monster.style.left =`${monsterPosition}px`

        salsicha.style.animation = 'none';
        salsicha.style.bottom = `${salsichaPosition}px`


        salsicha.src = './images/salsicha.png';
        salsicha.src.width = '75px'
        salsicha.style.marginLeft = '50px'


        clearInterval(loop);

    }


},10)


document.addEventListener('keydown', jump);

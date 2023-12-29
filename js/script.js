const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    },500)
}

const loop = setInterval(() =>{

    const pipeposition = pipe.offsetLeft
    const cloudsposition = clouds.offsetLeft
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px','')
    console.log(marioposition)

    
    if(pipeposition < 425 && pipeposition > 260 && marioposition <80){
        pipe.style.animation = 'nome'
        pipe.style.left = `${pipeposition}px`

        mario.style.animation = 'nome'
        mario.style.bottom = `${marioposition}px`

        clouds.style.animation = 'nome'
        clouds.style.left = `${cloudsposition}px`

        mario.src = './images/game-over-dark.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump)

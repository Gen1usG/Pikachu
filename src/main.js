import string from './stringContent'

const pikachu = {
    id: undefined,
    speed: undefined,
    n: 1,
    ui: {
        'htmlContain': document.querySelector('.html-contain'),
        'styleContain': document.querySelector('#style-contain')
    },
    btnTable: {
        '.btn-play': 'play',
        '.btn-pause': 'pause',
        '.btn-slow': 'slow',
        '.btn-normal': 'normal',
        '.btn-fast': 'fast'
    },
    init() {
        pikachu.play()
        pikachu.btnevent()
    },
    btnevent() {
        for (let key in pikachu.btnTable) {
            document.querySelector(key).onclick = pikachu[pikachu.btnTable[key]]
        }
    },
    play() {
        pikachu.pause()
        pikachu.id = setInterval(() => {
            pikachu.ui.htmlContain.innerText = string.substring(0, pikachu.n)
            pikachu.ui.styleContain.innerHTML = string.substring(0, pikachu.n)
            pikachu.n = pikachu.n + 1
            pikachu.ui.htmlContain.scrollTop = pikachu.ui.htmlContain.scrollHeight
            if (pikachu.n > string.length) {
                clearInterval(pikachu.id)
            }
        }, pikachu.speed)
    },
    pause() {
        clearInterval(pikachu.id)
    },
    slow() {
        pikachu.speed = 100
        pikachu.pause()
        pikachu.play()
    },
    normal() {
        pikachu.speed = 50
        pikachu.pause()
        pikachu.play()
    },
    fast() {
        pikachu.speed = 0
        pikachu.pause()
        pikachu.play()
    }
}

pikachu.init()




import string from './stringContent'

const htmlContain = document.querySelector('.html-contain')
const styleContain = document.querySelector('#style-contain')

let speed
let n = 1
let id = setInterval(() => {
    htmlContain.innerText = string.substring(0, n)
    styleContain.innerHTML = string.substring(0, n)
    n = n + 1
    htmlContain.scrollTop = htmlContain.scrollHeight
    if (n > string.length) {
        clearInterval(id)
    }
}, 0)

const btnPlay = document.querySelector('.btn-play')
const btnPause = document.querySelector('.btn-pause')
const btnSlow = document.querySelector('.btn-slow')
const btnNormal = document.querySelector('.btn-normal')
const btnFast = document.querySelector('.btn-fast')

btnPlay.onclick = () => {
    id = setInterval(() => {
        htmlContain.innerText = string.substring(0, n)
        styleContain.innerHTML = string.substring(0, n)
        n = n + 1
        htmlContain.scrollTop = htmlContain.scrollHeight
        if (n > string.length) {
            clearInterval(id)
        }
    }, 0)
}

btnPause.onclick = () => {
    clearInterval(id)
}



import string from './stringContent'

const htmlContain = document.querySelector('.html-contain')
const styleContain = document.querySelector('#style-contain')


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

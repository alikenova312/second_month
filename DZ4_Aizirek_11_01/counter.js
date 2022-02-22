const num  = document.querySelector('.number')
const button1 = document.querySelector('.increment')
const button2 = document.querySelector('.decrement')
const reset =  document.querySelector('.reset')
let state = 0


button1.addEventListener('click', () => {
    state += 1
    num.innerText = state
})
button2.addEventListener('click', () => {
    state -= 1
    num.innerText = state
})
reset.addEventListener('click', () => {
    state = 0
    num.innerText = state
})


const svetofor = prompt('Введите цвет')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const btn_red = document.querySelector('.btn_red')
const btn_green = document.querySelector('.btn_green')
const btn_yellow = document.querySelector('.btn_yellow')

if (svetofor === 'red') {
    red.style.background = 'red'
}else if (svetofor === 'yellow'){
    yellow.style.background = 'yellow'
}else if (svetofor === 'green'){
    green.style.background = 'green'
}else {
    alert('введите один из цветов: green, red or yellow')
}

btn_red.addEventListener('click', () => {
    red.style.backgroundColor = 'red'
    console.log('hi')
})
btn_yellow.addEventListener('click', () => {
    yellow.style.backgroundColor = 'yellow'
})
btn_green.addEventListener('click', () => {
    green.style.backgroundColor = 'green'
})
const rows = Array.from(document.querySelectorAll('.rows'))

const lettersNumber = 5



window.onload = init()

let row = 1
let column = 1

window.addEventListener('keydown', (event) => {
    let input
    if ((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode == 55 || event.keyCode == 50 || event.keyCode == 48) {
        input = event.key
        push(input)
    } else if (event.key == 'Backspace') backspace()
})

function init() {
    rows.forEach(row => {
        for (let i = 0; i < lettersNumber; i++) {
            const element = document.createElement('div')
            element.classList.add('tiles')
            row.appendChild(element)
        }
    })
}

function push(letter) {
    if (rows[row - 1].children[column - 1].textContent == '') rows[row - 1].children[column - 1].textContent = letter.toUpperCase() 

    if (column < lettersNumber) {
        column += 1
    } else if (column == lettersNumber && row == 6) {
        console.log('end game');
    }
}

function backspace() {
    if (rows[0].children[0].textContent !== '') {
        if (column == lettersNumber && rows[row - 1].children[column - 1].textContent != '') {
            rows[row - 1].children[column - 1].textContent = ''
        } else {
            rows[row - 1].children[column - 2].textContent = ''
        }
    
        if (column == lettersNumber && rows[row - 1].children[column - 2].textContent == '') {
            column -= 1
        } else if (column < lettersNumber) column -= 1
    }
}
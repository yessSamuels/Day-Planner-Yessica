const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const button2 = document.querySelector('button')
const input = document.getElementById('item')

const liMaker = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault()
  
    liMaker(input.value)
    input.value = ''
  })

  let itemsArray = []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

e.preventDefault()

itemsArray.push(input.value)
localStorage.setItem('items', JSON.stringify(itemsArray))

data.forEach((item) => {
  liMaker(item)
})

button.addEventListener('click', function () {
  localStorage.clear()
    while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})

button2.addEventListener('click', function () {
  localStorage.clear()
    while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})

let items

if (localStorage.getItem('items')) {
  items = JSON.parse(localStorage.getItem('items'))
} else {
  items = []
}

let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []

const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')
let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = (text) => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}

form.addEventListener('submit', function (e) {
  e.preventDefault()

  itemsArray.push(input.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  liMaker(input.value)
  input.value = ''
})

data.forEach((item) => {
  liMaker(item)
})

button2.addEventListener('click', function () {
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})


button.addEventListener('click', function () {
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})

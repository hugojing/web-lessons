require('normalize.css')
require('purecss/build/pure.css')
require('@/main.css')

const logo = require('@/assets/images/yeoman-logo.png')

const title = document.createElement('h1')
title.innerText = 'DOM 实战'

const grids = document.createElement('div')
grids.setAttribute('class', 'pure-g')

const grid1 = document.createElement('div')
grid1.setAttribute('class', 'pure-u-1-3')
const grid2 = grid1.cloneNode(true)
const grid3 = grid1.cloneNode(true)

grid1.innerHTML = `
  <form class="pure-form">
    <input type="text" class="pure-input-rounded">
    <button type="submit" class="pure-button">搜索</button>
  </form>
`

const image = document.createElement('img')
image.setAttribute('src', logo)
grid2.appendChild(image)

const button = document.createElement('button')
button.addEventListener('click', () => {
  image.style.transform = 'rotateX(180deg)'
  setTimeout(() => {
    image.style.transform = 'rotateX(360deg)'
  }, 500)
})
button.setAttribute('class', 'pure-button pure-button-primary')
button.textContent = '一个普通的按钮'
grid3.appendChild(button)

const app = document.getElementById('app')
grids.appendChild(grid1)
grids.appendChild(grid2)
grids.appendChild(grid3)
app.appendChild(title)
app.appendChild(grids)



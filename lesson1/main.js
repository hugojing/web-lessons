const btn = document.getElementsByClassName('btn')[0]

btn.addEventListener('click', () => {
  const name = prompt('请输入你的名字', '匿名者')
  if (name) {
    const text = document.createTextNode(`嗨！${name}！今天过得好吗？`)
    const p = document.createElement('p')
    p.appendChild(text)
    const body = document.getElementsByTagName('body')[0]
    body.removeChild(btn)
    body.appendChild(p)
  }
})

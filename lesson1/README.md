# 《使用 HTML + CSS + JavaScript 写一个最简单的 Web 页面》

## 目标

建立一个 lesson1 项目，在其中编写代码。

当在浏览器中访问 http://localhost:8080 时，输出一个页面，在其中点击按钮、输入名字，得到一句问候语。

## 知识点

1. 学习 HTML 的内容排布
2. 学习 CSS 的样式
3. 学习 JS 来操作界面上的行为

## 课程内容

### 用 HTML 写内容

新建一个文件：`index.html`，编写 HTML 文档：

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>一个最简单的 Web 页面</title>
    <link rel="stylesheet" href="./main.css">
  </head>
  <body>
    <button class="btn">点击一下</button>
    <script src="./main.js" charset="utf-8"></script>
  </body>
</html>
```

### 用 CSS 写样式

新建一个文件：`main.css`，编写 CSS 文件：

```CSS
html, body {
    width: 100%;
    height: 100%;
    margin: 0;
}
body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
}
.btn {
    outline: none;
    border: none;
    border-radius: 2px;
    padding: 10px;
    color: #fff;
    background: indianred;
}
```

### 用 JS 写行为

新建一个文件：`main.js`，编写 JS 文件：

```JavaScript
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
```

在项目目录下启动服务：

```bash
$ http-server
```

打开浏览器输入网址 `http://localhost:8080` 即可查看效果。

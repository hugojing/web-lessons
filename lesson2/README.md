# 《使用 Babel + Webpack 编写 ECMAScript 2015 代码》

## 目标

建立一个 lesson2 项目，在其中编写代码。

在 JS 文件中编写 ECMAScript 2015 代码，最终打包输出 ES5 代码。

当在浏览器中访问 http://localhost:8080 时，输出一个页面，在其中点击按钮、随机派出一只小精灵。

![](./screenshots/1.gif)

## 知识点

1. 学习 Node 项目的初始化
2. 学习 Babel + Webpack 的使用
3. 学习 ES2015 的部分语法

## 课程内容

### 使用 Babel 的原因

可能你注意到了，上一节课我们编写的是 ES2015 代码，虽然在 Chrome 中可以运行，但是在其他浏览器上就不一定了。这就是我们使用 Babel 的原因所在。

有了 Babel，ES2015 代码就可以转译为各个浏览器普遍能运行的 ES5 代码。

但是 Babel 只有转译功能，对于 ES2015 modules，它是默认转译为 CommonJS 的（require 关键字）。

浏览器无法直接加载 CommonJS 模块，因此还需要 Webpack 来实现 JS 模块加载功能。

> 注意，Webpack 是一个前端模块加载器 + 打包工具。咱们此次只用到它前端模块加载功能之一 —— JS 模块加载。你当然可以选择其他 JS 模块加载器，比如 Browserify。

将它们安装到 Node 项目中，首先需要初始化一个 Node 项目。

### 初始化一个 Node 项目

执行初始化命令，

```bash
$ npm init
```

填入必要信息，完成。

完成之后项目中会多出一个 `package.json` 文件，即为初始化成功。

### 安装 Babel 和 Wabpack 到项目

安装 babel-core 和它的 babel-preset-es2015 插件，并写入到 `package.json` 的 `devDependencies` 中。

```bash
$ npm install --save-dev babel-core babel-preset-es2015
```

安装 webpack 和它的 babel-loader 插件，并写入到 `package.json` 的 `devDependencies` 中。

```bash
$ npm install --save-dev webpack babel-loader

```

安装好之后，我们就可以在运行代码之前执行 `webpack` 命令进行打包。

为了方便使用，可以给命令一个别名，写到 `package.json` 的 `scripts` 中。

例如：

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack -p --progress --hide-modules"
}
```

> 小插曲：还记得前几节的小工具 `http-server` 吗？也可安装到项目中来，抛弃原本在全局使用的方式。

安装：

```bash
$ npm install --save-dev http-server
```

此后项目中可以使用 `http-server [输出目录]` 命令来启动服务器。

我们同样写入 npm scripts：

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack -p --progress --hide-modules",
    "serve": "http-server dist"
}
```

这样，之后就可以使用 `npm run build` 和 `npm run serve` 命令了，更加语义化。

### 编写 Babel 和 Webpack 的配置文件

新建一个文件：`.babelrc`， 编写 Babel 的配置文件：

```
详见本目录下 .babelrc 文件
```

新建一个文件：`webpack.config.js`， 编写 Webpack 的配置文件：

```
详见本目录下 webpack.config.js 文件
```

> 本节不铺开讲配置文件

### 用 HTML 写内容

新建 `/dist` 和 `/src` 目录。

新建一个文件：`/dist/index.html`，编写 HTML 文档：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>ES2015 宠物小精灵</title>
    <link rel="stylesheet" href="./main.css">
  </head>
  <body>
    <button class="btn">决定就是你了！</button>
    <script src="./main.js" charset="utf-8"></script>
  </body>
</html>
```

### 用 CSS 写样式

新建一个文件：`/dist/main.css`，编写 CSS 文件：

```css
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

新建一个文件：`/src/main.js`，编写 JS 文件：

主要内容就是监听刚刚在 HTML 中写的那个按钮，当点击时就随机给出一只小精灵。

因为我们可以毫无顾忌的写 ES2015 代码了，所以直接引入第三方模块。

首先需要安装：

```bash
$ npm install --save pokemon-gif
```

然后开写：

```js
import pokemonGif from 'pokemon-gif'

const btn = document.getElementsByClassName('btn')[0]

btn.addEventListener('click', () => {
    console.log('Clicked!')
    const randomId = Math.ceil(Math.random() * 721)
    const gifUrl = pokemonGif(randomId)
    console.log(gifUrl)
    if (gifUrl) {
        const img = document.createElement('img')
        img.src = gifUrl
        const body = document.getElementsByTagName('body')[0]
        body.removeChild(btn)
        body.appendChild(img)
    }
})
```

### 打包，启动服务

打包 :

```bash
$ npm run build
```

启动服务：

```bash
$ npm run serve
```

打开浏览器输入网址 `http://localhost:8080` 即可查看效果。

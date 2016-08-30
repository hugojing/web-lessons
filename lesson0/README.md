# 《搭建 Web 开发环境》


## 先安装一个 Chrome 浏览器

官方网站 `https://www.google.com/chrome/browser/index.html`

## 再启动一个本地开发服务器

一个 Web 网站/应用的资源文件都是浏览器从服务器端通过网络传输获取到的，所以咱们先起一个简易的本地服务器。

用 `http-server` 这个小工具吧。

它是用 Node 编写的，所以得先安装 Node.js ，官方网站：`https://nodejs.org/zh-cn/`

然后全局安装 http-server ：

```
$ npm i http-server -g
```

## 启动一个项目并查看效果

创建一个项目目录，里面新建一个 `index.html` 文件作为入口。

在里面随便写点什么。

```HTML
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <p>我就是来看看效果的</p>
  </body>
</html>
```

在项目目录下启动服务：

```
$ http-server
```

打开浏览器输入网址 `http://localhost:8080` 即可查看效果。

# 《使用 JavaScript 进行 BOM 操作》

## 目标

了解 BOM 与 BOM JS API.

## 知识点

1. 了解 BOM
2. 使用 JS 操作 BOM

## 课程内容

### DOM 是什么

BOM 是 Browser Object Model 的缩写，简称浏览器对象模型。

BOM 提供了与浏览器窗口进行交互的对象。

BOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。

BOM 缺乏标准，JavaScript 语言的标准化组织是ECMA，DOM 的标准化组织是 W3C .

以上引用自 [dreamdu](http://www.dreamdu.com/javascript/what_is_bom/) .

简单说，通过 BOM 就可以用编程语言对浏览器窗口进行查看和操作。

#### 全局的 window 对象

window 对象是 BOM 的顶层(核心)对象。

所有 BOM 对象都是通过它延伸出来的，也可以称为 window 的子对象。

window 的 BOM 子对象：

+ document，当前窗口的内容
+ frames，当前窗口的框架集合
+ history，导航（前进/后退）
+ location，窗口的 URL
+ navigator，浏览器的版本信息
+ screen，用户的屏幕信息

### BOM 实战

自由试验，通过调用 BOM JS API 控制页面前进/后退、获取浏览器和屏幕信息。

# 《使用 JavaScript 进行 DOM 操作》

## 目标

了解 DOM 与 DOM JS API.

## 知识点

1. 了解 DOM
2. 使用 JS 操作 DOM

## 课程内容

### DOM 是什么

文档对象模型 (DOM) 是 HTML 和 XML 文档的编程接口。

DOM 提供了一种表述形式 — 将文档作为一个结构化的节点组以及包含属性和方法的对象。

尽管通常会使用 JavaScript 来访问 DOM， 但它并不是 JavaScript 的一部分，它也可以被其他语言使用， 

以上引用自 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model) .

简单说，通过 DOM 就可以用编程语言对 HTML 和 XML 文档进行查看和操作。

#### DOM 节点

在 HTML DOM 中，所有事物都是节点。

+ 整个文档是一个文档节点
+ 每个 HTML 元素是元素节点
+ HTML 元素内的文本是文本节点
+ 每个 HTML 属性是属性节点
+ 注释是注释节点

树中的所有节点均可通过 JavaScript 进行访问。所有 HTML 元素（节点）均可被修改，也可以创建或删除节点。

节点树中的节点彼此拥有层级关系。父（parent）、子（child）和同胞（sibling）等术语用于描述这些关系。父节点拥有子节点。同级的子节点被称为同胞（兄弟或姐妹）。

#### DOM 属性

所有 HTML 元素被定义为对象，而编程接口则是对象属性和对象方法。

属性是能够获取或设置的值（比如节点的名称或内容）。

一些常用的属性：

属性 | 描述
----|----
nodeName | 节点名
nodeType | 节点类型
innerText | 文字内容
innerHTML | HTML 内容
id | 元素节点 id
className | 元素 class 名
style | 元素样式
nextSibling | 下一个同胞节点

#### DOM 方法

方法是能够执行的动作（比如添加或修改元素）。

一些常用的方法：

方法 | 描述
----|----
getElementById()	| 返回带有指定 ID 的元素
getElementsByTagName()	| 返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）
getElementsByClassName() |	返回包含带有指定类名的所有元素的节点列表
appendChild() |	把新的子节点添加到指定节点
removeChild() |	删除子节点
replaceChild() |	替换子节点
insertBefore() |	在指定的子节点前面插入新的子节点
createAttribute() |	创建属性节点
createElement() |	创建元素节点
createTextNode() |	创建文本节点
getAttribute() |	返回指定的属性值
setAttribute() |	把指定属性设置或修改为指定的值
addEventListener() | 添加事件监听器
removeEventListener() | 去除事件监听器

### DOM 实战

自由试验，通过调用 DOM JS API 改变 DOM 结构、添加 DOM 事件。

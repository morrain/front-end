# ESlint：守住优雅的护城河

![](./img/index.png)

[本文配套PPT](./eslint.pdf)

- [Web：一路前行一路忘川](../history/README.md)
- [Node.js：换个角度看世界](../node/README.md)
- [CommonJS：不是前端却革命了前端](../module/README.md)
- [Babel：把 ES6 送上天的通天塔](../babel/README.md)
- [ESlint：守住优雅的护城河](../eslint/README.md)
- [webpack：它是如此，但远不止于此](../webpack/README.md)

## 前言

战国时期强大的赵国想要一举攻打并吞并北边的燕国，而小国“梁城”位居两国之间，为战略要冲，是必取之地。于是赵国派遣大将巷淹中，率领十万大军攻打仅有四千人的“梁城”，梁城王向以守城著称的墨家求救。但梁城等到的却是一个其貌不扬、孤身应战的墨家侠客革离，谁料革离足智多谋，指挥梁城四千军民逼退十万赵军，功成身退。

![](./img/mogong.jpeg)

“梁城”就好比我们的项目仓库，“梁城”的秩序取决于“革离”有没有守好它！那我们的项目仓库呢？你愿意看到城中杂乱无章、毫无规则、乱象丛生还是愿意看到城中秩序井然、风格统一、整齐有序？如何成里程序员里的“革离”，守好属于我们的天空之城？

## 关于 ESLint

### ESLint 是什么

先来看下它在[官网](https://eslint.org/)上的定义：

**Find and fix problems in your JavaScript code**

没错就一句话，**发现并修复你 JavaScript 代码中的问题**！

ESLint 最初是由 Nicholas C. Zakas 于 2013 年 6 月创建的开源项目。它的目标是提供一个插件化的 JavaScript 代码检测工具。

那为什么需要 JavaScript 代码检查工具呢？还是从 JavaScript 的语言特性说起。

### lint 工具进化史

在 C 语言发展初期，源程序中存在很多不可移植的代码，但却不能被编译器识别，因此贝尔实验室 SteveJohnson 于 1979 年在PCC(PortableC Compiler)基础上开发了一个静态代码分析的工具，用来扫描 C 源文件并对源程序中不可移植的代码提出警告，这个工具被起名为 lint ，也因此后续类似的检查代码的工具都叫 xxLint。 

我们在[《Web：一路前行一路忘川》](../history/README.md)中讲过 JavaScript 语言的历史，有提到 JavaScript 是在 1995年4月，由 Netscape 公司雇佣的程序员 Brendan Eich 开发的网页脚本语言，目的是嵌入到网页中在提交前做一些简单的校验。Brendan Eich 只用了10天，就设计完成了这种语言的第一版，估计作者也不曾想过 JavaScript 这门语言会发展到今天这个地步，所以在当初设计时存在非常多的不合理的地方。于是就需要代码校验工具来分析使用不当的地方，JSlint 就应运而生，在 JavaScript 语言 lint 工具进化史中，有三个里程碑式的工具：JSLint、JSHint 和 ESLint。

### 开山鼻祖 JSLint

![](./img/jslint.jpg)

2008年，有一本非常著名的书《JavaScript语言精粹》出版，因为封面图是一个蝴蝶，所以俗称"蝴蝶书"。非常薄的一本书，是适合所有入门 JavaScript 必读并且要读很多遍的一本书。这本书的作者叫 Douglas Crockford。

> Douglas Crockford 是一名来自 Yahoo! 的资深 JavaScript 架构师，以创造和维护 JSON (JavaScriptObject Notation) 格式而为大家所熟知。他定期在各类会议上发表有关高级 JavaScript 的主题演讲。他也是 ECMAScript 委员会的成员之一。

![](./img/js.jpg)

从《JavaScript语言精粹》的书名就可以看出来，全书悉数了 JavaScript 语言的优美特性，同时在书籍的最后面，作者也毫不客气的列举了 JavaScript 的糟粕和鸡肋的地方，从书籍中的笔风就能看出，Douglas 是个眼里容不得瑕疵的人，于是在书籍最后也介绍了作者在 2002 年开发的 JSLint 工具，Douglas 定义了所有 JSLint 的规则，对于糟粕的语法是严格不让使用的，如果你要使用JSLint，就必须接受它所有规则。

### 继往开来 JSHint

![](./img/jshint.jpeg)

2011 年 12 月 20 日，Anton Kovalyov 发表了一篇标志性的文章：[Why I forked JSLint to JSHint](https://medium.com/@anton/why-i-forked-jslint-to-jshint-73a72fd3612)，指出了 JSLint 存在的几个主要问题：

* 令人不安地固执己见，没有提供一些规则的配置
* 对社区反馈不关注

于是 JSHint 就诞生了，它在 JSLint 的基础上，在社区开发者共同努力下，加入了如下特性：

* 更多可配置的规则，这是社区的核心诉求
* 代码模块化
* 命令行工具的支持，很好得和各种 IDE 集成

诸多优势，让 JSLint 迅速取代 JSHint 成为一种必然。

### 重新出发 ESLint

![](./img/eslint.png)

JSLint 是从 JSHint 继承而来，所以沿用了 [JSLint Top Down Operator Precedence](http://crockford.com/javascript/tdop/tdop.html)（自顶向下的运算符优先级）技术实现源码的解析，但前端爆发式增长带来的巨大需求让 JSHint 变得愈加难以应对，通过暴露 AST 信息来支持第三方插件无疑是一剂良方。

> AST：[抽象语法树](https://en.wikipedia.org/wiki/Abstract_syntax_tree)

于是《JavaScript 高级程序设计》作者 Nicholas C. Zakas 于 2013 年 6 月创建了 ESLint，ESLint 将源代码解析成 AST，然后检测 AST 来判断代码是否符合规则，为 ESLint 的高可扩展性奠定了结实的基础。ESLint 保持内核足够简单，只有 100 行代码，规则的实现完全和内核分离。

但是，那个时候 ESLint 并没有大火，因为需要将源代码转成 AST，运行速度上输给了 JSHint ，并且 JSHint 当时已经有完善的生态（编辑器的支持）。真正让 ESLint 大火是因为 ES6 的出现。

> 参考[Web：一路前行一路忘川](../history/README.md)中 ES6 的相关内容。

ES6 发布后，因为新增了很多语法，JSHint 短期内无法提供支持，而 ESLint 只需要有合适的解析器就能够进行 lint 检查。这时 Babel 为 ESLint 提供了支持，开发了 babel-eslint，让ESLint 成为最快支持 ES6 语法的 lint 工具。


## ESLint 怎么用

了解了 ESLint 工具的历史意义和发展过程，接下来看下 ESLint 到底怎么用？

### 给项目安装 ESLint

> 先决条件：Node.js (>=6.14), npm version 3+。

```
// 新建demo工程目录，初始化 npm 项目
npm init

// 安装 eslint    推荐安装为项目的开发依赖
npm i -D eslint

// 初始化 eslint 配置文件    因为不是安装到全局的，所以不能直接使用 eslint --init
./node_modules/.bin/eslint --init
```

### 常用配置规则

## 如何守住优雅的护城河

### 享受开发时的乐趣

ESLint && VS Code

### 将乐趣进行到底

husky && lint-staged

### 安装“黑匣子”

standard-version && commitizen

### 最后一道防线

commitlint && husky

## 总结

## 参考文献

[深入理解 ESLint](https://juejin.im/post/6844903901292920846)

[ESLint 官网](https://cn.eslint.org/)

[JS Linter 进化史](https://zhuanlan.zhihu.com/p/34656263/)

《JavaScript语言精粹》



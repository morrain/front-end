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

“梁城”就好比我们的项目仓库，“梁城”的秩序取决于“革离”有没有守好它！那我们的项目仓库呢？你愿意看到城中杂乱无章、毫无规则和秩序、乱象丛生还是愿意看到城中秩序井然、风格统一、整齐有序？如何成里程序员里的“革离”，守好属于我们的天空之城？

## 关于 ESlint

### ESlint 是什么

先来看下它在[官网](https://eslint.org/)上的定义：

**Find and fix problems in your JavaScript code**

没错就一句话，**发现并修复你 JavaScript 代码中的问题**！

ESLint 最初是由 Nicholas C. Zakas 于 2013 年 6 月创建的开源项目。它的目标是提供一个插件化的 JavaScript 代码检测工具。

那为什么需要 JavaScript 代码检查工具呢？还是从 JavaScript 的语言特性说起。

### lint 工具进化史

在 C 语言发展初期，源程序中存在很多不可移植的代码，但却不能被编译器识别，因此贝尔实验室 SteveJohnson 于 1979 年在PCC(PortableC Compiler)基础上开发了一个静态代码分析的工具，用来扫描 C 源文件并对源程序中不可移植的代码提出警告，这个工具被起名为 lint ，也因此后续类似的检查代码的工具都叫 xxLint。 

我们在[《Web：一路前行一路忘川》](../history/README.md)中讲过 JavaScript 语言的历史，有提到 JavaScript 是在 1995年4月，由 Netscape 公司雇佣的程序员 Brendan Eich 开发的网页脚本语言，目的是嵌入到网页中在提交前做一些简单的校验。Brendan Eich 只用了10天，就设计完成了这种语言的第一版，估计作者也不曾想过 JavaScript 这门语言会发展到今天这个地步，所以在当初设计时存在非常多的不合理(“糟粕”)的地方。于是就需要代码校验工具来分析使用不当的地方，JSlint 就应运而生，在 JavaScript 语言 lint 工具进化史中，有三个里程碑式的工具：JSLint、JSHint 和 ESLint。

### 开山鼻祖 JSLint

有一本非常著名的书《JavaScript语言精粹》，因为封面图是一个蝴蝶，所以俗称"蝴蝶书"。非常薄的一本书，是适合所有入门 JavaScript 必读并且要读很多遍的一本书。

![](./img/js.jpg)

> Douglas Crockford 是一名来自 Yahoo! 的资深 JavaScript 架构师，以创造和维护 JSON (JavaScriptObject Notation) 格式而为大家所熟知。他定期在各类会议上发表有关高级 JavaScrip t的主题演讲。他也是 ECMAScript 委员会的成员之一。

### 继往开来 JSHint

### 重新出发 ESLint



## ESlint 怎么用

## 如何守住优雅的护城河

### 享受开发时的乐趣

ESlint && VS Code

### 将乐趣进行到底

husky && lint-staged

### 安装“黑匣子”

standard-version && commitizen

### 最后一道防线

commitlint && husky

## 总结

## 参考文献

[深入理解 ESlint](https://juejin.im/post/6844903901292920846)

[ESlint 官网](https://cn.eslint.org/)

[JS Linter 进化史](https://zhuanlan.zhihu.com/p/34656263/)

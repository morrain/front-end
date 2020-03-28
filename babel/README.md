# Babel：把 ES6 送上天的通天塔


![](./img/index.png)

- [Web：一路前行一路忘川](../history/README.md)
- [Node.js：换个角度看世界](../node/README.md)
- [CommonJS：不是前端却革命了前端](../module/README.md)

## 前言

在上一节 《CommonJS：不是前端却革命了前端》中，我们聊到了 ES6 Module，它是 ES6 中对模块的规范，ES6 是 ECMAScript 6.0 的简称，**泛指** JavaScript 语言的下一代标准，它的第一个版本 ES2015 已经在 2015 年 6 月正式发布，本文中提到的 ES6 包括 ES2015、ES2016、ES2017等等。在第一节的《Web：一路前行一路忘川》中也提到过，ES2015 从制定到发布历经了十几年，引入了很多的新特性以及新的机制，浏览器对 ES6 的支持进度远远赶不上前端开发小哥哥们使用 ES6 的热情，于是矛盾就日益显著……

## Babel 是什么

先来看下它在[自己官网](https://babeljs.io/)上的定义：

**Babel is a JavaScript compiler**

没错就一句话，Babel 是 JavaScript 的编译器。至于什么是编译器，可以参考[the-super-tiny-compiler](https://github.com/thejameskyle/the-super-tiny-compiler)这个项目，可以找到很好的答案。

> 本文是以 Babel 7.9.0 版本进行演示和讲解的，另外建议学习者阅读英文官网，中文官网会比原版网站慢一个版本，并且很多依然是英文的。

Babel 就是一套解决方案，用来把 ES6 的代码转化为浏览器或者其它环境支持的代码。**注意我的用词哈，我说的不是转化为 ES5 ，因为不同类型以及不同版本的浏览器对 ES6 新特性的支持程度都不一样，对于浏览器已经支持的部分，Babel 可以不转化，所以 Babel 会依赖浏览器的版本，后面会讲到。 这里可以先参考 [browerslist](https://twitter.com/browserslist) 项目。**

### Babel 的历史

在学习任何一门知识前，我都习惯先了解它的历史，这样才能深刻理解它存在意义。

Babel 的作者是 FaceBook 的工程师 Sebastian McKenzie。他在 2014 年发布了一款 JavaScript 的编译器 `6to5`。从名字就能看出来，它主要的作用就是将 ES6 转化为 ES5。

> 这里的 ES6 指 ES2015，因为当时还没有正式发布， ES2015 的名字还未被正式确定

于是很多人评价，`6to5` 只是 ES6 得到支持前的一个过渡方案，它的作者非常不同意这个观点，认为 `6to5` 不光会按照标准逐步完善，依然具备非常大的潜力反过来影响并推进标准的制定。正因为如此 `6to5` 的团队觉得 '6to5' 这个名字并没有准确的传达这个项目的目标。加上 ES6 正式发布后，被命名为 ES2015，对于 `6to5` 来说更偏离了它的初衷。于是 2015 年 2 月 15 号，`6to5` 正式更名为 Babel。

![](./img/babel.jpg)

Babel 是巴比伦文化里的通天塔，用来给 `6to5` 这个项目命名真得太贴切了！羡慕这些牛逼的人，不光代码写得好，还这么有文化，不像我们，起个变量名都得憋上半天，吃了没有文化的亏。这也是为什么我把这篇文章起名为 《Babel：把 ES6 送上天的通天塔》的原因。

## Babel 怎么用

了解了 Babel 是什么后，很明显我们就要开始考虑怎么使用 Babel 来转化 ES6 的代码了，除了 Babel 本身提供的 cli 等工具外，它还支持和其它打包工具配合使用，譬如 webpack、rollup等等，可以参考[官网对不同平台提供的配置说明](https://babeljs.io/setup.html)。

> 本文为了感受 Babel 最原始的用法，不结合其它任何工具，直接使用 Babel 的 cli 来演示。

### 构建 Babel 演示的工程

使用如下命令构建一个 npm 包，并新建 src 目录 和 一个 index.js 文件。

```
npm init -y
```
![](./img/demo.png)

package.json 内容如下:

``` json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 安装依赖包

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

> 后面会介绍这些包的作用，先看用法

增加 babel 命令来编译 src 目录下的文件到 dist 目录:

```json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {
    "babel": "babel src --out-dir dist",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.9.0",
    "@babel/preset-env": "^7.9.0"
  },
  "dependencies": {
    "@babel/polyfill": "^7.8.7"
  }
}

```

### 增加 Babel 配置文件

在工程的根目录添加 `babel.config.js` 文件，增加 Babel 编译的配置，没有配置是不进行编译的。

```js
const presets = [
  [
    '@babel/env',
    {
      debug: true
    }
  ]
]
const plugins = []

module.exports = { presets, plugins }

```
> 上例中 debug 配置是为了打印出 Babel 工作时的日志，可以方便的看来，Babel 转化了哪些语法。

1. presets 主要是配置用来编译的预置，plugins 主要是配置完成编译的插件，具体的含义后面会讲
2. 推荐用 Javascript 文件来写配置文件，而不是 JSON 文件，这样可以根据环境来动态配置需要使用的 presets 和 plugins

```js
const presets = [
  [
    '@babel/env',
    {
      debug: true
    }
  ]
]
const plugins = []

if (process.env["ENV"] === "prod") {
  plugins.push(...)
}

module.exports = { presets, plugins }
```

### 编译的结果

配置好后，我们运行 `npm run babel` 命令，可以看到 dist 文件夹下生成了 index.js 文件，内容如下所示

```js
// src/index.js
const add = (a, b) => a + b

// dist/index.js
"use strict";

var add = function add(a, b) {
  return a + b;
};

```

可以看到，ES6 的 `const` 被转化为 `var` ，箭头函数被转化为精通函数。同时打印出来如下日志：

```
> babel src --out-dir dist

@babel/preset-env: `DEBUG` option

Using targets:
{}

Using modules transform: auto

Using plugins:
  proposal-nullish-coalescing-operator {}
  proposal-optional-chaining {}
  proposal-json-strings {}
  proposal-optional-catch-binding {}
  transform-parameters {}
  proposal-async-generator-functions {}
  proposal-object-rest-spread {}
  transform-dotall-regex {}
  proposal-unicode-property-regex {}
  transform-named-capturing-groups-regex {}
  transform-async-to-generator {}
  transform-exponentiation-operator {}
  transform-template-literals {}
  transform-literals {}
  transform-function-name {}
  transform-arrow-functions {}
  transform-block-scoped-functions {}
  transform-classes {}
  transform-object-super {}
  transform-shorthand-properties {}
  transform-duplicate-keys {}
  transform-computed-properties {}
  transform-for-of {}
  transform-sticky-regex {}
  transform-unicode-regex {}
  transform-spread {}
  transform-destructuring {}
  transform-block-scoping {}
  transform-typeof-symbol {}
  transform-new-target {}
  transform-regenerator {}
  transform-member-expression-literals {}
  transform-property-literals {}
  transform-reserved-words {}
  transform-modules-commonjs {}
  proposal-dynamic-import {}

Using polyfills: No polyfills were added, since the `useBuiltIns` option was not set.
Successfully compiled 1 file with Babel.
```


## Babel 工作原理

在了解了如何使用后，我们一起来探寻一下编译背后的事情，同时会熟悉 Babel 的组成和进阶用法。

### Babel 工作流程

前面提到 Babel 其实就是一个纯粹的 JavaScript 的编译器，任何一个编译器工作流程大致都可以分为如下三步：

- Parser      解析源文件
- Transfrom   转换
- Generator   生成新文件

Babel 也不例外，如下图所示:

![](./img/babel-parser.jpg)

因为 Babel 使用是 [`acorn`](https://github.com/acornjs/acorn) 这个引擎来做解析，这个库会先将源码转化为[抽象语法树 (AST)](https://en.wikipedia.org/wiki/Abstract_syntax_tree)，再对 AST 作转换，最后将转化后 AST 输出，便得到了被 Babel 编译后的文件。

那 Babel 是如何知道该怎么转化的呢？答案是通过插件，Babel 为每一个新的语法提供了一个插件，在 Babel 的配置中配置了哪些插件，就会把插件对应的语法给转化掉。插件被命名为 `@babel/plugin-xxx`的格式。

### Babel 组成

![](./img/babel_content.png)

#### @babel/preset-env

上面提到过 @babel/preset-* 其实是转换插件的集合，最常用的就是 @babel/preset-env，它包含了 大部分 ES6 的语法，具体包括哪些插件，可以在 Babel 的日志中看到。如果源码中使用了不在 @babel/preset-env 中的语法，会报错，手动在 plugins 中增加即可。

例如 ES6 明确规定，Class 内部只有静态方法，没有静态属性。但现在有一个提案提供了类的静态属性，写法是在实例属性的前面，加上static关键字。

```js
// src/index.js
const add = (a, b) => a + b

class Person {
  static a = 'a';
  static b;
  name = 'morrain';
  age = 18
}
```

编译时就会报如下错误：

![](./img/no-plugin.png)

根据报错的提示，添加 @babel/plugin-proposal-class-properties 即可。

```
npm install --save-dev @babel/plugin-proposal-class-properties
```

```js
// babel.config.js
const presets = [
  [
    '@babel/env',
    {
      debug: true
    }
  ]
]
const plugins = ['@babel/plugin-proposal-class-properties']

module.exports = { presets, plugins }

```

@babel/preset-env 中还有一个非常重要的参数 **targets**，最早的时候我们就提过，Babel 转译是按需的，对于环境支持的语法可以不做转换的。就是通过配置 **targets** 属性，让 Babel 知道目标环境，从而只转译环境不支持的语法。**如果没有配置会默认转译所有 ES6 的语法**

```js
// src/index.js
const add = (a, b) => a + b

// dist/index.js  没有配置targets
"use strict";

var add = function add(a, b) {
  return a + b;
};
```

按如下配置 **targets**

```js
// babel.config.js
const presets = [
  [
    '@babel/env',
    {
      debug: true,
      targets: {
        chrome: '58'
      }
    }
  ]
]
const plugins = ['@babel/plugin-proposal-class-properties']

module.exports = { presets, plugins }
```

编译后的结果如下：

```js
// src/index.js
const add = (a, b) => a + b

// dist/index.js  配置targets  chrome 58
"use strict";

const add = (a, b) => a + b;
```

**可以看到 `const` 和箭头函数都没有被转译，因为这个版本的 chrome 已经支持了这些特性。可以根据需求灵活的配置目标环境**

## 参考文献

[6to5 JavaScript Transpiler Changes Name to Babel](https://www.infoq.com/news/2015/02/babel-new-name-for-6to5/)

[Babel学习系列2-Babel设计，组成](https://zhuanlan.zhihu.com/p/57883838)

[初学 Babel 工作原理](https://zhuanlan.zhihu.com/p/85915575)
# 在node中搭建TS开发环境

# 安装TypeScript

```js
    npm install -g typescript
```

# 编译
```ts
tsc 名称.ts
```

默认情况下， TS会做出下面几种环境。

1. 假设当前的执行环境是dom
2. 假如代码中没有使用模块化语句（import, export），便认为该代码是全局执行。
3. 编译的目标代码是ES3

有两种方式更改以上假设。

1. 使用tsc命令行的时候，加上选项参数。
2. 使用ts配置文件，更改编译选项。



## TypeScript的配置文件。

方式一：创建文件 文件名为`tsconfig.json`;

方式二：命令行方式 `tsc --init`

```json
tsconfig.json
{
  // 配置编译选项【假设中的】
  "compilerOptions": {
    "target": "es2016" , //es7 配置编译的标准 编译结果
    "module": "commonjs" , // 配置编译目标使用的模块标准 node环境
    "lib": ["es2016"] , // 去掉浏览器环境console则无法再用，需要安装第三方库。
    "outDir": "./dist", // 编译输出目录
  },
  // 编译目录
  "include" : ["./src"], // 编译scr目录
}

```

`使用了配置文件后，使用tsc进行编译时，不能跟上文件名，如果跟上文件名，会忽略配置文件。`

**编译：tsc**

配置文件中`lib`去掉了游览器环境，则浏览器环境的属性我们将无法使用，则需要安装第三方库。

**@types/node**

-D 开发以来，生产环境就没有了

> 安装 ： npm i -D @types/node     

@types是一个ts官方的类型库，其中包含了很多对js代码的类型描述。
 
> JQuery: 使用js写的，没有类型监测。
> 安装@types/jquery, 为jquery添加类型定义。

**编译目录**

默认情况下 `tsc` 编译的是编译整个文件夹目录。

所以我们需要配置编译目录`include`

**编译输出目录**

默认情况下 编译后输入目录就在当前目录下。

所以我们需要在编译配置中 配置输出目录`outDir`

# 使用第三方库简化流程

比如说我们编译出来的文件然后执行需要进入文件夹在能`node index.js`执行，多了会很繁琐的事情。

ts-node : 将ts代码在内存中完成编译，同时完成运行。

> 安装：cnpm i -g ts-node

> 编译: ts-node ./src/index.ts 

直接编译，编译后不会生成js代码到dirt里面。

nodemon : 用于监测文件的变化。

> 安装：cnpm i -g nodemon

> 编译：nodemon --exec ts-node src/index.ts

但是还是有一点繁琐，太长了，那我们还可以在package.json中配置文件配置

```json
{
    "scripts" : {
        "dev" : "nodemon --watch src -e ts --exec ts-node src/index.ts"
    }
}
```

--watch src 看src文件夹
-e ts 后缀名为ts的

然后做到热更新。
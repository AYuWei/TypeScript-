# 模块化

|         配置名称        |           含义             |
| :--------------------: |   :--------------------:  |
|       module           | 设置编译结果中使用的模块化标准 |
|   moduleResolution     |       设置解析模块的模式     |
| noImplicitUseStrict    | 编译结果中不包含"use strict" |
|   removeComments       |       编译结果移除注释       |
|    noEmitOnError       |     错误时不产生编译结果      ·|
|   esModuleInterop      | 启用es模块化交互非es模块导出  |

# Ts中如何书写模块化语句

TS中，导入和导出模块，统一使用ES6的模块化标准

导出
```ts
export const name = "AYuWei";

export function sum(a : number, b : number) : number{
    return a + b;
}
```

导入
```ts
import { sum, name } from "./myModule"

console.log(name)

console.log(sum(3,3))
```
这种方式导出的时候，当我们导入的时候有智能提示我们，提示我们是否导入这个模块，但是使用默认导出的时候就不会有这种待遇了，所以尽量使用这种方式导出。

# 编译结果中的模块化

可配置 

TS中模块化在编译结果中：

- 如果编译结果的模块化标准是ES6，则没有什么区别。
- 如果编译结果的模块化标准是commonjs：导出的声明会变成exports的属性，默认的导出会变成exports的default属性。 
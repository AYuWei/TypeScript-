# 基本类型约束

> TS是一个可选的静态的类型系统

# 如何进行类型约束

变量，函数的参数，函数的返回值【`: 约束名`】。

按`f2`一起更改名字.

any: 表示任意类型，ts不进行检查。  

> 小技巧：如何区分数字 字符串和数字，关键看怎么读？**如学号：20200811**
> 如果安装数字的方式进行朗读，则为数字，否则为字符串。

# 源代码和编译结果的差异

编译结果中没有类型约束信息

# 基本类型

- number: 数字
- string: 字符串
- boolean: 布尔
- number[]: 数组 ｜Array<number>
- object: 对象
- null 和 undefined

null 和 undefined 是所有其他类型的子类型，它门可以复制给其他类型。

通过添加```"strictNullChecks": true```， 可以获得更严格的类型检查，null 和 undefined 只能复制给自身。

# 其他常用类型

- 联合类型

配合类型保护进行判断

类型保护：当对某个变量进行类型判断之后，在判断的语句快中便可以确定它的确切类型，typeof可以触发类型保护。

- void类型：通常用于函数的返回值，表示没有返回任何东西。

- never类型：通常用于函数的返回值，表示该函数永远不可能结束。跑出错误的时候会用到，不写默认void类型。

- 子面量类型：使用一个值累约束`let a : "A"`a只能赋值为A

```ts
let gender : "男" : "女"; // gender只能是 男 或者是 女

let arr : []; // arr永远只能取值为空数组。
```

- 元祖类型（Tuple）：一个固定长度的数组，并且数组中每一项的类型确定。

- any类型：any类型可以忽略类型检查。

# 类型别名

对已知的一些类型定义名称

```
type 类型名 = ...;
```

```ts
type Gender = "男" | "女";

type User = {
    name : string ,
    age : number ,
    gender : Gender
}

let u : User;

u = {
    name : "YuWei",
    age : 22,
    gender : "男",
}

function getUser(g : Gender) : User[]{
    return [];
}
```

# 函数的相关约束

函数重载：在函数实现之前，对函数调用的多种情况进行声明。

```ts
/**
 * a 和 b 是数字类型
 * @param a 
 * @param b 
 */
function combine(a : number, b : number) : number;
/**
 * a 和 b 是字符串类型
 * @param a 
 * @param b 
 */
function combine(a : string , b : string ) : string;

function combine(a : number | string , b : number | string ) : number | string {
    if(typeof a === 'number' && typeof b === "number"){
        return a * b;
    }
    else if(typeof a === 'string' && typeof b === "string"){
        return a + b;
    }
    throw new Error("a 和 b 必须是相同的类型");
}
```

可选参数：可以在某参数名后加上问好，表示该参数可以不用传递,可选参数必须在参数列表的末尾。

```ts
function sum(a : number, c : number , c? : number){

};
```



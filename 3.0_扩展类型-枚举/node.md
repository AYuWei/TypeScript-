# 扩展类型-枚举

> 扩展类型：类型别名， 枚举，接口，类

枚举通常用于约束某个变量的取值范围。

子面量和联合类型配合使用，也可达到同样的目标。

# 子面量类型的问题

- 在类型约束位置，会产生重复代码，可以使用别名解决该问题。

- 逻辑恨意和真实的值产生了混淆，会导致当前修改真实值的时候产生大量的修改。

- 子面量类型不会进入编译结果。

为什么要用枚举？ 就是有时候我们需要修改变量后，后面的都需要修改，这就是逻辑含义和真实产生的值有混淆

比如说：当前 `type Gender : "男" ："女"`

此时这个Gender只能书写男和女，但是后期维护的时候我们可能产生了靓仔，靓女这养的称呼，但是我们有很多代码需要更改，这就有点麻烦了。

所以才需要枚举来解决这个问题。

# 枚举

如何定义一个枚举

```ts
注意枚举中的健值对的形式不是`**:**`形式的
enum 枚举名{
    枚举字段1 = 值1,
    枚举字段2 = 值2,
}
```

枚举会出现在编译结果中，编译结果中变现为对象。

```ts
.ts书写

enum Gander {
    male = "男",
    female = "女"
}
let gander : Gander;

gander = Gander.male;
gander = Gander.female;

console.log(gander);
```

```js
.js编译出来后

var Gander;
(function (Gander) {
    Gander["male"] = "\u7537";
    Gander["female"] = "\u5973";
})(Gander || (Gander = {}));
let gander;
gander = Gander.male;
gander = Gander.female;
console.log(gander);

```

枚举的规则

- 枚举的字段值可以是字符串或数字。
- 数字媒体的值会自动自增
- 没数字枚举约束的变量，可以直接复制为数字。
- 数字枚举的编译结果 和 字符串枚举有差异。

最佳实践

- 尽量不要在一个枚举中出现字符串字段，又出现数字字段。
- 使用枚举是，精良使用枚举字段的名称，而不是使用真实值【就想使用对象中的属性名一样】。

**推荐使用枚举，不推荐使用别名**枚举不是直接书写值的，所以有利于维护，但是小应用场景可以使用别名。

# 扩展 位枚举（枚举的位运算）

针对的数据枚举

位运算：两个数换成而二进制后进行的运算。

权限组合 

或运算 ： `0001 | 0010`有一个数为1的时候就为一

且运算 ： `0001 & 0010`两个为1的时候才为1

异或运算 ：`0011 ^ 0010`相同取0 不同取 1

```ts
enum Permission{
    Read = 1,  // 2 ^ 0 0001
    Write = 2, // 2 ^ 2 0010
    Create = 4,// 2 ^ 3 0100
    Delete = 8 // 2 ^ 4 1000
}

// 1. 如何组合权限

/**
 * 枚举的位运算
 * 【｜】或运算
 *  0001
 *  或  - 有真为真
 *  0010
 * =0011
 * 
 * 就有可读写的权限
 * 
 */
let p = Permission.Read | Permission.Write; 

// 2. 如何判断是否拥有某个权限
/**
 *  0011
 * 【 & 】且运算 - 真真为真，其他为假
 *  0010
 * =0010 
 */
function hasPermission(target: Permission, per: Permission){
    return (target & per) == per;
}

// 判断变量p是否有可读权限
console.log(hasPermission(p,Permission.Write))

// 3. 如何删除某个权限
/**
 * 0011
 * 【^】异或 ： 相同取0 不同取1
 * 0010
 *=0001
 */
 p = p ^ Permission.Write;
 console.log(hasPermission(p,Permission.Write))

```
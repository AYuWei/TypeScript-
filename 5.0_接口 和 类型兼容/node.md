# 接口和类型兼容

# 扩展类型 -接口哦

> 扩展类型： 类型别名，枚举，接口，类

**TypeScript的接口：用于约束类，对象，函数的契约（标准）**

契约（标准）的形式：
- API文档，弱标准。
- 代码约束，强标准。

1. 接口约束对象。

接口约束对象的时候和类型别名没什么区别，接口最大的区别就是**约束类**

```ts
interface User{
    name : string,
    age : number,
}

let u:User = {
    name : "宇威",
    age : 22
}
```

2. 接口约束函数
```ts
interface User{
    name : string,
    age : number,
    sayHello() : void,
}
```

3. 接口可以继承
```ts
interface A{
    T1 : string,
}
interface B extends A{
    T2 : number,
}
let u : B = {
    T1 : 'AYuWei',
    T2 : 123
}
```
可以通过接口之间的继承，实现多种接口的组合

**readonly**

只读修饰符，修饰的目标是只读。

只读修饰符不存在编译结果中。

```ts
interface Point {
    readonly x: number;
    readonly y: number;
}
```


# 类型兼容性。

B -> A, 如果能完成复制，则B和A类型兼容。

鸭子辩型法（子结构辩型法）：目标类型需要某一些特征，复制的类型只要能满足该特征即可。

- 基本类型：完全匹配

- 对象类型：鸭子辩型法。

当直接使用对象字面量赋值的时候，会进行更加严格的判断。

**类型断言：我们使用的类型比如说是字符串的时候，会判断这个类型就是字符串，但是我们可以将这个类型提示改为其他的类型，`"数据" as "类型"`**

```ts
interface Duck{
    sound : "嘎嘎嘎"
    swin() : void,
}

let person = {
    name : "伪装成鸭子的人",
    age : 11,
    sound : "嘎嘎嘎" as "嘎嘎嘎", // 类型断言
    swin(){
        console.log(this.name + "正在游泳，并发出了" + this.sound + "的叫声！")
    }
}

let duck : Duck = person;

console.log(duck.swin()); // 但是不能使用 duck.name，因为鸭子里面没有name
```

- 函数类型

 **参数**：传递给目标函数的参数可以少，但是不可以多。

 ```ts

interface Condition {
    (n : number, i : number) : boolean;
}

function sum(number : number[], callBack : Condition){
    let s = 0;
    for(let i = 0 ; i < number.length ; i ++){
        const n = number[i];
        if(callBack(n, i)){
            s += n;
        }
    }
    return s;
}

const result = sum( [2,3,4,5,6], n => n % 2 !== 0 );
console.log(result)
 ```
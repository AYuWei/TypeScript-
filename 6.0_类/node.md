# 类 - 访问器

**属性**

使用属性列表来描述类中的属性。

**属性的初始化检查**

```strictPropertyInitialization : true```

属性初始化位置：

1. 构造函数中

2. 属性默认值 

**属性可以修饰为可选的**

**属性可以修饰为只读的**

**使用访问修饰符**

访问修饰符可以控制类中的某个成员的访问权限。

- public : 默认的访问修饰符，公开的，所有代码均可访问。
- private : 私有的，只有在类中可以访问

**属性简写**

如果某个属性，通过构造函数的参数传递，并不做任何处理的赋值该属性，可以进行缩写。

```ts
class User {
    public name : string;
    public age : number;
    pender : "男" | "女" = "男"; // 设置默认值。
    pid ?: string; // 设置可选属性
    readonly id : number; // 不可改变

    private publishNumber : number = 3; // 每天可以发送的文章数
    private curNumber : number = 0; // 每天已发送的次数

    constructor(name : string, age : number){
        this.id = Math.random();
        this.name = name ;
        this.age = age;
    }

    publish(title : string){
        if(this.curNumber < this.publishNumber){
            console.log("发布一篇文章："+ title);
            this.curNumber ++;
        } else {
            console.log("抱歉！今日发布已上限！");
        }
    }
}

const u = new User("AYuWei",21);
u.publish("赵云");
u.publish("韩信");
u.publish("张三");
u.publish("李四");
u.publish("张飞");
```

也可以简写为**属性缩写方式**
```ts
class User {
    pender : "男" | "女" = "男"; // 设置默认值。
    pid ?: string; // 设置可选属性
    readonly id : number; // 不可改变

    private publishNumber : number = 3; // 每天可以发送的文章数
    private curNumber : number = 0; // 每天已发送的次数

    constructor(public name : string,public age : number){
        this.id = Math.random();
    }

    publish(title : string){
        if(this.curNumber < this.publishNumber){
            console.log("发布一篇文章："+ title);
            this.curNumber ++;
        } else {
            console.log("抱歉！今日发布已上限！");
        }
    }
}

const u = new User("AYuWei",21);
u.publish("赵云");
u.publish("韩信");
u.publish("张三");
u.publish("李四");
u.publish("张飞");
```


**访问器**
```ts
let passcode = "secret passcode";

class Employee {
    private _fullName : string;

    get fullName() : string {
        console.log("get");
        return this._fullName;
    }

    set fullName(newName : string) {
        console.log("set");
        if( passcode && passcode == "secret passcode" ){
            this._fullName = newName;
        } else {
            console.log("Error")
        }
    }
}

let employee = new Employee();

employee.fullName = "Bob Smith";

console.log(employee.fullName);

/**
 * 输出执行顺序
 * set
 * get
 * Bob Smith
 */
```
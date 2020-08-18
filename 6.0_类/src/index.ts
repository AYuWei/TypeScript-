// enum Gander {
//     male = "男",
//     female = "女"
// }

// let gander : Gander;

// gander = Gander.male;
// gander = Gander.female;

// console.log(gander);


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

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.pender = "男";
        this.publishNumber = 3;
        this.curNumber = 0;
        this.id = Math.random();
    }
    publish(title) {
        if (this.curNumber < this.publishNumber) {
            console.log("发布一篇文章：" + title);
            this.curNumber++;
        }
        else {
            console.log("抱歉！今日发布已上限！");
        }
    }
}
const u = new User("AYuWei", 21);
u.publish("赵云");
u.publish("韩信");
u.publish("张三");
u.publish("李四");
u.publish("张飞");

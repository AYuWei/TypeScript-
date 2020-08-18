// interface User{
//     name : string,
//     age : number,
// }

// let u:User = {
//     name : "宇威",
//     age : 22
// }

// console.log(u)


// interface A{
//     T1 : string,
// }

// interface B extends A{
//     T2 : number,
// }

// let u : B = {
//     T1 : 'AYuWei',
//     T2 : 123
// }


// interface SquareConfig {
//     colorr ?: string,
//     width ?: number,
// }

// function createSquare(config : SquareConfig) : {color : string , area : number }{
//     let newSquare = {color: "white", area: 100};
//     if (config.colorr) {
//       newSquare.color = config.colorr;
//     }
//     if (config.width) {
//       newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }

// let mySquare = createSquare({colorr : "black"});

// console.log(mySquare)


// 存储器
// 此处可以随便修改fullName的值。
// class Employee {
//     fullName : string;
// }

// let employee = new Employee();

// employee.fullName = "Bob Smith";

// if(employee.fullName){
//     console.log(employee.fullName)
// }

// employee.fullName = "AYuWei"
// console.log(employee.fullName)

// let passcode = "secret passcode";

// class Employee {
//     private _fullName : string;

//     get fullName() : string {
//         console.log("get");
//         return this._fullName;
//     }

//     set fullName(newName : string) {
//         console.log("set");
//         if( passcode && passcode == "secret passcode" ){
//             this._fullName = newName;
//         } else {
//             console.log("Error")
//         }
//     }
// }

// let employee = new Employee();

// employee.fullName = "Bob Smith";

// console.log(employee.fullName);

// /**
//  * 输出执行顺序
//  * set
//  * get
//  * Bob Smith
//  * 
//  */




// 类型兼容  -> 鸭子辩型法（子结构辩型法）

// 鸭子接口
// interface Duck{
//     sound : "嘎嘎嘎"
//     swin() : void,
// }

// let person = {
//     name : "伪装成鸭子的人",
//     age : 11,
//     sound : "嘎嘎嘎" as "嘎嘎嘎", // 类型断言
//     swin(){
//         console.log(this.name + "正在游泳，并发出了" + this.sound + "的叫声！")
//     }
// }

// let duck : Duck = person;

// console.log(duck.swin()); // 但是不能使用 duck.name，因为鸭子里面没有name



// 函数。

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
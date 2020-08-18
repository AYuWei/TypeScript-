// // 返回也是一个数字
// function sum(a : number , b : number) {
//     return a + b;
// };

// sum(2, 3);

// function printValues(obj:object){
//     let aa : object = Object.values(obj)
// }

// printValues({
//     name : '11',
//     age : 22
// })

// let myName : string | undefined;
// if(typeof myName === "string"){
//     // 类型保护
//     let a = myName.charAt(2);
// }

// type Gender = "男" | "女";

// type User = {
//     name : string ,
//     age : number ,
//     gender : Gender
// }

// let u : User;

// u = {
//     name : "YuWei",
//     age : 22,
//     gender : "男",
// }

// function getUser(g : Gender) : User[]{
//     return [];
// }


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

combine(1,2)
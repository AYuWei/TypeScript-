// function take<T>(arr : T[], n : number) : T[]{
//     if(n > arr.length){
//         return arr;
//     }

// import { callbackify } from "util";
// import { networkInterfaces } from "os";

//     const newArr : T[] = []; // 默认值
//     for(let i = 0; i < n ; i ++){
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// const result = take<number>([1,2,1,2,3,8],2)


// function loggingIdentity<T>(arg : T[]) : T[]{
//     return arg;
// }
// function logging<T>(arr) : T[]{
//     console.log(arr, arr.length);
//     return arr;
// }
// let arr = loggingIdentity([1,2,3,4])
// let arr1 = logging("aaa")


// 在类中使用泛型。


// 回调函数：判断数组中的某一项是否满足条件

// type callback<T> = (n : T, i : number) => boolean;

// function fillter<T>(arr : T[], callback : callback<T> ) : T[]{
//     let newArr : T[] = [];
//     arr.forEach( (n , i) => {
//         if(callback(n , i)){
//             newArr.push(n);
//         }
//     } );
//     return newArr;
// }

// let result = fillter([1,2,3,4,5,7,8 ], n => n % 2 !== 0 );
// console.log(result);

// interface callback<T> {
//     (n : T , i : number) : boolean;
// }

// function fillter<T>(arr : T[], callback : callback<T>) : T[]{
//     const newArr : T[] = [];
//     arr.forEach((item, i) => {
//         if(callback(item, i)){
//             newArr.push(item);
//         }
//     })
//     return newArr;
// }

// let result = fillter([1,2,3,4,5,7,8 ], n => n % 2 !== 0 );
// console.log(result);


// 使用类
// import { ArrayHelp } from "./ArrayHelp";

// const array = new ArrayHelp();
// console.log( array.take([1,3,5,8,9,11], 3) );

// console.log(array.shuffle([1,2,3,4,5,6,7,8,9,10]))

// 泛型约束

// interface IsName {
//     name : string,
// }

// function nameToUpperCase<T extends IsName>(obj : T) : T{
//     if(obj.name.length == 0){
//         return obj;
//     } else {
//         obj.name = obj.name
//             .split(" ")
//             .map((item) => {
//             return item[0].toUpperCase() + item.substr(1);
//         }).join(" ");
//     }
//     return obj;
// }

// const o = {
//     name : "a yu wei",
//     age : 22,
// }

// let obj = nameToUpperCase(o);
// console.log(obj)


//  多泛型

// [1,2,3] + ['a','b','c'] = [1,'a',2,'b',3,'c'];
function mixinArray<T , K>(arr : T[], arr1 : K[]) : (T | K)[] {
    if(arr.length !== arr1.length){
        throw new Error("两个数组长度不等");
    } 
    let result : ( T | K)[] = [];
    for(let i = 0 ; i < arr.length ; i ++){
        result.push(arr[i]);       
        result.push(arr1[i]);       
    }
    return result;
}

let arr = mixinArray([1,2,3] , ['a','b','c'])
console.log(arr);
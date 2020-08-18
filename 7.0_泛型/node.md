# 泛型

有时，书写某个函数是，会丢失一些信息（很多位置的类型应该保持一直或有关联的信息）

泛型：是指附属于函数，类，接口，类型别名之上的类型。

泛型相当于是一个类型变量，在定义是，无法预先知道具体的类型，可以用该变量来替代，只有到调用的时候，才能确它的类型。

很多时候，TS会只能的根据传递的参数，推到出泛型的具体类型。

# 在函数中使用泛型

在函数名之后写上```<泛型名称>```

```ts
function take<T>(arr : T[], n : number) : T[]{
    if(n > arr.length){
        return arr;
    }

    const newArr : T[] = []; // 默认值
    for(let i = 0; i < n ; i ++){
        newArr.push(arr[i]);
    }
    return newArr;
}

const result = take<number>([1,2,1,2,3,8],2)
```

# 如何在类型别名，接口，类中使用泛型。

直接在名称后面写上```<泛型名称>```

类型别名
```ts
type callback<T> = (n : T, i : number) => boolean;
function fillter<T>(arr : T[], callback : callback<T> ) : T[]{
    let newArr : T[] = [];
    arr.forEach( (n , i) => {
        if(callback(n , i)){
            newArr.push(n);
        }
    } );
    return newArr;
}
let result = fillter([1,2,3,4,5,7,8 ], n => n % 2 !== 0 );
console.log(result);
```

接口
```ts
interface callback<T> {
    (n : T , i : number) : boolean;
}
function fillter<T>(arr : T[], callback : callback<T>) : T[]{
    const newArr : T[] = [];
    arr.forEach((item, i) => {
        if(callback(item, i)){
            newArr.push(item);
        }
    })
    return newArr;
}
let result = fillter([1,2,3,4,5,7,8 ], n => n % 2 !== 0 );
console.log(result);
```
类中使用
```ts
export class ArrayHelp<T>{
    
    take<T>( arr : T[] , n : number ) : T[]{
        if(n > arr.length){
            return arr;
        }
        const newArr : T[] = [];
        for(let i = 0 ; i < n ; i ++){
            newArr.push(arr[i]);
        }
        return newArr;
    }

    private getRandom(min , max){
        const dec = max - min;
        return Math.floor( Math.random() * dec + min );
    }

    shuffle<T>(arr : T[]){
        for(let i = 0 ; i < arr.length ; i++){
            const targetIndex = this.getRandom(0, arr.length);
            let temp = arr[i];
            arr[i] = arr[targetIndex];
            arr[targetIndex] = temp;
        }
        return arr;
    }

}
```

# 泛型的约束

比如说我们想给某一端文本的首字母都改为大写，然后我们则使用泛型的时候有时候是无法确定具体类型的，则我们要需要一个约束来，告知这个方法，具有该属性。

```ts
interface IsName {
    name : string,
}

function nameToUpperCase<T extends IsName>(obj : T) : T{
    if(obj.name.length == 0){
        return obj;
    } else {
        obj.name = obj.name
            .split(" ")
            .map((item) => {
            return item[0].toUpperCase() + item.substr(1);
        }).join(" ");
    }
    return obj;
}

const o = {
    name : "a yu wei",
    age : 22,
}

let obj = nameToUpperCase(o);
console.log(obj)
```

# 多泛型
```ts
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
```
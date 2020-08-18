// enum Gander {
//     male = "男",
//     female = "女"
// }

// let gander : Gander;

// gander = Gander.male;
// gander = Gander.female;

// console.log(gander);


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

 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayHelp = void 0;
class ArrayHelp {
    take(arr, n) {
        if (n > arr.length) {
            return arr;
        }
        const newArr = [];
        for (let i = 0; i < n; i++) {
            newArr.push(arr[i]);
        }
        return newArr;
    }
    getRandom(min, max) {
        const dec = max - min;
        return Math.floor(Math.random() * dec + min);
    }
    shuffle(arr) {
        for (let i = 0; i < arr.length; i++) {
            const targetIndex = this.getRandom(0, arr.length);
            let temp = arr[i];
            arr[i] = arr[targetIndex];
            arr[targetIndex] = temp;
        }
        return arr;
    }
}
exports.ArrayHelp = ArrayHelp;

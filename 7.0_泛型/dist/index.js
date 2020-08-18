"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayHelp_1 = require("./ArrayHelp");
const array = new ArrayHelp_1.ArrayHelp();
console.log(array.take([1, 3, 5, 8, 9, 11], 3));
console.log(array.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

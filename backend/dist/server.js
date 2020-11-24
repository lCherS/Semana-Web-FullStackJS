"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
// database.sync({force: true});
console.log('database running at 3306');
app_1.default.listen(3000);
console.log('server rununing 3000');

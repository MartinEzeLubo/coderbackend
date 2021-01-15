"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subtract {
    constructor(a, b) {
        this.resultado = () => {
            return this.a - this.b;
        };
        this.a = a;
        this.b = b;
    }
}
exports.default = Subtract;

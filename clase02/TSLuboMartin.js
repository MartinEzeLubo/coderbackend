"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const operacion = (number1, number2, op) => {
    return new Promise((res, err) => {
        switch (op.toLowerCase()) {
            case 'suma':
                Promise.resolve().then(() => __importStar(require('./operations/sum'))).then(e => {
                    let Suma = e.default;
                    let op = new Suma(number1, number2);
                    res(op.resultado());
                });
                break;
            case 'restar':
                Promise.resolve().then(() => __importStar(require('./operations/subtract'))).then(e => {
                    let Subtract = e.default;
                    let op = new Subtract(number1, number2);
                    res(op.resultado());
                });
                break;
            case 'multiplicar':
                Promise.resolve().then(() => __importStar(require('./operations/multiply'))).then(e => {
                    let Multiply = e.default;
                    let op = new Multiply(number1, number2);
                    res(op.resultado());
                });
                break;
            case 'dividir':
                Promise.resolve().then(() => __importStar(require('./operations/divide'))).then(e => {
                    let Divide = e.default;
                    let op = new Divide(number1, number2);
                    let resultado = op.resultado();
                    if (resultado.toString() === 'Infinity') {
                        let fallo = new Error('No es posible dividir los valores ingresados');
                        err(fallo);
                    }
                    else {
                        res(resultado);
                    }
                });
                break;
            default:
                let fallo = new Error('operacion invalida');
                err(fallo);
        }
    });
};
//* Estas pruebas capturan todos los errores individualmente - Mezcla rara entre async/await y promesas**/
function operaciones() {
    return __awaiter(this, void 0, void 0, function* () {
        yield operacion(10, 5, 'suma').then(e => {
            console.log(e);
        })
            .catch(err => {
            console.log(err);
        });
        yield operacion(10, 5, 'restar').then(e => {
            console.log(e);
        })
            .catch(err => {
            console.log(err);
        });
        yield operacion(10, 5, 'multiplicar').then(e => {
            console.log(e);
        })
            .catch(err => {
            console.log(err);
        });
        yield operacion(10, 5, 'dividir').then(e => {
            console.log(e);
        })
            .catch(err => {
            console.log(err);
        });
        yield operacion(10, 0, 'dividir').then(e => {
            console.log(e);
        })
            .catch(err => {
            console.log(err);
        });
        yield operacion(10, 0, 'divasdasidir').then(e => {
            console.log(e);
        })
            .catch(err => {
            console.log(err);
        });
    });
}
operaciones();
//* Estas pruebas terminan ante el primer error**/
function operacionesAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(yield operacion(10, 5, 'suma'));
            console.log(yield operacion(10, 5, 'restar'));
            console.log(yield operacion(10, 0, 'divasdasidir'));
            console.log(yield operacion(10, 5, 'multiplicar'));
            console.log(yield operacion(10, 5, 'dividir'));
            console.log(yield operacion(10, 0, 'dividir'));
        }
        catch (err) {
            console.log(err);
        }
    });
}
operacionesAsync();

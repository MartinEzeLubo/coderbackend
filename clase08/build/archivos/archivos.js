"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archivo = void 0;
const fs = require('fs');
class Archivo {
    constructor(name) {
        this.contador = 0;
        this.fileName = name;
    }
    leer() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let contenido = yield fs.promises.readFile(`./src/archivos/${this.fileName}.txt`, 'utf-8');
                return contenido;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    guardar(newTitle, newPrice, newUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            let info;
            try {
                let data = yield fs.promises.readFile(`./src/archivos/${this.fileName}.txt`, 'utf-8');
                info = JSON.parse(data);
                let id = info.length + 1;
                let product = { 'title': newTitle,
                    'price': newPrice,
                    'thumbnail': newUrl,
                    'id': id,
                };
                info.push(product);
                yield fs.promises.writeFile(`./src/archivos/${this.fileName}.txt`, JSON.stringify(info, null, 4));
                return product;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    borrar() {
        return __awaiter(this, void 0, void 0, function* () {
            fs.unlink(`./${this.fileName}.txt`, (error) => {
                if (error)
                    throw error;
            });
        });
    }
}
exports.Archivo = Archivo;
//# sourceMappingURL=archivos.js.map
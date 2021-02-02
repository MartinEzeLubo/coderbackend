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
exports.writeDataFile = exports.readDataFile = void 0;
const archivos_1 = require("./archivos");
const dataSource = new archivos_1.Archivo('productos');
function readDataFile() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield dataSource.leer();
            return data;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.readDataFile = readDataFile;
function writeDataFile(title, price, thumbnail) {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        try {
            data = yield dataSource.guardar(title, price, thumbnail);
        }
        catch (error) {
            console.log(error);
        }
        return data;
    });
}
exports.writeDataFile = writeDataFile;
//# sourceMappingURL=readWriteFiles.js.map
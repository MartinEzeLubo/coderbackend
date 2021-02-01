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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const archivos_1 = require("./archivos/archivos");
const app = express_1.default();
const port = 8080;
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
app.get('/', (req, res) => {
    res.send('Clase 08 Coderhouse Backend');
});
app.get('/api/productos/listar', (req, res) => {
    let products;
    readDataFile().then(info => {
        products = JSON.parse(info);
        res.json(products);
    });
});
app.get('/api/productos/listar/:id', (req, res) => {
    let id = req.params.id;
    let product;
    readDataFile().then(info => {
        product = JSON.parse(info);
        res.json({ 'items': product[id] });
    });
});
app.post('/api/productos/guardar/:title&:price&:thumbnail', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield writeDataFile(req.params.title, parseInt(req.params.price), req.params.thumbnail);
        console.log(data);
        res.json(data);
    }
    catch (error) {
    }
}));
app.listen(port, () => {
    return console.log(`Servidor listo en puerto ${port}`);
});
//# sourceMappingURL=app.js.map
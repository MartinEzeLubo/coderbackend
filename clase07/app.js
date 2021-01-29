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
const archivos_1 = require("./archivos");
const app = express_1.default();
const port = 8080;
const dataSource = new archivos_1.Archivo('productos');
let visitasItems = 0;
let visitasRandom = 0;
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
app.get('/', (req, res) => {
    res.send('Clase 07 Coderhouse Backend');
});
app.get('/items', (req, res) => {
    visitasItems++;
    let products;
    readDataFile().then(info => {
        products = JSON.parse(info);
        res.json({ 'items': products, 'cantidad': products.length });
    });
});
app.get('/item-random', (req, res) => {
    visitasRandom++;
    let product;
    readDataFile().then(info => {
        product = JSON.parse(info);
        let productNumber = Math.floor(Math.random() * (product.length - 1) + 1);
        res.json({ 'items': product[productNumber] });
    });
});
app.get('/visitas', (req, res) => {
    res.json({ 'visitas': { '/items': visitasItems, '/item-random': visitasRandom } });
});
app.listen(port, () => {
    return console.log(`Servidor listo en puerto ${port}`);
});
//# sourceMappingURL=app.js.map
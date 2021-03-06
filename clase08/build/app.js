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
const readWriteFiles_1 = require("./archivos/readWriteFiles");
const app = express_1.default();
const port = 8080;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Clase 08 Coderhouse Backend');
});
app.get('/api/productos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let products = yield readWriteFiles_1.readDataFile();
    res.json(products);
}));
app.get('/api/productos/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let products = yield readWriteFiles_1.readDataFile();
        let product = products.find(element => element.id === parseInt(req.params.id));
        if (!product) {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json({ 'item': product });
    }
    catch (error) {
        res.status(500).send('Error de la aplicacion' + error);
    }
}));
app.post('/api/productos/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.title || !req.body.price || !req.body.thumbnail) {
        res.status(400).send('Los parametros enviados son incorrectos');
    }
    try {
        let data = yield readWriteFiles_1.writeDataFile(req.body.title, parseInt(req.body.price), req.body.thumbnail);
        res.json(data);
    }
    catch (error) {
        res.status(500).send('Error de la aplicacion' + error);
    }
}));
app.listen(port, () => {
    return console.log(`Servidor listo en puerto ${port}`);
}).on('error', () => console.log('El puerto configurado se encuentra en uso'));
//# sourceMappingURL=app.js.map
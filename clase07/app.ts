import express from 'express';
import {Archivo} from './archivos';

const app = express();
const port = 8080;
const dataSource = new Archivo('productos');
let visitasItems = 0;
let visitasRandom = 0;



async function readDataFile(){
  try {
    let data = await dataSource.leer();
    return data;
    
  } catch(err){
    console.log(err);
  }
  
}


app.get('/', (req, res) => {
  
  
  
  res.send('Clase 07 Coderhouse Backend');
});



app.get('/items', (req, res) => {
  visitasItems++;
  let products;
  readDataFile().then(info => {
    products = JSON.parse(info);
    res.json({'items': products, 'cantidad': products.length });
  });
});

app.get('/item-random', (req, res) => {
  visitasRandom++;
  let product;
  readDataFile().then(info => {
    product = JSON.parse(info);
    let productNumber = Math.floor(Math.random() * (product.length - 1) + 1);
    res.json({'items': product[productNumber]});
  });
});

app.get('/visitas', (req, res) => {
  res.json({'visitas': {'/items': visitasItems, '/item-random': visitasRandom}});
});



app.listen(port, () => {
  
  return console.log(`Servidor listo en puerto ${port}`);
});

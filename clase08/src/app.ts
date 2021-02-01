import express from 'express';
import { title } from 'process';
import {Archivo} from './archivos/archivos';

const app = express();
const port = 8080;
const dataSource = new Archivo('productos');



async function readDataFile(){
  try {
    let data = await dataSource.leer();
    return data;
    
  } catch(err){
    console.log(err);
  }
}

async function writeDataFile(title: string, price: number, thumbnail: string){
  let data;
  try {
    data = await dataSource.guardar(title, price, thumbnail)
        

  } catch (error) {
    console.log(error);
  }
  return data;
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
    res.json({'items': product[id]});
  });
});

app.post('/api/productos/guardar/:title&:price&:thumbnail', async (req, res) => {
  
  try {
    
    let data = await writeDataFile(req.params.title, parseInt(req.params.price), req.params.thumbnail);
    console.log(data);
    res.json(data)
    
  } catch (error) {
    
  }
  
  
});



app.listen(port, () => {
  
  return console.log(`Servidor listo en puerto ${port}`);
});

import { errorMonitor } from 'events';
import express from 'express';
import {readDataFile, writeDataFile} from './archivos/readWriteFiles';

const app = express();
const port = 8080;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Clase 08 Coderhouse Backend');
});



app.get('/api/productos', async (req, res) => {
  
  let products = await readDataFile();
  res.json(products);

});


app.get('/api/productos/:id', async (req, res) => {
  
  try {
    let products = await readDataFile();
    let product = products.find(element => element.id === parseInt(req.params.id));
    if (!product){
      res.status(404).json({error: 'Producto no encontrado'})
    }
    res.json({'item': product});
    
  } catch (error) {
    res.status(500).send('Error de la aplicacion' + error);

  }
    
  
});

app.post('/api/productos/', async (req, res) => {
  
  if(!req.body.title || !req.body.price || !req.body.thumbnail){
    res.status(400).send('Los parametros enviados son incorrectos');
  }
  try {
  
    let data = await writeDataFile(req.body.title, parseInt(req.body.price), req.body.thumbnail);
    res.json(data)
    
  } catch (error) {
    res.status(500).send('Error de la aplicacion' + error);
  }
  
  
});



app.listen(port, () => {
  
  return console.log(`Servidor listo en puerto ${port}`);
}).on('error', ()=>console.log('El puerto configurado se encuentra en uso'));
